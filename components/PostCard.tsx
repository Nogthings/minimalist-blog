import React from 'react';
import type { Post } from '../types';
import Tag from './Tag';

interface PostCardProps {
  post: Post;
}

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


const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="bg-card/50 p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300">
      <header className="mb-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-secondary mb-2">
          <div className="flex items-center gap-1.5">
            <UserIcon className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <span>&bull;</span>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          <span>&bull;</span>
          <div className="flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
        <a href={`#/post/${post.id}`} className="block">
          <h2 className="text-2xl font-bold text-text-primary hover:text-accent transition-colors">
            {post.title}
          </h2>
        </a>
      </header>
      <p className="text-text-secondary mb-4">{post.excerpt}</p>
      <footer className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </footer>
    </article>
  );
};

export default PostCard;
