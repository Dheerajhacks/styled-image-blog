
import React from 'react';
import { Badge } from "@/components/ui/badge";

interface CardLayoutProps {
  onNewsletterSignup: (email: string, consent: boolean) => void;
}

const CardLayout: React.FC<CardLayoutProps> = ({ onNewsletterSignup }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">Breaking News</Badge>
            <span className="text-gray-500 text-sm">March 20, 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Revolutionary Climate Research Breakthrough at University
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Prof. Michael Torres"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900">Prof. Michael Torres</div>
                <div className="text-sm text-gray-600">Environmental Science Department</div>
              </div>
            </div>
            <div className="text-sm text-gray-600">12 min read</div>
          </div>
        </div>

        {/* Hero Image Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <img 
            src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt="Climate research laboratory"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="p-6">
            <p className="text-sm text-gray-600 italic">
              Researchers at the university's new climate lab have developed groundbreaking technology for carbon capture
            </p>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">
          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-xl text-gray-700 leading-relaxed font-medium mb-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500">
              A team of researchers has achieved a major breakthrough in carbon capture technology that could revolutionize how we combat climate change.
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              After three years of intensive research, the Environmental Science Department has developed a novel approach to carbon capture that is both more efficient and cost-effective than existing methods. This breakthrough could have significant implications for industrial applications worldwide.
            </p>
          </div>

          {/* Research Details Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></span>
              The Science Behind the Discovery
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The research team, led by Professor Michael Torres, developed a new class of materials called "smart sorbents" that can capture carbon dioxide from the atmosphere with unprecedented efficiency. These materials can selectively absorb CO2 while allowing other gases to pass through, making them ideal for industrial applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h3 className="font-bold text-green-800 mb-2">Efficiency Improvement</h3>
                <div className="text-3xl font-bold text-green-600 mb-1">300%</div>
                <p className="text-sm text-green-700">More efficient than current methods</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-2">Cost Reduction</h3>
                <div className="text-3xl font-bold text-blue-600 mb-1">60%</div>
                <p className="text-sm text-blue-700">Lower operational costs</p>
              </div>
            </div>
          </div>

          {/* Applications Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3"></span>
              Real-World Applications
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The potential applications for this technology are vast, ranging from power plants and manufacturing facilities to direct air capture systems. Several major corporations have already expressed interest in licensing the technology for commercial use.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Potential Impact Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🏭</div>
                  <div className="font-semibold">Industrial</div>
                  <div className="text-sm text-gray-600">Manufacturing plants</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-semibold">Energy</div>
                  <div className="text-sm text-gray-600">Power generation</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="font-semibold">Atmospheric</div>
                  <div className="text-sm text-gray-600">Direct air capture</div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Outlook Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-3"></span>
              Looking Ahead
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The research team is now working on scaling up the production of these smart sorbents and optimizing them for different industrial applications. They expect to begin pilot testing with industry partners within the next 18 months.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
              <blockquote className="text-lg italic mb-4">
                "This breakthrough represents years of dedicated research and collaboration. We're excited about the potential to make a real impact on global climate goals."
              </blockquote>
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Prof. Michael Torres"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Prof. Michael Torres</div>
                  <div className="text-sm opacity-90">Lead Researcher</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tags Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2">Climate Change</Badge>
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">Research</Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2">Innovation</Badge>
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2">Environmental Science</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
