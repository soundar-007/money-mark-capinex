"use client";
import React, { useState, useRef, useEffect } from "react";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { useAuth } from "@/context/AuthContext";
import BreadcrumbWrapper from "./Wrappers/BreadcrumpWrapper";

export default function Header() {
  const isLiveCall = true;
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  console.log(user);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="bg-white  p-2 pl-4 border-b border-gray-300 ">
      <div className="flex justify-between items-center">
        {/* Left Section - Dashboard Title */}
        <BreadcrumbWrapper />

        {/* Right Section - Links & Icons */}
        <div className="flex items-center gap-4">
          {/* Visible Links for Larger Screens */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-black text-white px-4 py-1 rounded-md">
              Create
            </button>
            <a
              className="text-blue-500 hover:underline"
              target="_blank"
              href="https://credque.com/tutorial/"
            >
              Tutorial
            </a>
            <a
              className="text-blue-500 hover:underline"
              target="_blank"
              href="https://credque.com/emi/"
            >
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
            )}{" "}
          </div>

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
            {isLiveCall ? (
              <a
                href="#"
                className="text-green-600 text-xl"
                aria-label="Tutorial"
              >
                <i className="bx bxs-phone"></i>
              </a>
            ) : (
              <a
                href="#"
                className="text-red-600 text-xl"
                aria-label="Tutorial"
              >
                <i className="bx bx-phone "></i>
              </a>
            )}
          </div>

          {/* Notification Bell & Avatar (Always Visible) */}
          <div className="relative">
            <i className="bx bx-bell p-overlay-badge text-2xl cursor-pointer">
              <Badge
                value="2"
                severity="danger"
                size="small"
                className="absolute top-1 right-1"
              ></Badge>
            </i>
          </div>
          <div className="relative" ref={dropdownRef}>
            <Avatar
              icon="bx bx-user"
              size="small"
              style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
              shape="circle"
              className="cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />

            {/* User Dropdown */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                <div className="px-4 py-2 text-sm text-gray-700 border-b">
                  <p className="font-medium">
                    {user?.display_name || user?.email || "User"}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {user?.role_name || "Member"}
                  </p>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setShowDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <i className="bx bx-log-out mr-2"></i>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="ml-1 text-gray-600 italic text-sm">
        <i className="bx bx-bulb text-sm" style={{ color: "yellow" }}></i> The
        only way to do great work is to love what you do - Steve Jobs
      </p>
    </div>
  );
}
