
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import CategoriesSidebar from '@/components/CategoriesSidebar';
import TrendingPosts from '@/components/TrendingPosts';
import NewsletterSignup from '@/components/NewsletterSignup';
import MobileAppPromo from '@/components/MobileAppPromo';
import LatestStories from '@/components/LatestStories';
import ModernLayout from '@/components/ArticleLayouts/ModernLayout';
import MinimalLayout from '@/components/ArticleLayouts/MinimalLayout';
import MagazineLayout from '@/components/ArticleLayouts/MagazineLayout';
import { useToast } from "@/hooks/use-toast"

const ArticleView = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const handleNewsletterSignup = (email: string, consent: boolean) => {
    console.log('Newsletter signup:', { email, consent });
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });
  };

  // Sample article data - in a real app this would come from an API
  const articles = {
    "1": {
      title: "Annual Hackathon Breaks Participation Records",
      excerpt: "This year's 48-hour coding marathon attracted over 500 students from 15 different universities, showcasing incredible talent and innovative solutions.",
      author: "Ryan Park",
      date: "May 5, 2025",
      readTime: "4 min read",
      category: "Technology",
      heroImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content: (
        <>
          <p>The annual hackathon has become a cornerstone event in our university's technology calendar, but this year's event truly exceeded all expectations. With over 500 participants from 15 different universities, it was the largest gathering of student developers in the region's history.</p>
          <p>The 48-hour marathon saw teams working around the clock to develop innovative solutions to real-world problems. From AI-powered accessibility tools to sustainable energy management systems, the creativity and technical prowess on display was remarkable.</p>
          <h2>Record-Breaking Participation</h2>
          <p>What started as a small campus event five years ago has grown into a major inter-university competition. This year's theme, "Technology for Good," attracted participants from computer science, engineering, design, and business programs.</p>
          <p>The winning project, developed by a team from our university, created an AI-powered platform that helps local food banks optimize their distribution networks, potentially reducing food waste by up to 30%.</p>
        </>
      )
    },
    "2": {
      title: "Debate Team Wins National Championship",
      excerpt: "After months of preparation, our university's debate team topped the competition with compelling arguments on sustainable urban development.",
      author: "Dr. Amelia Wright",
      date: "May 3, 2025",
      readTime: "5 min read",
      category: "Academics",
      heroImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      authorImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content: (
        <>
          <p>Our university's debate team has achieved something truly remarkable by winning the National Collegiate Debate Championship. This victory comes after months of rigorous preparation and represents the culmination of years of building a world-class debate program.</p>
          <p>The championship round focused on sustainable urban development, a topic that allowed our team to showcase not only their rhetorical skills but also their deep understanding of contemporary urban planning challenges.</p>
          <h2>The Path to Victory</h2>
          <p>The team's preparation was meticulous, involving extensive research, practice debates, and strategy sessions. Coach Martinez emphasized the importance of understanding multiple perspectives on each issue.</p>
          <p>In the final round, our debaters presented compelling arguments about green infrastructure and community engagement in urban planning, ultimately convincing the judges with their evidence-based approach and passionate delivery.</p>
        </>
      )
    },
    "3": {
      title: "How the Spring Festival Transformed Campus Culture",
      excerpt: "A look back at the event that brought together over 2,000 students and changed how we celebrate diversity on campus.",
      author: "Nandini Patel",
      date: "May 5, 2025",
      readTime: "5 min read",
      category: "Campus Events",
      heroImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80",
      authorImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content: (
        <>
          <p>The annual Spring Festival celebration has become a cornerstone event in our campus calendar, but few know the story of how it began and the profound impact it has had on our university's culture of inclusivity and diversity.</p>
          <p>What started as a small gathering organized by the International Students Association has blossomed into a campus-wide celebration that attracts thousands of participants each year.</p>
          <h2>Origins: A Grassroots Beginning</h2>
          <p>In 2018, a group of 15 international students from various Asian countries decided to celebrate Lunar New Year together, missing the festivities they would normally experience at home.</p>
          <p>"We never expected more than 30 people to show up," recalls Min Zhang, one of the original organizers. "But word spread quickly, and we ended up with over 100 attendees."</p>
          <h2>Cultural Impact: Beyond the Festivities</h2>
          <p>The most significant outcome of the Spring Festival has been its lasting impact on campus culture. What began as a celebration of Lunar New Year has evolved into a broader multicultural showcase.</p>
        </>
      )
    }
  };

  const getLayoutForArticle = (articleId: string) => {
    const layouts = ['modern', 'minimal', 'magazine'];
    const layoutIndex = parseInt(articleId) % 3;
    return layouts[layoutIndex];
  };

  const currentArticle = articles[id as keyof typeof articles];
  const layoutType = getLayoutForArticle(id || '1');

  if (!currentArticle) {
    return <div>Article not found</div>;
  }

  // Render different layouts based on article ID
  if (layoutType === 'modern') {
    return (
      <>
        <Header />
        <ModernLayout article={currentArticle} />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2"></div>
            <div className="space-y-8">
              <CategoriesSidebar />
              <TrendingPosts />
              <NewsletterSignup onSignup={handleNewsletterSignup} />
            </div>
          </div>
          <div className="mt-16">
            <MobileAppPromo />
          </div>
          <div className="mt-12">
            <LatestStories />
          </div>
        </div>
      </>
    );
  }

  if (layoutType === 'minimal') {
    return (
      <>
        <Header />
        <MinimalLayout article={currentArticle} />
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2"></div>
              <div className="space-y-8">
                <CategoriesSidebar />
                <TrendingPosts />
                <NewsletterSignup onSignup={handleNewsletterSignup} />
              </div>
            </div>
            <div className="mt-16">
              <MobileAppPromo />
            </div>
            <div className="mt-12">
              <LatestStories />
            </div>
          </div>
        </div>
      </>
    );
  }

  // Magazine layout
  return (
    <>
      <Header />
      <MagazineLayout article={currentArticle} />
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mt-16">
            <MobileAppPromo />
          </div>
          <div className="mt-12">
            <LatestStories />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleView;
