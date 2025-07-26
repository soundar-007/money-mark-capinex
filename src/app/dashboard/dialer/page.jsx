"use client";
import React, { useState } from "react";
import CustomDropdown from "@/components/CustomDropdown";
import InputFloating from "@/components/InputFloating";
export default function Dialer() {
  const [mobile, setMobile] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userType, setUserType] = useState("User");
  const [searchTerm, setSearchTerm] = useState("");
  const [tableData, setUsers] = useState([
    { id: 1, userName: "9000018001", displayName: "SWAMY", extension: "6001", queue: "" },
  { id: 2, userName: "9000016010", displayName: "Kavvana", extension: "6010", queue: "capinex" },
  { id: 3, userName: "9000018002", displayName: "Alice", extension: "6002", queue: "support" },
  { id: 4, userName: "9000016011", displayName: "Bob", extension: "6011", queue: "" },
  { id: 5, userName: "9000018003", displayName: "Charlie", extension: "6003", queue: "sales" },
  { id: 6, userName: "9000016012", displayName: "David", extension: "6012", queue: "marketing" },
  { id: 7, userName: "9000018004", displayName: "Eve", extension: "6004", queue: "" },
  { id: 8, userName: "9000016013", displayName: "Frank", extension: "6013", queue: "hr" },
  { id: 9, userName: "9000018005", displayName: "Grace", extension: "6005", queue: "operations" },
  { id: 10, userName: "9000016014", displayName: "Henry", extension: "6014", queue: "" },
  
  ]);

  const handleQueueChange = (userId, newQueue) => {
    setUsers(
      tableData.map((tableData) =>
        tableData.id === userId ? { ...tableData, queue: newQueue } : tableData
      )
    );
  };

  return (
    <div className="p-4">
      {/* Add User Section */}
      <div className="flex flex-wrap justify-end gap-4 mb-6">
        <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
          IVR Audio
        </button>
        <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
          Add Disponsitions
        </button>
        <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
          Add Queue
        </button>
        <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
          Add Gateway
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <InputFloating
          label={"Search Here"}
          value={searchTerm}
          onChange={setSearchTerm}
          className=" w-full "
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-b-2 border-primary">
              <th className="py-4 px-4 whitespace-nowrap text-left text-gray-600">
                ID
              </th>
              <th className="py-4 px-4 whitespace-nowrap text-left text-gray-600">
                User Name
              </th>
              <th className="py-4 px-4 whitespace-nowrap text-left text-gray-600">
                Display Name
              </th>
              <th className="py-4 px-4 whitespace-nowrap text-left text-gray-600">
                Extension
              </th>
              <th className="py-4 px-4 whitespace-nowrap text-left text-gray-600">
                Queue
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((user, index) => (
              <tr
                key={user.id}
                className={`border-b border-gray-300 ${
                  index % 2 !== 0 ? "bg-gray-200" : ""
                }`}
              >
                <td className="py-4 whitespace-nowrap px-4">{user.id}</td>
                <td className="py-4 whitespace-nowrap px-4">{user.userName}</td>
                <td className="py-4 whitespace-nowrap px-4">
                  {user.displayName}
                </td>
                <td className="py-4 whitespace-nowrap px-4 w-full">
                  <div className="flex  gap-2  w-full">
                  <input
                    type="text"
                    className="text-left p-2 text-gray-600 border border-gray-300 rounded-lg bg-white w-52 focus:outline-none"
                    value={user.extension}
                    readOnly
                  />
                  <input
                    type="text"
                    className="text-left p-2 text-gray-600 border border-gray-300 rounded-lg bg-white w-32 focus:outline-none"
                    value={"Secret"}
                    readOnly
                  />
                  <div className="flex gap-5">
                  <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
                    Add
                  </button>
                  <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
                    Delete
                  </button>
                  </div>
                  

                  </div>
                 
                </td>
                <td className="py-4 f whitespace-nowrap px-4 w-full">
                  <div className="flex  gap-4 w-full">
                  <select
                    value={user.queue || ""}
                    onChange={(e) => handleQueueChange(user.id, e.target.value)}
                    className=" rounded-md py-3 px-4 focus:outline-none bg-white border border-gray-400 text-gray-600"
                  >
                    <option value="" disabled hidden >
                      Select queue
                    </option>
                    <option value="capinex">capinex</option>
                    <option value="Telugu">Telugu</option>
                  </select>
                  <div className="flex gap-5">
                  <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
                    Assign
                  </button>
                  <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
                    Delete
                  </button>
                  </div>
                 
                  </div>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
