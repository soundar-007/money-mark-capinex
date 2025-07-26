"use client";
import CustomDropdown from "@/components/CustomDropdown";
import DatePicker from "@/components/DatePicker";
import InputFloating from "@/components/InputFloating";
import React, { useState } from "react";

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const agentNames = [
    { name: "New York", value: "New York" },
    { name: "Rome", value: "Rome" },
    { name: "London", value: "London" },
    { name: "Istanbul", value: "Istanbul" },
    { name: "Paris", value: "Paris" },
  ];
  const positions = [
    { name: "Lead", value: "Lead" },
    { name: "Executive", value: "Executive" },
    { name: "HR", value: "HR" },
    { name: "Manager", value: "Manager" },
  ];

  const tableData=[
    {
      id: 1,
      agentName: "Sushmita",
      agent: "6017",
      disposition: "Lead",
      mobile: "8019121880",
      direction: "Outgoing",
      agentHangup: "",
      customerName: "PATHI RAVI KUMAR",
      dateTime: "25/01/2025 12:38",
      deadTime: 8,
      talkTime: 213,
      audio: {
        src: "audio1.mp3",
      },
    },
    {
      id: 2,
      agentName: "Leelavati",
      agent: "6013",
      disposition: "Lead",
      mobile: "8644233348",
      direction: "Outgoing",
      agentHangup: "",
      customerName: "",
      dateTime: "25/01/2025 10:36",
      deadTime: "",
      talkTime: 455,
      audio: null,
    },
    {
      id: 3,
      agentName: "Bhoomika",
      agent: "6011",
      disposition: "Lead",
      mobile: "9632589114",
      direction: "Outgoing",
      agentHangup: "",
      customerName: "",
      dateTime: "25/01/2025 10:22",
      deadTime: 7,
      talkTime: 220,
      audio: null,
    },
    {
      id: 4,
      agentName: "Swathi",
      agent: "6015",
      disposition: "Lead",
      mobile: "9886730238",
      direction: "Outgoing",
      agentHangup: "",
      customerName: "",
      dateTime: "24/01/2025 17:41",
      deadTime: 26,
      talkTime: 24,
      audio: null,
    },
    {
      id: 5,
      agentName: "Leelavati",
      agent: "6013",
      disposition: "Lead",
      mobile: "9164580812",
      direction: "Outgoing",
      agentHangup: "",
      customerName: "",
      dateTime: "24/01/2025 17:39",
      deadTime: 1,
      talkTime: 4,
      audio: null,
    },
    {
      id: 6,
      agentName: "Sushmita",
      agent: "6017",
      disposition: "Lead",
      mobile: "8427673579",
      direction: "IVR",
      agentHangup: "",
      customerName: "",
      dateTime: "24/01/2025 16:10",
      deadTime: "",
      talkTime: 480,
      audio: null,
    },
    {
      id: 7,
      agentName: "Sushmita",
      agent: "6017",
      disposition: "Lead",
      mobile: "8427673579",
      direction: "IVR",
      agentHangup: "",
      customerName: "",
      dateTime: "24/01/2025 16:10",
      deadTime: "",
      talkTime: 480,
      audio: null,
    },
    {
      id: 8,
      agentName: "Sushmita",
      agent: "6017",
      disposition: "Lead",
      mobile: "8427673579",
      direction: "IVR",
      agentHangup: "",
      customerName: "",
      dateTime: "24/01/2025 16:10",
      deadTime: "",
      talkTime: 480,
      audio: null,
    },
    {
      id: 9,
      agentName: "Sushmita",
      agent: "6017",
      disposition: "Lead",
      mobile: "8427673579",
      direction: "IVR",
      agentHangup: "",
      customerName: "Ravi T",
      dateTime: "24/01/2025 16:10",
      deadTime: "",
      talkTime: 480,
      audio: null,
    }
  ];

  const handleMobileNumberChange = (value) => {
    setMobileNumber(value);
  };
  return (
    <div className="p-4">
      {/* Add User Section */}
      <div className="flex flex-wrap gap-4 mb-6 w-[90%]  lg:pr-24 ">
        <DatePicker label="Start Date" />
        <DatePicker label="End Date" />

        <InputFloating
          label="Mobile Number"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          className="w-full sm:w-1/6  "
        />
        {/* Dropdown Section */}
        <CustomDropdown
          label="Agents"
          options={agentNames}
          value={selectedAgent}
          onChange={setSelectedAgent}
          className="w-full sm:w-1/6 "
        />
        <CustomDropdown
          label="Disposition"
          options={positions}
          value={selectedPosition}
          onChange={setSelectedPosition}
          className="w-full sm:w-1/6  "
        />
        <InputFloating
          label="Talk Time>"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          className="w-full sm:w-1/6  "
        />
        <CustomDropdown
          label="Direction"
          options={positions}
          value={selectedPosition}
          onChange={setSelectedPosition}
          className="w-full sm:w-1/6  "
        />

        <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
          Search
        </button>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b border-primary">
              <th className=" text-center  text-primary">
                #
              </th>
              <th className=" text-center  text-primary">
                Agent Name
              </th>
              <th className=" text-center  text-primary">
                Agent
              </th>
              <th className=" text-center  text-primary">
                Disposition
              </th>
              <th className=" text-center  text-primary">
                Mobile
              </th>
              <th className=" text-center  text-primary">
                Direction
              </th>
              <th className=" text-center  text-primary">
                Agent Hangup
              </th>
              <th className=" text-center  text-primary">
                Customer Name
              </th>
              <th className=" text-center  text-primary">
                Date & Time
              </th>
              <th className=" text-center  text-primary">
                Dead Time
              </th>
              <th className=" text-center  text-primary">
                Talk Time(Sec)
              </th>
              <th className=" text-center  text-primary"></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user,index) => (
              <tr key={user.id}  className={`hover:text-red-500 ${index % 2 !== 0 ? "bg-gray-300" : ""}`} >
                <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-4 ">{user.id}</td>
                <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-4">{user.agentName}</td>
                <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-4">{user.agent}</td>
                <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-4">{user.disposition}</td>
                <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-4 text-blue-600">{user.mobile}</td>
                <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-4">{user.direction}</td>
                <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-4">{user.agentHangup}</td>
                <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-4">{user.customerName}</td>
                <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-4">{user.dateTime}</td>
                <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-10">{user.deadTime}</td>
                <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-10">
            {user.talkTime}
            {!user.audio && user.talkTime && (
              <i className="bx bx-play text-xl"></i>
            )}
          </td>
          <td className="py-2 border-r-2 text-center border-white whitespace-nowrap px-4">
            {user.audio && (
              <div className="flex items-center">
                <audio src={user.audio.src} controls className="mr-2" />
    
              </div>
            )}
          </td>
              </tr>
            ))}
          </tbody>
        </table> 
      </div>
    </div>
  );
};

export default UserManagement;
