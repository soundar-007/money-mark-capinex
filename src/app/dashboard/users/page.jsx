"use client";
import React, { useState } from "react";
import CustomDropdown from "@/components/CustomDropdown";
import InputFloating from "@/components/InputFloating";
const UserManagement = () => {
  const [mobile, setMobile] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userType, setUserType] = useState("User");
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      userName: "9000018001",
      displayName: "SWAMY",
      accessType: "User",
      org: "Top Management",
      designation: "TOP MANAGEMENT",
      email: "swamyadm@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      userName: "9000016010",
      displayName: "Kavvana",
      accessType: "User",
      org: "AGENT",
      designation: "Agent",
      email: "",
      status: "Active",
    },
    // ... (rest of your user data)
  ]);

  const handleAccessTypeChange = (userId, newAccessType) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, accessType: newAccessType } : user
      )
    );
  };

  const userTypeOptions = [
    { name: "User", value: "User" },
    { name: "Admin", value: "Admin" },
  ];

  return (
    <div className="p-4">
      {/* Add User Section */}
      <div className="flex flex-wrap gap-4 mb-6 lg:pr-24 ">
        <InputFloating label={"Mobile *"} value={mobile}   onChange={setMobile}
  className=" w-full sm:w-1/4"/>
        
        <InputFloating label={"Display Name *"} value={displayName}   onChange={setDisplayName}
  className=" w-full sm:w-1/4"/>
        
   
        {/* Dropdown Section */}
        <CustomDropdown
          label="Access Type *"
          options={userTypeOptions}
          value={userType}
          onChange={setUserType}
          className="w-full sm:w-1/6 "
        />
        <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
          Add User
        </button>
        <button className="bg-gray-200 rounded px-4 py-2 border-2 border-primary">
          Show Deleted Users
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
      <InputFloating label={"Search Here"} value={searchTerm}   onChange={setSearchTerm}
  className=" w-full "/>
      </div>
     
      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr >
              <th className="py-4 px-4 border-b whitespace-nowrap border-gray-300 text-left text-gray-600">
                #
              </th>
              <th className="py-4 px-4 border-b whitespace-nowrap border-gray-300 text-left text-gray-600">
                User Name
              </th>
              <th className="py-4 px-4 border-b whitespace-nowrap border-gray-300 text-left text-gray-600">
                Display Name
              </th>
              <th className="py-4 px-4 border-b whitespace-nowrap border-gray-300 text-left text-gray-600">
                Access Type
              </th>
              <th className="py-4 px-4 border-b whitespace-nowrap border-gray-300 text-left text-gray-600">
                Org
              </th>
              <th className="py-4 px-4 border-b whitespace-nowrap border-gray-300 text-left text-gray-600">
                Designation
              </th>
              <th className="py-4 px-4 border-b whitespace-nowrap border-gray-300 text-left text-gray-600">
                Email
              </th>
              <th className="py-4 px-4 border-b whitespace-nowrap border-gray-300 text-left text-gray-600">
                Status
              </th>
              <th className="py-4 px-4 border-b whitespace-nowrap border-gray-300 text-left text-gray-600">
                
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-300">
                <td className="py-4 whitespace-nowrap px-4">{user.id}</td>
                <td className="py-4 whitespace-nowrap px-4">{user.userName}</td>
                <td className="py-4 whitespace-nowrap px-4">{user.displayName}</td>
                <td className="py-4 whitespace-nowrap px-4 w-full sm:w-60">
                  <select
                    value={user.accessType}
                    onChange={(e) =>
                      handleAccessTypeChange(user.id, e.target.value)
                    }
                    className="w-full rounded-md py-3 px-4 focus:outline-none bg-white border border-gray-400 text-gray-600"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
                <td className="py-4 whitespace-nowrap px-4">{user.org}</td>
                <td className="py-4 whitespace-nowrap px-4">{user.designation}</td>
                <td className="py-4 whitespace-nowrap px-4">{user.email}</td>
                <td className="py-4 whitespace-nowrap px-4">
                  <span className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-bold">
                    <i className="bx bxs-circle text-green-800 text-xs mr-1"></i>
                    {user.status}
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap px-10 cursor-pointer"><i className='bx bx-dots-vertical-rounded text-gray-400 text-lg' ></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;