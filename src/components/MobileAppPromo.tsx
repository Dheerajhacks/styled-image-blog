
import React from 'react';
import { Smartphone, Users, Calendar, Check } from 'lucide-react';

const MobileAppPromo = () => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-8 shadow-sm max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl p-6 sm:p-8 text-white">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* Left side content */}
          <div className="flex-1 max-w-md">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Stay Connected with Campus Life
            </h2>
            <p className="text-blue-100 mb-6 text-sm sm:text-base leading-relaxed">
              Download the ClubChat app to discover campus events, join clubs, and connect with fellow students who share your interests.
            </p>
            
            <ul className="space-y-3 mb-6 text-sm sm:text-base">
              <li className="flex items-start text-blue-100">
                <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>Get notified about upcoming cultural events</span>
              </li>
              <li className="flex items-start text-blue-100">
                <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>Join student organizations and interest groups</span>
              </li>
              <li className="flex items-start text-blue-100">
                <Check className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <span>Chat with event organizers and participants</span>
              </li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                <span className="mr-2">🍎</span>
                App Store
              </button>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                <span className="mr-2">📱</span>
                Google Play
              </button>
            </div>
          </div>
          
          {/* Right side - Phone mockup */}
          <div className="flex-shrink-0 self-center lg:self-start">
            <div className="bg-white bg-opacity-10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="bg-white rounded-xl p-4 w-48 sm:w-56 shadow-2xl">
                {/* Phone header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 text-white text-center mb-4">
                  <h3 className="font-bold text-sm">ClubChat</h3>
                  <p className="text-xs opacity-90">Campus Connect</p>
                </div>
                
                {/* Phone content */}
                <div className="space-y-3 h-64 sm:h-80 overflow-hidden">
                  <div className="text-xs text-gray-600 font-semibold">Latest Events</div>
                  
                  {/* Event cards */}
                  <div className="bg-orange-50 rounded-lg p-3 border-l-4 border-orange-500">
                    <div className="font-semibold text-gray-800 text-xs mb-1">WINNERS WILL GET</div>
                    <div className="text-orange-600 text-xs font-bold">$1000</div>
                    <div className="text-xs text-gray-500 mt-1">Spring Festival</div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3">
                    <img 
                      src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Event"
                      className="w-full h-16 object-cover rounded mb-2"
                    />
                    <div className="font-semibold text-gray-800 text-xs">Art Exhibition</div>
                    <div className="text-gray-500 text-xs">Tomorrow, 2:00 PM</div>
                  </div>
                  
                  {/* Chat messages */}
                  <div className="space-y-2">
                    <div className="bg-blue-500 text-white rounded-lg p-2 ml-4 text-xs">
                      Can't wait for the event! 🎉
                    </div>
                    <div className="bg-gray-200 text-gray-800 rounded-lg p-2 mr-4 text-xs">
                      See you there!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom testimonials */}
        <div className="mt-8 pt-6 border-t border-white border-opacity-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-100">
                  "ClubChat helped me discover the Spring Festival planning committee and now I'm helping organize next year's event!"
                </p>
                <p className="text-xs text-blue-200 mt-1">- Alex Chen, Junior</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-blue-100">
                  "I've made so many friends through events I found on the app. It's changed my college experience!"
                </p>
                <p className="text-xs text-blue-200 mt-1">- Maria Rodriguez, Sophomore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPromo;
