
import { Search, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">ClubChat</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Events</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Fests</a>
          <a href="#" className="text-blue-600 font-medium">Blog</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
        </nav>

        {/* Search and Login */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search stories..." 
              className="pl-10 w-64 bg-gray-50 border-gray-200"
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
