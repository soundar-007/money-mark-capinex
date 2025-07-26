import React from "react";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";

export default function Header() {
  const isLiveCall  =true;
  return (
    <div className="bg-white  p-2 pl-4 border-b border-gray-300 ">
      <div className="flex justify-between items-center">
        {/* Left Section - Dashboard Title */}
        <h2 className="text-lg md:text-2xl font-bold">Dashboard</h2>

        {/* Right Section - Links & Icons */}
        <div className="flex items-center gap-4">
          {/* Visible Links for Larger Screens */}
          <div className="hidden md:flex items-center gap-4">
          <button className="bg-black text-white px-4 py-1 rounded-md">Create</button>

            <a className="text-blue-500 hover:underline"  target="_blank" href="https://credque.com/tutorial/">
              Tutorial
            </a>
            <a className="text-blue-500 hover:underline" target="_blank" href="https://credque.com/emi/">
              EMI Calculator
            </a>
            {isLiveCall ? (
              <button className="bg-gradient-to-b from-green-800 to-green-500 text-white font-bold py-2 px-4 rounded-full shadow-inner shadow-gray-700">
                LIVE CALL
              </button>
            ) : (
              <button className="bg-gray-300 text-gray-700 px-4 py-2 font-bold rounded-full ">
                NO LIVE CALL
              </button>
            )}          </div>

          {/* Mobile-Friendly Icons (Shown on Small Screens) */}
          <div className="flex md:hidden items-center gap-3">
            <a href="#" className="text-gray-600 text-xl" aria-label="Tutorial">
              <i className="bx bx-book"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 text-xl"
              aria-label="EMI Calculator"
            >
              <i className="bx bxs-calculator"></i>
            </a>
            {isLiveCall ? (  <a href="#" className="text-green-600 text-xl" aria-label="Tutorial">
              <i className="bx bxs-phone"></i>
            </a>): ( <a href="#" className="text-red-600 text-xl" aria-label="Tutorial">
              <i className="bx bx-phone "></i>
            </a>)}
           
          </div>

          {/* Notification Bell & Avatar (Always Visible) */}
          <div className="relative">
            <i className="bx bx-bell p-overlay-badge text-2xl cursor-pointer">
              <Badge value="2" severity='danger'  size="small"
    className="absolute top-1 right-1"></Badge>
            </i>
          </div>
          <Avatar
            icon="bx bx-user"
            size="small"
            style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
            shape="circle"
            className="cursor-pointer"
          />
        </div>
      </div>
      <p className="ml-1 text-gray-600 italic text-sm">
        <i className="bx bx-bulb text-sm" style={{ color: "yellow" }}></i> The only
        way to do great work is to love what you do - Steve Jobs
      </p>
    </div>
  );
}
