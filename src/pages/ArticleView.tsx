import { useParams } from 'react-router-dom';
import CategoriesSidebar from '@/components/CategoriesSidebar';
import TrendingPosts from '@/components/TrendingPosts';
import NewsletterSignup from '@/components/NewsletterSignup';
import MobileAppPromo from '@/components/MobileAppPromo';
import LatestStories from '@/components/LatestStories';
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

// Badge component merged inline
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

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

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      
      {/* Hero Section with Article Image */}
      <div className="relative h-96 bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1458&q=80')`
      }}>
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 text-white">
            <div className="mb-4">
              <span className="text-sm opacity-90">May 5, 2025 • 5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight max-w-4xl">
              How the Spring Festival Transformed Campus Culture
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mb-6">
              A look back at the event that brought together over 2,000 students and changed how we celebrate diversity on campus.
            </p>
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Nandini Patel"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">Nandini Patel</div>
                <div className="text-sm opacity-75">Student Contributor</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  The annual Spring Festival celebration has become a cornerstone event in our campus calendar, but few know the story of how it began and the profound impact it has had on our university's culture of inclusivity and diversity.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  What started as a small gathering organized by the International Students Association has blossomed into a campus-wide celebration that attracts thousands of participants each year. The transformation didn't happen overnight—it took vision, dedication, and the collaborative efforts of numerous student organizations.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Origins: A Grassroots Beginning</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  In 2018, a group of 15 international students from various Asian countries decided to celebrate Lunar New Year together, missing the festivities they would normally experience at home. They reserved a small room in the Student Union, prepared homemade dishes, and invited friends to join them.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  "We never expected more than 30 people to show up," recalls Min Zhang, one of the original organizers. "But word spread quickly, and we ended up with over 100 attendees. People were genuinely interested in learning about different cultural traditions."
                </p>

                <div className="my-8">
                  <img 
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1687&q=80"
                    alt="Students preparing decorations for one of the first Spring Festival celebrations in 2019"
                    className="w-full rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Students preparing decorations for one of the first Spring Festival celebrations in 2019
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Growing Pains and Breakthroughs</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  By 2020, the event had outgrown its humble beginnings. The Cultural Affairs Committee took notice and offered to help scale the celebration. With additional funding and support from the university administration, the Spring Festival expanded to include performances, workshops, and food stations representing diverse cultures from around the world.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  The pandemic temporarily halted in-person gatherings in 2021, but organizers pivoted to a virtual format, sending celebration kits to students and hosting online cooking demonstrations, performances, and educational sessions. This unexpected challenge actually helped reach a wider audience, including alumni and community members who might not have attended otherwise.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
                  <blockquote className="text-lg text-gray-800 italic">
                    "The Spring Festival has become more than just a celebration—it's a powerful educational tool that breaks down stereotypes and builds cross-cultural understanding in a way that classroom learning alone cannot achieve."
                  </blockquote>
                  <p className="text-sm text-gray-600 mt-4">— Dr. Rebecca Torres, Dean of Student Affairs</p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cultural Impact: Beyond the Festivities</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The most significant outcome of the Spring Festival has been its lasting impact on campus culture. What began as a celebration of Lunar New Year has evolved into a broader multicultural showcase that highlights traditions from Latin America, Africa, Europe, and beyond.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  Student surveys conducted by the Office of Diversity and Inclusion show that participation in cultural events like the Spring Festival correlates with increased comfort in cross-cultural interactions and greater appreciation for diversity. First-year students who attend the festival report forming friendships across cultural boundaries at higher rates than those who don't participate.
                </p>

                <div className="my-8">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1413&q=80"
                    alt="The 2024 Spring Festival attracted over 2,000 attendees from campus and the surrounding community"
                    className="w-full rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">
                    The 2024 Spring Festival attracted over 2,000 attendees from campus and the surrounding community
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Looking Forward: The Future of Campus Celebrations</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  As we look ahead to next year's Spring Festival, organizers are focusing on sustainability and community engagement. Plans include partnering with local cultural organizations, reducing waste through reusable decorations and serving ware, and creating more interactive experiences that encourage deeper cultural exchange.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  "We want to move beyond the 'food and festival' approach to cultural celebration," explains current festival coordinator Jamal Washington. "While those elements are important and enjoyable, we're designing more opportunities for meaningful dialogue and connection."
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  Initiatives for the coming year include storytelling circles, collaborative art installations, and a mentorship program pairing international and domestic students throughout the academic year, not just during the festival period.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion: A Tradition That Transforms</h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Spring Festival's evolution from a small gathering to a major campus event demonstrates how student initiatives can transform institutional culture. By creating space for authentic cultural expression and exchange, what began as a homesick remedy has become a powerful vehicle for building a more inclusive campus community.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  As one student participant reflected, "Before attending the Spring Festival, I had never really thought about how limited my cultural experiences were. Now I'm minoring in East Asian Studies and planning to study abroad next year. It literally changed the direction of my education."
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-8">
                  In a world where cross-cultural understanding is increasingly essential, the Spring Festival offers a model for how celebrations can serve as both joyful gatherings and transformative educational experiences.
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 px-3 py-1">
                    Campus Events
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 px-3 py-1">
                    Cultural Diversity
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-3 py-1">
                    Student Life
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-3 py-1">
                    Spring Festival
                  </Badge>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-start space-x-4">
                    <img 
                      src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                      alt="Nandini Patel"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Nandini Patel</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Nandini is a senior majoring in Communications with a minor in East Asian Studies. She serves as the editor for the campus newspaper and has been covering cultural events for the past three years. Her work focuses on highlighting diverse student experiences and promoting cross-cultural understanding.
                      </p>
                      <div className="flex space-x-3">
                        <a href="#" className="text-blue-500 hover:text-blue-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-700">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <CategoriesSidebar />
            <TrendingPosts />
            <NewsletterSignup onSignup={handleNewsletterSignup} />
          </div>
        </div>
        
        {/* Mobile App Promo Section */}
        <div className="mt-16">
          <MobileAppPromo />
        </div>
        
        {/* Latest Stories Section */}
        <div className="mt-12">
          <LatestStories />
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
