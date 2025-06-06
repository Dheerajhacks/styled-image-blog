
import React from 'react';
import { Smartphone, Users, Calendar } from 'lucide-react';

const MobileAppPromo = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="flex-1 mb-4 lg:mb-0 lg:mr-6">
          <h2 className="text-xl font-bold mb-3">
            Stay Connected with Campus Life
          </h2>
          <p className="text-blue-100 mb-4 text-sm leading-relaxed">
            Download the CAMPUS app to discover campus events, join clubs, and connect with fellow students who share your interests.
          </p>
          
          <ul className="space-y-2 mb-4 text-sm">
            <li className="flex items-center text-blue-100">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Get notified about upcoming cultural events</span>
            </li>
            <li className="flex items-center text-blue-100">
              <Users className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Join student organizations and interest groups</span>
            </li>
            <li className="flex items-center text-blue-100">
              <Smartphone className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Chat with peers organized by participants</span>
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center text-sm">
              <span className="mr-2">📱</span>
              App Store
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center text-sm">
              <span className="mr-2">📱</span>
              Google Play
            </button>
          </div>
        </div>
        
        {/* Right side - Phone mockup */}
        <div className="flex-shrink-0">
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <div className="bg-white rounded-lg p-3 w-32 h-56 flex flex-col">
              <div className="bg-blue-600 rounded-lg p-2 text-white text-center mb-3">
                <h3 className="font-bold text-sm">CAMPUS LIFE</h3>
                <p className="text-xs opacity-90">Stay Connected</p>
              </div>
              <div className="flex-1 bg-gray-100 rounded-lg p-2">
                <div className="text-xs text-gray-600 mb-2">Latest Events</div>
                <div className="space-y-1">
                  <div className="bg-white rounded p-1 text-xs">
                    <div className="font-semibold text-gray-800 text-xs">Spring Festival</div>
                    <div className="text-gray-500 text-xs">Today, 6:00 PM</div>
                  </div>
                  <div className="bg-white rounded p-1 text-xs">
                    <div className="font-semibold text-gray-800 text-xs">Art Exhibition</div>
                    <div className="text-gray-500 text-xs">Tomorrow, 2:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom testimonials */}
      <div className="mt-4 pt-4 border-t border-white border-opacity-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-blue-100">
                "CAMPUS helped me discover the Spring Festival planning committee and now I'm helping organize next year's event!"
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-blue-100">
                "I never made so many friends through events found on the app. It has changed my college experience!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPromo;
