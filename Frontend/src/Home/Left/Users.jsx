import React from 'react';

const Users = () => {
  return (
    <div className="px-3 py-3 hover:bg-gray-800/50 rounded-xl transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-gray-700 ring-offset-2 ring-offset-gray-900">
            <img 
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white truncate">Zulia Dzouza</h3>
          <p className="text-sm text-gray-400 truncate">zuluiadsouza@gmail.com</p>
        </div>
        
        <div className="flex flex-col items-end">
          <span className="text-xs text-gray-500">2m</span>
          <div className="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Users;