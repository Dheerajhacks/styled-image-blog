
const trendingPosts = [
  {
    title: "Robotics Team Advances to International Finals",
    date: "May 3, 2025",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Class of 2025 Sets New Employment Record",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Basketball Team Clinches Conference Title",
    date: "April 28, 2025",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1459&q=80"
  },
  {
    title: "Student Research Team Publishes in Nature",
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

const TrendingPosts = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Trending Posts</h3>
      
      <div className="space-y-4">
        {trendingPosts.map((post, index) => (
          <div key={index} className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                {post.title}
              </h4>
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
