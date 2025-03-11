import React from 'react';
import { LogOut } from 'lucide-react';

const Logout = () => {
  return (
    <div className="w-[4%] bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-end h-screen border-l border-gray-800">
      <div className="p-4 mb-6">
        <button className="w-full flex justify-center group">
          <div className="relative p-3 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/20">
            <LogOut size={24} className="text-gray-300 group-hover:text-white" />
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Log Out
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Logout;