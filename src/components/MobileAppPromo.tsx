
import React from 'react';
import { Smartphone, Users, Calendar } from 'lucide-react';

const MobileAppPromo = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-8">
          <h2 className="text-2xl font-bold mb-4">
            Stay Connected with Campus Life
          </h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            Download the CAMPUS APP to discover campus events, participate, and connect with fellow students who share your interests.
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-blue-100">
              <Calendar className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>Get notified about upcoming cultural events</span>
            </li>
            <li className="flex items-center text-blue-100">
              <Users className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>Join student organizations and interest groups</span>
            </li>
            <li className="flex items-center text-blue-100">
              <Smartphone className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>Chat with peers organized by participants</span>
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
              <span className="mr-2">📱</span>
              App Store
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
              <span className="mr-2">📱</span>
              Google Play
            </button>
          </div>
        </div>
        
        {/* Right side - Phone mockup */}
        <div className="flex-shrink-0">
          <div className="bg-white bg-opacity-20 rounded-2xl p-6">
            <div className="bg-white rounded-xl p-4 w-48 h-80 flex flex-col">
              <div className="bg-blue-600 rounded-lg p-4 text-white text-center mb-4">
                <h3 className="font-bold text-lg">CAMPUS LIFE</h3>
                <p className="text-sm opacity-90">Stay Connected</p>
              </div>
              <div className="flex-1 bg-gray-100 rounded-lg p-3">
                <div className="text-xs text-gray-600 mb-2">Latest Events</div>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2 text-xs">
                    <div className="font-semibold text-gray-800">Spring Festival</div>
                    <div className="text-gray-500">Today, 6:00 PM</div>
                  </div>
                  <div className="bg-white rounded p-2 text-xs">
                    <div className="font-semibold text-gray-800">Art Exhibition</div>
                    <div className="text-gray-500">Tomorrow, 2:00 PM</div>
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
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-blue-100">
                "CAMPUS helped me discover the Spring Festival planning committee and now I'm helping organize next year's event!"
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-blue-100">
                "I'd never to more friends through events found on the app than I've changed my college experience!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppPromo;
