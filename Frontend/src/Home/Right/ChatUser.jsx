import React from "react";
import { Phone, Video, MoreVertical } from "lucide-react";

const ChatUser = () => {
  return (
    <div className="border-b border-gray-800">
      <div className="px-6 py-4 flex items-center justify-between bg-gradient-to-r from-gray-900 to-gray-850">
        {/* User info section */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-blue-600 ring-offset-2 ring-offset-gray-900">
              <img 
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
          </div>
          
          <div>
            <h1 className="font-semibold text-lg text-white">Zulia Dzouza</h1>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm text-gray-300">Online now</span>
            </div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200">
            <Phone size={20} />
          </button>
          <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200">
            <Video size={20} />
          </button>
          <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatUser;