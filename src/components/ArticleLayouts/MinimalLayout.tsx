
import React from 'react';

interface MinimalLayoutProps {
  article: {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    heroImage: string;
    authorImage: string;
    content: React.ReactNode;
  };
}

const MinimalLayout = ({ article }: MinimalLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-center space-y-6">
            <div className="text-sm uppercase tracking-wide text-gray-500 font-medium">
              {article.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-center space-x-4 pt-8">
              <img 
                src={article.authorImage}
                alt={article.author}
                className="w-10 h-10 rounded-full"
              />
              <div className="text-sm text-gray-500">
                By <span className="text-gray-900 font-medium">{article.author}</span> • {article.date} • {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg prose-serif max-w-none">
          {article.content}
        </div>
      </div>
    </div>
  );
};

export default MinimalLayout;
