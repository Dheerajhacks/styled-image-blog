
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface ClassicLayoutProps {
  onNewsletterSignup: (email: string, consent: boolean) => void;
}

const ClassicLayout: React.FC<ClassicLayoutProps> = ({ onNewsletterSignup }) => {
  return (
    <div className="bg-white">
      {/* Header with title and meta */}
      <div className="border-b-4 border-gray-900 pb-6 mb-8">
        <div className="text-center mb-4">
          <span className="text-sm text-gray-600 uppercase tracking-wide">Featured Article</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight text-center mb-6">
          The Future of Student Innovation Labs
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-gray-600">
          <span>March 15, 2025</span>
          <span className="hidden md:block">•</span>
          <span>8 min read</span>
          <span className="hidden md:block">•</span>
          <span>By Dr. Sarah Chen</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Students working in innovation lab"
          className="w-full h-64 md:h-96 object-cover"
        />
        <p className="text-sm text-gray-600 mt-2 italic text-center">
          Students collaborating in the new innovation lab at Tech University
        </p>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <div className="sticky top-6">
              <div className="text-sm text-gray-500 mb-4">Share Article</div>
              <div className="space-y-3">
                <button className="block w-full text-left p-2 hover:bg-gray-100 rounded">Twitter</button>
                <button className="block w-full text-left p-2 hover:bg-gray-100 rounded">LinkedIn</button>
                <button className="block w-full text-left p-2 hover:bg-gray-100 rounded">Facebook</button>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <div className="text-xl text-gray-700 leading-relaxed mb-8 font-medium border-l-4 border-blue-500 pl-6">
              Innovation labs are transforming how students approach problem-solving, creativity, and entrepreneurship in higher education institutions worldwide.
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Over the past decade, universities have witnessed a remarkable shift in how students learn and create. Traditional classroom settings, while still valuable, are being complemented by dynamic innovation labs that encourage hands-on experimentation and collaborative problem-solving.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">The Evolution of Learning Spaces</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The concept of innovation labs emerged from the recognition that creativity and innovation cannot be confined to theoretical discussions. Students need environments where they can prototype, test, fail, and iterate rapidly. These spaces typically feature flexible furniture, high-tech equipment, and most importantly, a culture that celebrates experimentation.
            </p>
            
            <div className="bg-gray-50 p-6 my-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Components of Successful Innovation Labs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 3D printing and rapid prototyping equipment</li>
                <li>• Collaborative workspaces with moveable furniture</li>
                <li>• High-speed internet and advanced computing resources</li>
                <li>• Mentorship programs connecting students with industry experts</li>
                <li>• Funding opportunities for promising projects</li>
              </ul>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              What sets these labs apart is not just the technology, but the community they foster. Students from different disciplines come together, breaking down traditional academic silos. A computer science major might work alongside an art student and a business major to create solutions that none could develop alone.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">Real-World Impact</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The impact of these innovation labs extends far beyond the campus. Students have launched successful startups, developed solutions for local community problems, and created products that have been adopted by major corporations. The labs serve as incubators not just for ideas, but for the next generation of innovators and entrepreneurs.
            </p>
            
            <div className="my-8">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Students presenting their innovation project"
                className="w-full h-64 object-cover rounded"
              />
              <p className="text-sm text-gray-600 mt-2 italic text-center">
                Students presenting their final projects at the annual Innovation Showcase
              </p>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              As we look toward the future, innovation labs will continue to evolve, incorporating new technologies like artificial intelligence, virtual reality, and advanced materials science. The key will be maintaining the human-centered approach that makes these spaces so effective while embracing the tools that can amplify student creativity and impact.
            </p>
            
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">Innovation</Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">Technology</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700">Education</Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">Entrepreneurship</Badge>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="sticky top-6">
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="font-bold text-gray-900 mb-3">About the Author</h4>
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Dr. Sarah Chen"
                  className="w-16 h-16 rounded-full object-cover mb-3"
                />
                <div className="text-sm text-gray-700">
                  <div className="font-medium">Dr. Sarah Chen</div>
                  <div className="text-gray-600">Director of Innovation Labs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicLayout;
