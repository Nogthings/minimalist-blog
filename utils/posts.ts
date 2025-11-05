import type { Post } from '../types';

// Make the 'marked' library available in the scope, loaded from CDN.
declare const marked: {
  parse: (markdown: string) => string;
};

/**
 * Parses a simple key-value frontmatter block.
 * Tags should be a comma-separated string.
 * e.g., tags: React, JavaScript, Frontend
 */
const parseFrontmatter = (text: string): Omit<Post, 'id' | 'content'> => {
  const metadata: any = {};
  const lines = text.split('\n');
  for (const line of lines) {
    const match = line.match(/^([^:]+):\s*(.*)$/);
    if (match) {
      const key = match[1].trim();
      let value: any = match[2].trim();

      if (key === 'tags') {
        value = value.split(',').map(tag => tag.trim());
      } else if (key === 'readingTime') {
        value = parseInt(value, 10);
      }
      metadata[key] = value;
    }
  }
  return metadata as Omit<Post, 'id' | 'content'>;
};

/**
 * Fetches the metadata for all posts from a language-specific manifest file.
 */
export const getPosts = async (lang: string): Promise<Post[]> => {
  try {
    const response = await fetch(`/posts/${lang}/manifest.json`);
    if (!response.ok) {
      throw new Error(`Network response was not ok for language: ${lang}`);
    }
    const posts: Omit<Post, 'content'>[] = await response.json();
    return posts.map(p => ({ ...p, content: '' })); // Add empty content string
  } catch (error) {
    console.error(`Failed to fetch posts manifest for language "${lang}":`, error);
    return [];
  }
};

/**
 * Fetches a single post by its ID and language, parses its Markdown file,
 * and returns the full post object with HTML content.
 */
export const getPostById = async (id: string, lang: string): Promise<Post | undefined> => {
  try {
    const response = await fetch(`/posts/${lang}/${id}.md`);
    if (!response.ok) {
      // Fallback to default language (e.g., 'en') if post not found in current lang
      if (lang !== 'en') {
        console.warn(`Post "${id}" not found in "${lang}", trying fallback to "en".`);
        return getPostById(id, 'en');
      }
      return undefined;
    }
    const markdownText = await response.text();

    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
    const match = markdownText.match(frontmatterRegex);

    if (!match) {
      console.error(`Post with id "${id}" in lang "${lang}" is missing frontmatter.`);
      return undefined;
    }

    const frontmatter = parseFrontmatter(match[1]);
    const contentMarkdown = markdownText.substring(match[0].length).trim();
    const contentHtml = marked.parse(contentMarkdown);

    return {
      id,
      ...frontmatter,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error fetching post with id "${id}" in lang "${lang}":`, error);
    return undefined;
  }
};
