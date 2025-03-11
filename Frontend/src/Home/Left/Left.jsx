import React from 'react';
import Search from './Search';
import User from './User';
import { MessageSquare } from 'lucide-react';

const Left = () => {
  return (
    <div className="w-[30%] bg-gradient-to-b from-gray-900 to-black text-white h-screen border-r border-gray-800 shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare size={28} className="text-blue-400" />
          <h1 className="font-bold text-3xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Stream Chat</h1>
        </div>
        
        <Search />
        
        <div className="mt-6 mb-4">
          <h2 className="text-sm uppercase font-semibold text-gray-400 tracking-wider mb-3">Conversations</h2>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
        </div>
        
        <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
          <User />
        </div>
      </div>
    </div>
  );
};

export default Left;