import React, { useState } from 'react';
import type { Post } from '../types';

interface ShareButtonsProps {
  post: Post;
  title: string;
}

const TwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const LinkIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);


const ShareButtons: React.FC<ShareButtonsProps> = ({ post, title }) => {
    const [copied, setCopied] = useState(false);
    const postUrl = typeof window !== 'undefined' ? window.location.href : '';

    const handleCopyLink = () => {
        if (!postUrl) return;
        navigator.clipboard.writeText(postUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`,
    };

    return (
        <div className="mt-8">
            <h3 className="text-lg font-semibold text-text-secondary mb-4">{title}</h3>
            <div className="flex items-center gap-3">
                <a 
                    href={shareLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                    className="p-2 bg-button-bg rounded-full text-text-primary hover:bg-accent hover:text-tag-text-active transition-colors"
                >
                    <TwitterIcon />
                </a>
                <a 
                    href={shareLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="p-2 bg-button-bg rounded-full text-text-primary hover:bg-accent hover:text-tag-text-active transition-colors"
                >
                    <LinkedInIcon />
                </a>
                <button
                    onClick={handleCopyLink}
                    aria-label="Copy link"
                    className={`p-2 rounded-full transition-colors flex items-center gap-2 ${
                        copied 
                        ? 'bg-success/30 text-success' 
                        : 'bg-button-bg text-text-primary hover:bg-accent hover:text-tag-text-active'
                    }`}
                >
                    {copied ? <CheckIcon /> : <LinkIcon />}
                </button>
            </div>
        </div>
    );
};

export default ShareButtons;
