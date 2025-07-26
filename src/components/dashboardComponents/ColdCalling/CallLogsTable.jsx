"use client";
import React, { useState } from "react";

const CallLogs = () => {
  // Sample Data
  const [search, setSearch] = useState("");


  const callBacks = [
    { id: 1, mobile: "8050524825", name: "", time: "23/01/2025 05:15", due: "Overdue" },
    { id: 2, mobile: "9880882021", name: "", time: "23/01/2025 06:30", due: "Overdue" },
    { id: 3, mobile: "9880882021", name: "", time: "23/01/2025 06:30", due: "Overdue" },
    { id: 4, mobile: "9880882021", name: "Mrs.SUHASINI", time: "23/01/2025 06:30", due: "Future" },
  ];

  // Filter function for search
  const filteredData = callBacks.filter((call) => call.mobile.includes(search));

  const [completedCalls, setCompletedCalls] = useState([
    { id: 1, mobile: "9898989898", name: "John Doe", disposition: "Not Interested", time: 27 },
    { id: 2, mobile: "8888888888", name: "Jane Smith", disposition: "Not Interested", time: 50 },
    { id: 3, mobile: "6363636364", name: "SHAETAL S", disposition: "Not Interested", time: 38 },
  ]);

  return (
    <div className="mt-4 p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       
        {/* Completed Calls Table */}
        <div className="w-full">
          <div className="p-2 flex flex-col sm:flex-row justify-between">
            <span className="text-lg font-semibold border-b-2 border-primary">
              Completed Calls
            </span>
            <span className="text-lg font-semibold border-b-2 border-primary sm:ml-8">
              Call Logs
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm table-auto">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="p-3 text-center ">#</th>
                  <th className="p-3 text-center  min-w-[120px]">Mobile</th>
                  <th className="min-w-[150px] p-3 text-center ">Name</th>
                  <th className="min-w-[120px] p-3 text-center ">Disposition</th>
                  <th className="min-w-[80px] p-3 text-center ">Total Time</th>
                </tr>
              </thead>
              <tbody>
                {completedCalls.map((call, index) => (
                  <tr key={call.id} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"} text-center`}>
                    <td className="p-3 border-r-2">{index + 1}</td>
                    <td className="p-3 border-r-2">{call.mobile}</td>
                    <td className="p-3 border-r-2">{call.name}</td>
                    <td className="p-3 border-r-2">{call.disposition}</td>
                    <td className="p-3">{call.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call Backs Section */}
        <div className="w-full">
          <div className="p-2 flex flex-col sm:flex-row gap-2 items-center">
            <span className="text-lg font-semibold border-b-2 border-primary">
              Call Backs <i className="pi pi-refresh"></i>
            </span>
            <input
              type="text"
              placeholder="Enter Number"
              className="border p-2 rounded-md w-full sm:w-1/2 text-center"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-black text-white px-4 py-2 rounded-md">Call</button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm table-auto">
              <thead>
                <tr>
                  <th className="p-3 text-center border-b-2">Mobile</th>
                  <th className="p-3 text-center border-b-2">Name</th>
                  <th className="p-3 text-center border-b-2">Time</th>
                  <th className="p-3 text-center border-b-2">Due</th>
                  <th className="p-3 text-center border-b-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((call, index) => (
                  <tr
                    key={call.id}
                    className={`text-center ${
                      call.due === "Overdue" ? "bg-red-300" : "bg-blue-300"
                    } ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-300"}`}
                  >
                    <td className="p-2 border whitespace-nowrap">
                      {call.mobile}
                      <button className="bg-gradient-to-t from-lime-600 to-lime-400 h-6 w-6 rounded-sm p-1 ml-2">
                        <i className="bx bxs-phone text-white text-center"></i>
                      </button>
                    </td>
                    <td className="p-2 whitespace-nowrap border">{call.name}</td>
                    <td className="p-2 whitespace-nowrap border">{call.time}</td>
                    <td className="p-2 whitespace-nowrap border">{call.due}</td>
                    <td className="p-2 whitespace-nowrap border">
                      <button>
                        <i className="bx bxs-trash text-red-700 text-lg"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
