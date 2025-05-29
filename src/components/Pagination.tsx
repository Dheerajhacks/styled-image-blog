
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      <Button variant="ghost" size="sm" className="p-2">
        <ChevronLeft className="w-4 h-4" />
      </Button>
      
      <Button variant="default" size="sm" className="w-8 h-8 p-0 bg-blue-600 text-white">
        1
      </Button>
      
      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
        2
      </Button>
      
      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
        3
      </Button>
      
      <span className="text-gray-400 px-2">...</span>
      
      <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
        12
      </Button>
      
      <Button variant="ghost" size="sm" className="p-2">
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Pagination;
