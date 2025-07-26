"use client";
import { useState } from "react";

export default function Home() {
  const [showAddButton, setShowAddButton] = useState(true);

  const handleAddClick = () => {
    // Functionality to add a new level or item
    console.log("Add button clicked!");
  };

  return (
    <div className="p-4 relative min-h-screen"> 
      <div className="absolute top-4 right-4 md:right-20"> 
        <button className="bg-black text-white px-4 py-1 rounded-md">
          Sync
        </button>
      </div>

      <div className="flex flex-col items-center space-y-4 mt-10 md:mt-20 max-w-screen-md mx-auto"> 
        <div className="border border-gray-400 bg-gray-200 p-4 rounded-md flex flex-col items-center mb-5 w-full md:w-auto">
          <h3 className="text-lg font-semibold">President</h3>
          <a href="#" className="text-blue-800 underline font-bold">
            Users
          </a>
          <svg
            width="30"
            height="40"
            viewBox="0 0 24 24"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C12.5523 2 13 2.44772 13 3V23.5858L17.2929 18.2929C17.6834 17.9024 18.3166 17.9024 18.7071 18.2929C19.0976 18.6834 19.0976 19.3166 18.7071 19.7071L12.7071 25.7071C12.3166 26.0976 11.6834 26.0976 11.2929 25.7071L5.29289 19.7071C4.90237 19.3166 4.90237 18.6834 5.29289 18.2929C5.68342 17.9024 6.31658 17.9024 6.70711 18.2929L11 23.5858V3C11 2.44772 11.4477 2 12 2Z" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 w-full md:w-auto"> 
          <div className="border border-gray-400 p-4 rounded-md flex justify-center items-center flex-col w-full md:w-auto">
            <h3 className="text-lg font-semibold">Top Management</h3>
            <a href="#" className="text-blue-800 underline font-bold">
              Users
            </a>
          </div>
          {showAddButton && (
            <button
              onClick={handleAddClick}
              className="bg-green-200 hover:bg-green-300 px-4 py-8 rounded text-lg font-bold w-full md:w-auto"
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}