import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div className="py-4">
      <div className="relative mx-auto w-full max-w-md">
        <div className="relative">
          <input 
            type="text" 
            className="w-full bg-gray-800 text-gray-100 pl-4 pr-10 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
            placeholder="Search conversations..." 
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
            <SearchIcon size={18} />
          </div>
        </div>
        
        <div className="absolute inset-x-0 h-px -bottom-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default Search;