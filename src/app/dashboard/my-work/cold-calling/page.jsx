"use client";
import React, { useState } from "react";
import CustomEditor from "@/components/dashboardComponents/ColdCalling/Editor";
import CallLogs from "@/components/dashboardComponents/ColdCalling/CallLogsTable";

import DateTimePickerModal from "@/components/dashboardComponents/ColdCalling/DateTimePicker";
import PauseReason from "@/components/dashboardComponents/ColdCalling/PauseReason";
const CallDashboard = () => {
  const [checked, setChecked] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [visible, setVisible] = useState(false);
  const [dateVisible, setDateVisible] = useState(false);
  const completedCalls = [
    {
      id: 1,
      mobile: "9916899899",
      name: "",
      disposition: "Not Interested",
      totalTime: 21,
    },
  ];
  const callBacks = [
    {
      mobile: "8050524825",
      name: "",
      time: "23/01/2025 05:15",
      due: "Overdue",
    },
  ];
  const isLiveCall = false;
  const agents = ["Kavana", "Bhoomika"];
  return (
    <div className="flex flex-row justify-end min-w-full ">
      <div className="p-4 w-full">

      <DateTimePickerModal visible={dateVisible} onHide={()=>setDateVisible(false)} />
      <PauseReason visible={visible} onHide={()=>setVisible(false)} />

        {/* Header Buttons */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-2 mb-4 mr-0 lg:mr-10">
          <button className="p-2 px-3 font-bold bg-green-200 bg-opacity-60 rounded-md text-green-500">
            Capinex
          </button>
          <button className="p-2 px-3 font-bold bg-red-200 bg-opacity-60 rounded-md text-black" onClick={()=> setVisible(true)}>
            <i className="bx bx-power-off font-bold text-black text-sm"></i> Log
            Out
          </button>
          <button className="p-2 px-3 font-bold bg-green-200 bg-opacity-60 rounded-md text-green-500" onClick={()=> setDateVisible(true)}>
            Dialer Login
          </button>
          {isLiveCall ? (
            <button className="bg-gradient-to-b from-green-800 to-green-500 text-white font-bold py-2 px-6 rounded-full shadow-inner shadow-gray-700">
              You are Active
            </button>
          ) : (
            <button className="bg-gradient-to-b from-yellow-400 to-yellow-300 text-white px-6 py-2 font-bold rounded-full">
              You are Paused
            </button>
          )}
        </div>

        {/* Mobile Number Display */}
        <div className="mb-3 w-full md:w-3/4 lg:w-1/2 overflow-x-auto">
          <table className="w-full min-w-[300px] mt-2 border-separate">
            <thead>
              <tr>
                <th className="font-bold border-b-2 text-center border-primary">
                  Mobile Number
                </th>
                <th className="font-bold border-b-2 text-center border-primary">
                  Required Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center row-span-2">
                  <h3 className="text-center mt-2">9665633693</h3>
                  <span className="text-gray-400 text-center">Outgoing</span>
                </td>
                <td className="text-center">50000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col md:flex-row gap-2">
          {/* Editor */}
          <CustomEditor className="w-full md:w-3/4" />

          {/* Call Actions */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <button className=" p-2 px-6 bg-gray-300 rounded-md text-black">
              <i className="bx bx-play"></i> Play
            </button>
            <button className=" p-2 bg-red-200 rounded-md text-red-600">
              <i className="bx bxs-phone-off"></i> Hangup
            </button>

            {/* Dial Next Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="dialNext"
                className="w-4 h-4 cursor-pointer"
                onChange={(e) => setChecked(e.target.checked)}
                checked={checked}
              />
              <label
                htmlFor="dialNext"
                className="cursor-pointer text-blue-500"
              >
                Dial Next
              </label>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/4 lg:w-1/2">
  {/* Disposition Buttons */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4 w-full">
    {[
      "Lead",
      "Call Back",
      "Not Eligible",
      "Backlog",
      "Language Barrier",
      "Customer Hangup",
      "Not Interested",
      "RNR",
    ].map((label, idx) => (
      <button
        key={idx}
        className={`px-4 py-2 rounded-md font-normal border-2 transition-all duration-200 
          ${
            label === "Not Interested"
              ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              : "border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
          }`}
      >
        {label}
      </button>
    ))}
  </div>
</div>


        {/* Call Logs Table */}
        <CallLogs />
      </div>

      {/* Agents List */}
      <div className="flex justify-center">
        <div className="flex flex-col gap-1 mt-12">
          <h3 className="text-center mb-2 cursor-pointer">Agents</h3>
          {agents.map((agent, idx) => (
            <div
              key={idx}
              className="p-1 px-3 bg-yellow-100 text-black text-start hover:bg-blue-600 cursor-pointer"
            >
              {agent}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallDashboard;
