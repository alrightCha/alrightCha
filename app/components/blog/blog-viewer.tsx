"use client";

import React, { useEffect, useState } from 'react';
import { useBlogViewer } from '@/app/contexts/blog-viewer';
import { subjects } from '../ascii/ascii';

const BlogViewer = () => {
    const { isOpen, blogContent, blogData, closeBlog } = useBlogViewer();
    const [parsedContent, setParsedContent] = useState<string>('');

    useEffect(() => {
        if (blogContent && blogData) {
            // Extract the blog content from the HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(blogContent, 'text/html');

            // Find the blog content div
            const blogContentDiv = doc.querySelector('.blog-content');
            if (blogContentDiv) {
                setParsedContent(blogContentDiv.innerHTML);
            } else {
                // Fallback: try to extract content from body
                const body = doc.querySelector('body');
                if (body) {
                    // Remove theme toggle and other UI elements
                    const themeToggle = body.querySelector('.theme-toggle');
                    const backBtn = body.querySelector('.back-btn');
                    const blogFooter = body.querySelector('.blog-footer');

                    if (themeToggle) themeToggle.remove();
                    if (backBtn) backBtn.remove();
                    if (blogFooter) blogFooter.remove();

                    setParsedContent(body.innerHTML);
                } else {
                    setParsedContent(blogContent);
                }
            }
        }
    }, [blogContent, blogData]);

    if (!isOpen || !blogData) return null;

    const asciiArt = subjects.find(s => s.subject === blogData.topic)?.ascii || '';

    return (
        <div className="h-full bg-white dark:bg-black">
            <div className="p-8 max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8 text-center">
                    <pre className="ascii-art mb-6 font-mono text-sm whitespace-pre text-center text-gray-800 dark:text-gray-200">
                        {asciiArt}
                    </pre>
                    <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
                        {blogData.title}
                    </h1>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                        {new Date(blogData.createdAt).toLocaleString()}
                    </div>
                </div>

                {/* Content */}
                <div
                    className="blog-content prose prose-lg max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: parsedContent }}
                />

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
                    <p className="text-sm">
                        Created with{' '}
                        <a
                            href="https://myonchain.id"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline font-semibold"
                        >
                            myonchain.id
                        </a>
                    </p>
                </div>
            </div>

            <style jsx>{`
                .ascii-art {
                    font-family: 'Fira Mono', 'Consolas', 'Menlo', 'Monaco', 'monospace';
                    font-size: 1.1rem;
                    line-height: 1.1;
                    max-width: 100%;
                    overflow-x: auto;
                }
                
                .blog-content h1 {
                    font-size: 2.5em;
                    font-weight: 700;
                    margin: 1em 0 0.5em;
                    color: inherit;
                }
                
                .blog-content h2 {
                    font-size: 2em;
                    font-weight: 600;
                    margin: 1em 0 0.5em;
                    color: inherit;
                }
                
                .blog-content h3 {
                    font-size: 1.75em;
                    font-weight: 600;
                    margin: 1em 0 0.5em;
                    color: inherit;
                }
                
                .blog-content h4 {
                    font-size: 1.5em;
                    font-weight: 600;
                    margin: 1em 0 0.5em;
                    color: inherit;
                }
                
                .blog-content p {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    margin: 1em 0;
                    color: inherit;
                }
                
                .blog-content ul, .blog-content ol {
                    margin-left: 2em;
                    margin-bottom: 1em;
                }
                
                .blog-content li {
                    margin-bottom: 0.5em;
                }
                
                .blog-content strong {
                    font-weight: bold;
                }
                
                .blog-content em {
                    font-style: italic;
                }
                
                .blog-content u {
                    text-decoration: underline;
                }
                
                .blog-content .highlighted-text {
                    background: #ffe066;
                    color: #222;
                    border-radius: 0.2em;
                    padding: 0.1em 0.3em;
                }
                
                .dark .blog-content .highlighted-text {
                    background: #444444;
                    color: #f3f4f6;
                }
                
                .blog-content img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 0.5em;
                    margin: 1.5em auto;
                    display: block;
                }
                
                @media (max-width: 768px) {
                    .ascii-art {
                        font-size: 0.8rem;
                    }
                    
                    .blog-content h1 {
                        font-size: 2rem;
                    }
                    
                    .blog-content h2 {
                        font-size: 1.75rem;
                    }
                    
                    .blog-content h3 {
                        font-size: 1.5rem;
                    }
                    
                    .blog-content h4 {
                        font-size: 1.25rem;
                    }
                    
                    .blog-content p {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default BlogViewer; 