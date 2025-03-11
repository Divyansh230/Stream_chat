import React from 'react';
import Users from './Users';
import { UserPlus } from 'lucide-react';

const User = () => {
  // Sample user data - in a real app, this would come from props or state
  const userCount = 10;
  
  return (
    <div className="py-2 overflow-y-auto max-h-[calc(92vh)] pr-2 scrollbar-hide">
      <div className="flex justify-between items-center mb-4 px-2">
        <h3 className="text-sm font-medium text-gray-400">Active Contacts</h3>
        <span className="bg-blue-500 text-xs font-bold px-2 py-1 rounded-full text-white">{userCount}</span>
      </div>
      
      <button className="w-full mb-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-blue-500/20">
        <UserPlus size={18} />
        <span className="text-sm font-medium">Add New Contact</span>
      </button>
      
      <div className="space-y-1">
        {Array(userCount).fill().map((_, index) => (
          <div 
            key={index} 
            className="transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] rounded-lg"
          >
            <Users />
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;