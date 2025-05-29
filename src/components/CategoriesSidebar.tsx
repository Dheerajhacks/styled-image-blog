
import { Users, Calendar, GraduationCap, Lightbulb, Newspaper } from 'lucide-react';

const categories = [
  { name: "Club Activities", count: 24, icon: Users, color: "text-blue-600" },
  { name: "Events & Festivals", count: 18, icon: Calendar, color: "text-purple-600" },
  { name: "Student Life", count: 32, icon: GraduationCap, color: "text-green-600" },
  { name: "Tips & Advice", count: 15, icon: Lightbulb, color: "text-yellow-600" },
  { name: "Campus News", count: 21, icon: Newspaper, color: "text-red-600" },
];

const CategoriesSidebar = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Categories</h3>
      
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center ${category.color}`}>
                <category.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {category.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSidebar;
