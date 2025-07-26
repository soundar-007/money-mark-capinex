import React from "react";
import Image from "next/image";

export default function AgentBoard() {
  return (
    <div className="p-5">
      <div className="flex justify-end mb-5">
        <a href="#" className="ml-2 text-blue-500">
          Org View
        </a>
        <a href="#" className="ml-2 text-blue-500">
          Full Screen
        </a>
      </div>

    <h1 className="font-bold text-gray-600 mb-4 text-lg">TELGU</h1>
      <div className="w-80 h-50 border-2 rounded p-4 mb-10 bg-gray-600 border-red-600 ">
        <div className="flex  h-1/2 ">
          <div className="w-13 h-13 bg-white mr-4 flex justify-center items-center">
            <Image
              src="/assets/manavatar.jpg"
              width={100}
              height={100}
              alt="Profile"
            />
          </div>
          <div className="flex-grow mt-2 mb-5 w-1/2 h-full">
            <h3 className="text-lg font-semibold mb-1">Srinivas K</h3>
          </div>

      
          
 
        </div>
        <div className="w-full  flex-col flex justify-center mt-2">
            <p className="font-bold text-sm text-center flex justify-between pl-3 pr-7 ">
              DeadCall <span className="ml-1 ">3h 22m 39s</span>
            </p>
            <p className="font-bold mt-1 text-sm text-center flex justify-between pl-3 pr-4 ">
            (Call) <span className=" cursor-pointer text-lg">...</span>
            </p>
            <p className="text-sm"></p>
            <div className=""></div>
          </div>
      </div>

    <h1 className="font-bold text-gray-600 mb-4 text-lg">CPINEX</h1>
      <div className="w-80 h-50 border-2 rounded p-4 mb-2 bg-yellow-200 border-red-600 ">
        <div className="flex  h-1/2 ">
          <div className="w-13 h-13 bg-white mr-4 flex justify-center items-center">
            <Image
              src="/assets/manavatar.jpg"
              width={100}
              height={100}
              alt="Profile"
            />
          </div>
          <div className="flex-grow mt-2 mb-5 w-1/2 h-full">
            <h3 className="text-lg font-semibold mb-1">Bhoomika </h3>
          </div>

      
          
 
        </div>
        <div className="w-full  flex-col flex justify-center mt-2">
            <p className="font-bold text-sm text-center flex justify-between pl-3 pr-7 ">
              Paused <span className="ml-1 ">2h 35m 10s</span>
            </p>
            <p className="font-bold mt-1 text-sm text-center flex justify-between pl-3 pr-4 ">
            (ManualCalling) <span className=" cursor-pointer text-lg">...</span>
            </p>
            <p className="text-sm"></p>
            <div className=""></div>
          </div>
      </div>

      
    </div>
  );
}
