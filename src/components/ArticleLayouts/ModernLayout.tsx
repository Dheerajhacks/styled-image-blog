
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface ModernLayoutProps {
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

const ModernLayout = ({ article }: ModernLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Modern Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
        <div className="relative h-[70vh] flex items-center">
          <div className="max-w-4xl mx-auto px-6 text-white">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30">
                {article.category}
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {article.title}
              </h1>
              <p className="text-xl opacity-90 max-w-2xl">
                {article.excerpt}
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <img 
                  src={article.authorImage}
                  alt={article.author}
                  className="w-12 h-12 rounded-full border-2 border-white/30"
                />
                <div>
                  <div className="font-semibold">{article.author}</div>
                  <div className="text-sm opacity-75">{article.date} • {article.readTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <div className="prose prose-lg max-w-none">
            {article.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernLayout;
