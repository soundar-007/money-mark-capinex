"use client";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";

const MyMissedCall = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [inputFocused, setInputFocused] = useState(false);
 
  const data = [
    {
      id: 1,
      mobile: "7075492300",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:52",
    },
    {
      id: 2,
      mobile: "9594436684",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:52",
    },
    {
      id: 3,
      mobile: "7508303318",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:52",
    },
    {
      id: 4,
      mobile: "9738255698",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:47",
    },
    {
      id: 5,
      mobile: "9880573322",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:38",
    },
    {
      id: 6,
      mobile: "9464311174",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:38",
    },
    {
      id: 7,
      mobile: "9657530029",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:29",
    },
    {
      id: 8,
      mobile: "8860056707",
      campaign: "25IVR",
      queue: "capinex",
      customer: "-",
      direction: "IVR",
      callDate: "25/01/2025 13:27",
    },
  ];



  return (
    <div className="p-4 sm:p-6 flex-1 max-w-full overflow-x-hidden">

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className=" table-auto rounded-lg min-w-full ">
          {/* Table Header */}
          <thead >
            <tr className="border-b-2 border-primary text-gray-700 ">
              <th className="px-4 py-2 text-center">#</th>
              <th className="px-4 py-2 text-center">
                Mobile
              </th>
              <th className="px-4 py-2 text-center">
                Campaign
              </th>
              <th className="px-4 py-2 text-center">
                Queue
              </th>
              <th className="px-4 py-2 text-center">
                Customer Name
              </th>
              <th className="px-4 py-2 text-center">
                Direction
              </th>
              <th className="px-4 py-2 text-center">
                Call Date
              </th>

              <th className="px-4 py-2 text-center">-</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={` hover:bg-gray-300 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-200"
                }`}
              >
                <td className="px-4 py-2 border-r-2 border-white text-center">
                  {item.id}
                </td>
                <td className="px-4 py-2 border-r-2 border-white text-center">
                  {item.mobile}
                </td>
                <td className="px-4 py-2 border-r-2 border-white text-center">
                  {item.campaign}
                </td>
                <td className="px-4 py-2 border-r-2 border-white text-center">
                  {item.queue}
                </td>
                <td className="px-4 py-2 border-r-2 border-white text-center">
                  {item.customer}
                </td>
                <td className="px-4 py-2 border-r-2 border-white text-center">
                  {item.direction}
                </td>
                <td className="px-4 py-2 border-r-2 border-white text-center">
                  {item.callDate}
                </td>
                <td className="px-4 py-2   text-center flex gap-2">

                  <button className="border border-green-500 text-green-500 text-xs px-3 py-1 rounded-lg">
                    Lead
                  </button>
                  <button className="border border-red-500 text-red-500 text-xs px-3 py-1 rounded-lg">
                    Not Interested
                  </button>
                  <button className="border border-gray-500 text-gray-500 text-xs px-3 py-1 rounded-lg">
                    DND
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyMissedCall;
