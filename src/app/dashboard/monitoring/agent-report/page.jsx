"use client";
import React, { useState } from "react";
import AdminStatusCard from "@/components/dashboardComponents/AdminBoard/AdminStatusCard";
import DatePicker from "@/components/DatePicker";


const CallCenterDashboard = () => {
  const statuses = [
    { label: "Jan-2025", count: 1109 },
    { label: "25/01/2025", count: 159 },
    { label: "24/01/2025", count: 607 },
  ];
  const theads = [
    "Calls",
    "Leads",
    "CB",
    "NI",
    "DND",
    "TT",
    "AHT",
    "DT",
    "LT",
    "LC",
    "PT",
    "PC",
  ];

  const tableData = [
    {
      id: 1,
      telecaller: "Sushmita",
      data: [
        {
          date: "25/01/2025",
          values: [70, 5, 33, "1m", "0s", "8m", "176m", 1, "14m", 30, 125, 4],
        },
        {
          date: "24/01/2025",
          values: [70, 5, 33, "1m", "0s", "8m", "176m", 1, "14m", 30, 125, 4],
        },
        {
          date: "Jan-2025",
          values: [70, 5, 33, "1m", "0s", "8m", "176m", 1, "14m", 30, 125, 4],
        },
      ],
    },
    {
      id: 2,
      telecaller: "Rahul",
      data: [
        {
          date: "25/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "24/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "Jan-2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
      ],
    },
    {
      id: 3,
      telecaller: "Dinesh",
      data: [
        {
          date: "25/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "24/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "Jan-2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
      ],
    },
    {
      id: 4,
      telecaller: "Senthil",
      data: [
        {
          date: "25/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "24/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "Jan-2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
      ],
    },
    {
      id: 5,
      telecaller: "Guna",
      data: [
        {
          date: "25/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "24/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "Jan-2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
      ],
    },
    {
      id: 6,
      telecaller: "Anbu",
      data: [
        {
          date: "25/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "24/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "Jan-2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
      ],
    },
    {
      id: 7,
      telecaller: "Rajan",
      data: [
        {
          date: "25/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "24/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "Jan-2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
      ],
    },
    {
      id: 8,
      telecaller: "Gukesh",
      data: [
        {
          date: "25/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "24/01/2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
        {
          date: "Jan-2025",
          values: [65, 3, 28, "2m", "1s", "9m", "180m", 2, "15m", 28, 120, 3],
        },
      ],
    },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDateFocused, setIsDateFocused] = useState(false);

  return (
    <div className="font-sans min-h-screen p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center justify-between  p-2">
          {/* <div className="relative w-full sm:w-1/4">
            <label
              className={`absolute left-3 transition-all pointer-events-none px-1 bg-white ${
                isDateFocused || selectedDate
                  ? "text-sm -top-2 text-primary-light"
                  : "text-gray-700 top-3"
              }`}
            >
              Date
            </label>
              <input
                type="date"
                className=" rounded-md py-4 px-10 focus:outline-none bg-white border border-gray-400 mr-10" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                onFocus={() => setIsDateFocused(true)}
                onBlur={() => setIsDateFocused(selectedDate !== "")}
              />
          </div> */}
          <DatePicker label="Date" />

          <button className="bg-primary-light hover:bg-primary-dark text-white text-sm font-bold py-2 px-4 rounded ml-5">
            Submit
          </button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 w-full ">
        <AdminStatusCard title={"Total Calls"} statuses={statuses} />
        <AdminStatusCard title={"Total Leads"} statuses={statuses} />
        <AdminStatusCard title={"Average Calls"} statuses={statuses} />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto mt-10">
          <thead>
            <tr>
              <th rowSpan="2" className="p-2 border-b border-primary">
                S No.
              </th>
              <th rowSpan="2" className="p-2 border-b border-primary">
                Telecaller
              </th>
              {/* Iterate through the data and generate date headers */}
              {tableData[0].data.map((row, index) => (
                <th
                  key={row.date}
                  colSpan={theads.length}
                  className={`p-2 text-center ${
                    index % 2 === 0 ? "bg-gray-300" : "bg-gray-400"
                  }`}
                >
                  {row.date}
                </th>
              ))}
            </tr>
            <tr className="text-left">
              {/* Render the regular table headers */}
              {tableData[0].data.map((row, rowIndex) =>
                theads.map((header, index) => (
                  <th
                    key={`${row.date}-${index}`}
                    className={`p-2 border-b mr-1 border-primary text-center bg-gray-200  ${
                      rowIndex % 2 === 0 ? "bg-gray-300" : "bg-gray-400"
                    }`}
                  >
                    {header}
                  </th>
                ))
              )}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={row.id}>
                <td className="px-4 py-4  border-r-2 border-white">{row.id}</td>
                <td className="px-4 py-4  border-r-2 border-white">
                  {row.telecaller}
                </td>
                {/* Iterate through the dates and render each value */}
                {row.data.map((cell, cellIndex) =>
                  cell.values.map((value, index) => (
                    <td
                      key={index}
                      className={`px-4 py-4  border-r-2 border-white ${
                        cellIndex % 2 === 0 ? "bg-gray-300" : "bg-gray-400"
                      }`}
                    >
                      {value}
                    </td>
                  ))
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CallCenterDashboard;
