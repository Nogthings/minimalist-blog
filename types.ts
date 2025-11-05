
export interface Post {
  id: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  readingTime: number; // in minutes
  content: string; // Markdown content
  excerpt: string;
}
