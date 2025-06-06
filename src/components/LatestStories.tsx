
import React from 'react';
import { Link } from 'react-router-dom';

const LatestStories = () => {
  const stories = [
    {
      id: "1",
      title: "Annual Hackathon Breaks Participation Records",
      excerpt: "This year's 48-hour coding marathon attracted over 500 students from 15 different universities, showcasing incredible talent and innovative solutions.",
      author: "Ryan Park",
      readTime: "4 min read",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "2",
      title: "Debate Team Wins National Championship", 
      excerpt: "After months of preparation, our university's debate team topped the competition with compelling arguments on sustainable urban development.",
      author: "Dr. Amelia Wright",
      readTime: "5 min read",
      category: "Academics",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "3", 
      title: "Student Art Exhibition Draws Record Crowds",
      excerpt: "The annual showcase of student artwork attracted over 1,500 visitors, with several pieces being acquired for the university's permanent collection.",
      author: "Miguel Sanchez",
      readTime: "4 min read",
      category: "Arts",
      imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80"
    }
  ];

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Stories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Link 
            key={story.id}
            to={`/article/${story.id}`}
            className="group hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden border border-gray-200"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={story.imageUrl}
                alt={story.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-blue-600 font-medium mb-2">{story.category}</div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {story.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {story.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{story.author}</span>
                <span>{story.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestStories;
