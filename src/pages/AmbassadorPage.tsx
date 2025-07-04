
import React from 'react';
import { Star, Users, BarChart3, MessageSquare, UserCheck, TrendingUp } from 'lucide-react';

const AmbassadorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-100 to-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Empower Your Campus.<br />
            Become a ClubChat<br />
            Ambassador!
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl">
            Lead your campus, organize events, and gain valuable leadership experience while building meaningful connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-almost-black text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Apply Now
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Ambassador Roles Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-4">Ambassador Roles</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Join our community of student leaders and make a real impact on your campus
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Community Building</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Create and nurture vibrant campus communities through events and activities
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Student Engagement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Foster meaningful connections and facilitate student interactions
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Communication</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Share updates and maintain clear channels of communication
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Promotion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Spread awareness and grow the ClubChat community on campus
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Ambassadors Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-4">Meet Our Ambassadors</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Learn from our amazing student leaders making a difference on their campuses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Sarah Chen</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Business School Ambassador</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic text-sm sm:text-base">
                "Being an ambassador has helped me develop leadership skills and create meaningful connections."
              </p>
              <div className="flex items-center text-xs sm:text-sm text-gray-500">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                Stanford University
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">James Wilson</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Engineering Ambassador</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic text-sm sm:text-base">
                "The program has given me the platform to make a real impact in my campus community."
              </p>
              <div className="flex items-center text-xs sm:text-sm text-gray-500">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                MIT
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-3 sm:mr-4 flex-shrink-0"></div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Emily Rodriguez</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Arts & Sciences Ambassador</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic text-sm sm:text-base">
                "I've grown both personally and professionally through this amazing opportunity."
              </p>
              <div className="flex items-center text-xs sm:text-sm text-gray-500">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                UCLA
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Make an Impact Section */}
      <div className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                Join our ambassador program and help shape the future of campus community building.
              </p>
              <button className="bg-white text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Leadership Skills</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Develop essential leadership and management abilities
                </p>
              </div>
              
              <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Network Growth</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Connect with peers and industry professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorPage;
