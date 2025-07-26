"use client";
import { useState } from "react";

export default function Backlog() {
  const [activeTab, setActiveTab] = useState("User");
  const tabs = ["User", "Org"];
  const statuses = ["ToDo", "Discussion", "Followup", "Closed"];

  const dummyData = {
    ToDo: [
      {
        name: "Bhoomika",
        phone: "9739766016",
        source: "Calling",
        time: "28/01/2025 12:53",
        assignee: "ANAND P",
        duration: "15 h",
      },
      {
        name: "Swathi",
        phone: "9632822105",
        source: "Calling",
        time: "24/01/2025 14:32",
        assignee: "",
        duration: "1 d",
      },
      {
        name: "Swathi",
        phone: "9632822105",
        source: "Calling",
        time: "24/01/2025 14:32",
        assignee: "",
        duration: "1 d",
      },
      {
        name: "Swathi",
        phone: "9632822105",
        source: "Calling",
        time: "24/01/2025 14:32",
        assignee: "",
        duration: "1 d",
      },
    ],
    Discussion: [
      {
        name: "Akash M",
        phone: "9986767811",
        source: "Whatsapp",
        time: "25/01/2025 18:37",
        duration: "1 d",
      },
    ],
    Followup: [],
    Closed: [],
  };

  return (
    <div className="p-4 sm:p-6 w-full">
      {/* Tabs and Create */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-7">
        {/* Tabs */}
        <div className="flex gap-2 sm:gap-10 p-1 py-2 w-full md:w-1/2 lg:w-1/4 justify-center border border-gray-300">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 sm:px-6 py-2 border rounded-md text-sm ${
                activeTab === tab ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
          <select className="border border-gray-300 p-2 rounded">
            <option value="">--Select Source--</option>
            <option>Calling</option>
            <option>Whatsapp</option>
          </select>
          <select className="border border-gray-300 p-2 rounded">
            <option value="">--Select User--</option>
            <option>User 1</option>
            <option>User 2</option>
          </select>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Create +
          </button>
        </div>
      </div>

      {/* Status Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {statuses.map((status) => (
          <div key={status} className="bg-blue-50 rounded-md p-4 min-h-[300px]">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              {status} ({dummyData[status].length})
            </h2>
            {dummyData[status].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded shadow mb-3 text-left"
              >
                <div className="flex justify-between gap-4 items-center mb-2">
                  <div>
                    <div className="font-semibold mb-3">{item.name}</div>
                    <div className="text-sm mb-3">
                      {item.phone}{" "}
                      <button className="bg-gradient-to-t from-lime-600 to-lime-400 h-6 w-6 rounded-sm p-1 ml-2">
                        <i className="bx bxs-phone text-white text-center"></i>
                      </button>
                    </div>
                  </div>

                  <button
                    className={`px-2 py-1 rounded text-xs font-bold ${
                      item.source === "Calling"
                        ? "text-gray-600 bg-gray-200"
                        : "text-green-600 bg-green-100"
                    }`}
                  >
                    {item.source}
                  </button>
                </div>
                {item.assignee && (
                  <div className="text-xs text-black mb-2">{item.assignee}</div>
                )}
                <div className="flex justify-between gap-4 items-center mb-2">
                  <div className="text-xs text-black flex justify-between  w-full">
                    <div>{item.duration}</div>
                    <div>{item.time}</div>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2">
                  {item.source === "Calling" ? (
                    <a href="#" className="text-blue-500 underline text-sm">
                      Start Discussion
                    </a>
                  ) : (
                    <button className="text-sm text-black flex items-center underline  gap-1">
                      Action
                      <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="w-full flex justify-end">
                <i className='bx bxs-chat text-3xl'></i>
                </div>
                <button className="text-xs text-gray-500 mt-2">+ Notes</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
