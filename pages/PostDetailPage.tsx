import React, { useState, useEffect, useRef } from 'react';
import { getPostById } from '../utils/posts';
import type { Post } from '../types';
import Tag from '../components/Tag';
import ShareButtons from '../components/ShareButtons';
import BackToTopButton from '../components/BackToTopButton';

interface PostDetailPageProps {
  postId: string;
  lang: string;
}

// Fix: Add highlightElement to the hljs type declaration.
declare const hljs: {
  highlightAll: () => void;
  highlightElement: (element: HTMLElement) => void;
};

const ClockIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const UserIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const PostDetailPage: React.FC<PostDetailPageProps> = ({ postId, lang }) => {
  const [post, setPost] = useState<Post | null | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setPost(undefined); 
      const fetchedPost = await getPostById(postId, lang);
      setPost(fetchedPost ?? null);
    };
    fetchPost();
  }, [postId, lang]);

  useEffect(() => {
    if (post && contentRef.current) {
      // Find all `pre` elements that haven't been processed yet
      const codeBlocks = contentRef.current.querySelectorAll('pre:not(.processed)');

      codeBlocks.forEach(pre => {
        pre.classList.add('processed'); // Mark as processed
        
        const wrapper = document.createElement('div');
        wrapper.className = 'relative group';
        pre.parentNode?.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        const button = document.createElement('button');
        button.className = 'copy-button absolute top-2 right-2 p-1.5 bg-button-bg rounded-md text-text-primary hover:bg-border transition-all duration-200 opacity-0 group-hover:opacity-100';
        button.ariaLabel = 'Copy code to clipboard';
        
        const copyIconHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v2.25c0 .966-.784 1.75-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-2.25c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"></path></svg>`;
        const checkIconHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>`;
        
        button.innerHTML = copyIconHTML;

        const handleClick = () => {
          const code = pre.querySelector('code')?.innerText || '';
          navigator.clipboard.writeText(code).then(() => {
            button.innerHTML = checkIconHTML;
            button.classList.add('text-accent');
            setTimeout(() => {
              button.innerHTML = copyIconHTML;
              button.classList.remove('text-accent');
            }, 2000);
          }).catch(err => {
            console.error('Failed to copy text: ', err);
          });
        };
        
        button.addEventListener('click', handleClick);
        wrapper.appendChild(button);
      });

      // Highlight all code blocks in the content area
      if (contentRef.current) {
        contentRef.current.querySelectorAll('pre code').forEach((block) => {
          hljs.highlightElement(block as HTMLElement);
        });
      }
    }
  }, [post]);

  const pageContent = {
    en: {
      loading: "Loading post...",
      notFoundTitle: "404 - Post Not Found",
      notFoundSubtitle: "The requested post could not be found.",
      backToPosts: "Back to all posts",
      readingTimeSuffix: "min read",
      tags: "Tags",
      share: "Share this post",
    },
    es: {
      loading: "Cargando post...",
      notFoundTitle: "404 - Post No Encontrado",
      notFoundSubtitle: "El post solicitado no pudo ser encontrado.",
      backToPosts: "Volver a todos los posts",
      readingTimeSuffix: "min de lectura",
      tags: "Etiquetas",
      share: "Compartir este post",
    }
  };
  
  const t = pageContent[lang as keyof typeof pageContent] || pageContent.en;

  if (post === undefined) {
    return (
      <div className="text-center py-20">
        <p className="text-text-secondary">{t.loading}</p>
      </div>
    );
  }

  if (post === null) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-error">{t.notFoundTitle}</h1>
        <p className="text-text-secondary mt-2">{t.notFoundSubtitle}</p>
        <a href="#" className="mt-6 inline-block text-accent hover:text-accent-hover">
          &larr; {t.backToPosts}
        </a>
      </div>
    );
  }

  return (
    <>
      <article className="max-w-3xl mx-auto">
        <header className="mb-8 text-center border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-text-secondary">
            <div className="flex items-center gap-1.5">
              <UserIcon className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <span>&bull;</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString(lang, { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>&bull;</span>
            <div className="flex items-center gap-1.5">
              <ClockIcon className="w-4 h-4" />
              <span>{post.readingTime} {t.readingTimeSuffix}</span>
            </div>
          </div>
        </header>

        <div 
          ref={contentRef}
          className="prose prose-lg max-w-none 
                    prose-p:my-6
                    prose-headings:mt-12 prose-headings:mb-4 
                    prose-blockquote:my-8 prose-blockquote:py-2
                    prose-li:my-3
                    prose-pre:my-8 prose-pre:p-4 prose-pre:rounded-lg
                    prose-hr:my-12
                    prose-code:bg-code-bg prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-[''] prose-code:after:content-['']"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        <footer className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold text-text-secondary mb-4">{t.tags}</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>

          <ShareButtons post={post} title={t.share} />
          
          <a href="#" className="mt-8 inline-block text-accent hover:text-accent-hover">
            &larr; {t.backToPosts}
          </a>
        </footer>
      </article>
      <BackToTopButton />
    </>
  );
};

export default PostDetailPage;