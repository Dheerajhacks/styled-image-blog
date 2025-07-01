
import React from 'react';
import { Smartphone, Download } from 'lucide-react';

const AppDownload = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg p-6 text-white">
      <div className="flex items-center mb-4">
        <Smartphone className="w-6 h-6 mr-2" />
        <h3 className="text-lg font-bold">Get the App</h3>
      </div>
      
      <p className="text-blue-100 text-sm mb-4 leading-relaxed">
        Stay updated with campus events, join student organizations, and connect with peers on the go.
      </p>
      
      <div className="space-y-3">
        <button className="w-full bg-white text-blue-600 px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center text-sm">
          <Download className="w-4 h-4 mr-2" />
          Download Now
        </button>
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-white bg-opacity-20 text-white px-3 py-2 rounded-lg font-medium hover:bg-opacity-30 transition-colors text-xs">
            📱 iOS
          </button>
          <button className="flex-1 bg-white bg-opacity-20 text-white px-3 py-2 rounded-lg font-medium hover:bg-opacity-30 transition-colors text-xs">
            🤖 Android
          </button>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white border-opacity-20">
        <p className="text-xs text-blue-100 italic">
          "The app helped me discover amazing campus events I never knew existed!" - Sarah M.
        </p>
      </div>
    </div>
  );
};

export default AppDownload;
