
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
  };
  readTime: string;
  category: string;
  categoryColor: string;
  image: string;
  featured?: boolean;
}

const ArticleCard = ({ 
  title, 
  excerpt, 
  author, 
  readTime, 
  category, 
  categoryColor, 
  image,
  featured = false 
}: ArticleCardProps) => {
  return (
    <Link to="/article/1">
      <article className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer ${featured ? 'lg:col-span-2' : ''}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-600">📖</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-3">
            <Badge 
              variant="secondary" 
              className={`text-xs px-3 py-1 rounded-full ${categoryColor}`}
            >
              #{category}
            </Badge>
          </div>
          
          <h3 className={`font-bold text-gray-900 mb-3 leading-tight ${featured ? 'text-xl' : 'text-lg'}`}>
            {title}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={author.avatar} />
                <AvatarFallback className="text-xs">{author.initials}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-700">{author.name}</span>
            </div>
            <span className="text-xs text-gray-500">{readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
