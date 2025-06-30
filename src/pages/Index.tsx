import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ArticleCard from '@/components/ArticleCard';
import CategoriesSidebar from '@/components/CategoriesSidebar';
import TrendingPosts from '@/components/TrendingPosts';
import NewsletterSignup from '@/components/NewsletterSignup';
import Pagination from '@/components/Pagination';
import { useToast } from "@/hooks/use-toast"

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  imageUrl: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "Annual Hackathon Breaks Participation Records",
    excerpt: "This year's 48-hour coding marathon attracted over 500 students from 15 different universities, showcasing incredible innovation and collaboration.",
    author: "Ryan Park",
    date: "2024-05-28",
    readTime: "6 min read",
    category: "hackathon",
    categoryColor: "bg-purple-100 text-purple-700",
    imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "2",
    title: "Debate Team Wins National Championship",
    excerpt: "After months of preparation, our university's debate team secured first place at the national competition with compelling arguments on sustainable urban development.",
    author: "Dr. Amelia Wright",
    date: "2024-05-27",
    readTime: "4 min read",
    category: "debate",
    categoryColor: "bg-blue-100 text-blue-700",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "3",
    title: "Student Art Exhibition Draws Record Crowds",
    excerpt: "The annual showcase of student artwork attracted over 1,500 visitors, with several pieces being acquired by the university's permanent collection.",
    author: "Miguel Sanchez",
    date: "2024-05-26",
    readTime: "5 min read",
    category: "arts",
    categoryColor: "bg-pink-100 text-pink-700",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80"
  },
  {
    id: "4",
    title: "Campus-Wide Volunteer Day Plants 500 Trees",
    excerpt: "Students, faculty, and staff came together for the largest volunteer event in university history, transforming the local park and strengthening community bonds.",
    author: "Jasmine Taylor",
    date: "2024-05-25",
    readTime: "7 min read",
    category: "community",
    categoryColor: "bg-green-100 text-green-700",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1413&q=80"
  },
  {
    id: "5",
    title: "Campus Music Festival Showcases Student Talent",
    excerpt: "The three-day music event featured 25 student bands across multiple genres, with the winning group earning a professional recording contract.",
    author: "Daniel Kim",
    date: "2024-05-24",
    readTime: "8 min read",
    category: "music",
    categoryColor: "bg-orange-100 text-orange-700",
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "6",
    title: "International Food Festival Celebrates Diversity",
    excerpt: "Student cultural clubs prepared dishes from 28 different countries, creating a culinary journey that brought the campus community together in celebration.",
    author: "Aisha Patel",
    date: "2024-05-23",
    readTime: "6 min read",
    category: "food",
    categoryColor: "bg-yellow-100 text-yellow-700",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80"
  }
];

// Layout 1: Standard grid (2 columns)
const Layout1 = ({ articles }: { articles: Article[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    {articles.map((article) => (
      <ArticleCard key={article.id} {...article} />
    ))}
  </div>
);

// Layout 2: Featured + List (one large, one small)
const Layout2 = ({ articles }: { articles: Article[] }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
    <div className="lg:col-span-2">
      <ArticleCard {...articles[0]} />
    </div>
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-lg transition-shadow cursor-pointer">
        <div className="flex items-start space-x-4">
          <img 
            src={articles[1].imageUrl} 
            alt={articles[1].title}
            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <span className="text-xs font-medium text-blue-600 mb-1 block">{articles[1].category}</span>
            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm hover:text-blue-600 transition-colors">
              {articles[1].title}
            </h3>
            <p className="text-gray-600 text-xs mb-2 line-clamp-2">
              {articles[1].excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{articles[1].author}</span>
              <span>{articles[1].readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Layout 3: Horizontal cards
const Layout3 = ({ articles }: { articles: Article[] }) => (
  <div className="space-y-6 mb-8">
    {articles.map((article) => (
      <div key={article.id} className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 cursor-pointer group">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{article.category}</span>
              <span className="text-sm text-gray-500">{article.readTime}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xs font-medium">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{article.author}</p>
                <p className="text-xs text-gray-500">{article.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Index = () => {
  const { toast } = useToast();

  const handleNewsletterSignup = (email: string, consent: boolean) => {
    console.log('Newsletter signup:', { email, consent });
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  // Group articles in pairs for different layouts
  const articlePairs = [];
  for (let i = 0; i < articles.length; i += 2) {
    articlePairs.push(articles.slice(i, i + 2));
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Header />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Stories</h2>
            
            {articlePairs.map((pair, index) => {
              const layoutIndex = index % 3;
              
              if (layoutIndex === 0) {
                return <Layout1 key={index} articles={pair} />;
              } else if (layoutIndex === 1) {
                return <Layout2 key={index} articles={pair} />;
              } else {
                return <Layout3 key={index} articles={pair} />;
              }
            })}
            
            <Pagination />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <CategoriesSidebar />
            <TrendingPosts />
            <NewsletterSignup onSignup={handleNewsletterSignup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
