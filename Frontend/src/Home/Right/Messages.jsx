import React from 'react'

const Messages = () => {
  return (
    <div>
      <div className="p-4 space-y-3">
        <div className="chat chat-end">
          <div className="flex flex-col items-end">
            <div className="chat-bubble bg-blue-500 text-white px-4 py-2 rounded-t-lg rounded-bl-lg shadow-sm max-w-xs">
              Calm down, Anakin.
            </div>
            <span className="text-xs text-gray-500 mt-1 mr-2">Obi-Wan • 2:14 PM</span>
          </div>
        </div>
        
        <div className="chat chat-start">
          <div className="flex flex-col">
            <div className="chat-bubble bg-gray-800 px-4 py-2 rounded-t-lg rounded-br-lg shadow-sm max-w-xs">
              That's never been done in the history of the Jedi.
            </div>
            <span className="text-xs text-gray-500 mt-1 ml-2">Anakin • 2:15 PM</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages