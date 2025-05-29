
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ArticleCard from '@/components/ArticleCard';
import CategoriesSidebar from '@/components/CategoriesSidebar';
import TrendingPosts from '@/components/TrendingPosts';
import NewsletterSignup from '@/components/NewsletterSignup';
import Pagination from '@/components/Pagination';

const articles = [
  {
    title: "Annual Hackathon Breaks Participation Records",
    excerpt: "This year's 48-hour coding marathon attracted over 500 students from 15 different universities, showcasing incredible innovation and collaboration.",
    author: {
      name: "Ryan Park",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      initials: "RP"
    },
    readTime: "6 min read",
    category: "hackathon",
    categoryColor: "bg-purple-100 text-purple-700",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Debate Team Wins National Championship",
    excerpt: "After months of preparation, our university's debate team secured first place at the national competition with compelling arguments on sustainable urban development.",
    author: {
      name: "Dr. Amelia Wright",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      initials: "AW"
    },
    readTime: "4 min read",
    category: "debate",
    categoryColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Student Art Exhibition Draws Record Crowds",
    excerpt: "The annual showcase of student artwork attracted over 1,500 visitors, with several pieces being acquired by the university's permanent collection.",
    author: {
      name: "Miguel Sanchez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      initials: "MS"
    },
    readTime: "5 min read",
    category: "arts",
    categoryColor: "bg-pink-100 text-pink-700",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80"
  },
  {
    title: "Campus-Wide Volunteer Day Plants 500 Trees",
    excerpt: "Students, faculty, and staff came together for the largest volunteer event in university history, transforming the local park and strengthening community bonds.",
    author: {
      name: "Jasmine Taylor",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      initials: "JT"
    },
    readTime: "7 min read",
    category: "community",
    categoryColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1413&q=80"
  },
  {
    title: "Campus Music Festival Showcases Student Talent",
    excerpt: "The three-day music event featured 25 student bands across multiple genres, with the winning group earning a professional recording contract.",
    author: {
      name: "Daniel Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      initials: "DK"
    },
    readTime: "8 min read",
    category: "music",
    categoryColor: "bg-orange-100 text-orange-700",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "International Food Festival Celebrates Diversity",
    excerpt: "Student cultural clubs prepared dishes from 28 different countries, creating a culinary journey that brought the campus community together in celebration.",
    author: {
      name: "Aisha Patel",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      initials: "AP"
    },
    readTime: "6 min read",
    category: "food",
    categoryColor: "bg-yellow-100 text-yellow-700",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Header />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  {...article}
                  featured={false}
                />
              ))}
            </div>
            
            <Pagination />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <CategoriesSidebar />
            <TrendingPosts />
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
