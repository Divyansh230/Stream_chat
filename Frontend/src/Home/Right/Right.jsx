import React from 'react';
import Type from './Type';
import ChatUser from './ChatUser';
import Message from './Message';

const Right = () => {
  return (
    <div className="w-[70%] bg-gradient-to-br from-gray-900 to-gray-950 text-white flex flex-col h-screen">
      {/* Chat header with user info */}
      <div className="flex-none">
        <ChatUser />
      </div>
      
      {/* Messages area with subtle background pattern */}
      <div className="flex-grow overflow-y-auto scrollbar-hide relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        <div className="relative z-10 h-full px-6 py-4">
          <Message />
        </div>
        
        {/* Fade effect at the top of the messages */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
      </div>
      
      {/* Typing area with glowing effect */}
      <div className="flex-none mb-4 px-4 relative">
        <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none"></div>
        <Type />
        
        {/* Subtle glow under the typing area */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-blue-500 opacity-20 blur-md rounded-full"></div>
      </div>
    </div>
  );
};

export default Right;