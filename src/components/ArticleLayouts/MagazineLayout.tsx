
import React from 'react';

interface MagazineLayoutProps {
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

const MagazineLayout = ({ article }: MagazineLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Magazine-style Hero */}
      <div className="relative h-screen">
        <img 
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 md:p-12 max-w-3xl rounded-t-2xl">
              <div className="inline-block bg-red-600 text-white px-4 py-2 text-sm font-bold uppercase tracking-wide mb-4">
                {article.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {article.excerpt}
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={article.authorImage}
                  alt={article.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-bold text-gray-900">{article.author}</div>
                  <div className="text-sm text-gray-500">{article.date} • {article.readTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content with sidebar style */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="prose prose-lg max-w-none">
                {article.content}
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Article Info</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">Category:</span>
                  <span className="ml-2 font-medium">{article.category}</span>
                </div>
                <div>
                  <span className="text-gray-500">Reading Time:</span>
                  <span className="ml-2 font-medium">{article.readTime}</span>
                </div>
                <div>
                  <span className="text-gray-500">Published:</span>
                  <span className="ml-2 font-medium">{article.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineLayout;
