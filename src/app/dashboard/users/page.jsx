"use client";
import React, { useState } from "react";
import CustomDropdown from "@/components/CustomDropdown";
import InputFloating from "@/components/InputFloating";
import DropdownMenu from "@/components/users/DropdownMenu";
import {
  useAccessType,
  useCreateUser,
  useDeleteUser,
  useUsers,
} from "@/hooks/useUsers";
import Loader from "@/components/Loader";
import { toast } from "react-hot-toast";
import Spinner from "@/components/Spinner";
const UserManagement = () => {
  const [mobile, setMobile] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userType, setUserType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useUsers();
  const { data: accessType } = useAccessType();
  const { mutate: createUser, isPending } = useCreateUser();

  const handleCreateUser = () => {
    if (!mobile || mobile.trim() === "") {
      toast.error("Mobile number is required");
      return;
    }
    if (!displayName || displayName.trim() === "") {
      toast.error("Display name is required");
      return;
    }
    if (!userType || userType.trim() === "") {
      toast.error("Access type is required");
      return;
    }

    const params = {
      mobile_number: mobile,
      display_name: displayName,
      access_type: userType,
      permissions: [],
    };
    createUser(params, {
      onSuccess: () => {
        setDisplayName("");
        setMobile("");
        setUserType("");
      },
    });
  };

  // const handleDeleteUser = (userId)=>{
  //  deleteUser(userId)
  // }

  const handleAccessTypeChange = (userId, newAccessType) => {};

  if (isLoading) return <Loader />;
  return (
    <div className="p-4">
      {/* Add User Section */}
      <div className="flex flex-wrap gap-4 mb-6 lg:pr-24 ">
        <InputFloating
          label={"Mobile *"}
          value={mobile}
          onChange={setMobile}
          className=" w-full sm:w-1/4"
        />

        <InputFloating
          label={"Display Name *"}
          value={displayName}
          onChange={setDisplayName}
          className=" w-full sm:w-1/4"
        />

        {/* Dropdown Section */}
        <CustomDropdown
          label="Access Type *"
          options={accessType?.map((ac) => ({ ...ac, value: ac.code })) || []}
          value={userType}
          onChange={setUserType}
          className="w-full sm:w-1/6 "
        />
        <button
          disabled={isPending}
          onClick={handleCreateUser}
          className="bg-primary text-white rounded px-4 py-2 font-semibold flex items-center gap-2"
        >
          {isPending ? "Adding.." : "Add User"}
          {isPending && <Spinner />}
        </button>
        <button className="bg-gray-200 rounded px-4 py-2 border-2 border-primary">
          Show Deleted Users
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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
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
              <th className="py-4 px-4 border-b whitespace-nowrap border-gray-300 text-left text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user, idx) => (
              <tr key={user.id} className="border-b border-gray-300">
                <td className="py-4 whitespace-nowrap px-4">{idx + 1}</td>
                <td className="py-4 whitespace-nowrap px-4">
                  {user.mobile_number}
                </td>
                <td className="py-4 whitespace-nowrap px-4">
                  {user.display_name}
                </td>
                <td className="py-4 whitespace-nowrap px-4 w-60">
                  <select
                    value={user.access_type}
                    onChange={(e) =>
                      handleAccessTypeChange(user.id, e.target.value)
                    }
                    className="w-full rounded-md py-2 px-2 focus:outline-none bg-white border border-gray-400 text-gray-600"
                  >
                    {accessType?.map((access) => {
                      return <option value={access.code}>{access.name}</option>;
                    })}
                  </select>
                </td>
                <td className="py-4 whitespace-nowrap px-4">{user?.org}</td>
                <td className="py-4 whitespace-nowrap px-4">
                  {user?.designation}
                </td>
                <td className="py-4 whitespace-nowrap px-4">{user?.email}</td>
                <td className="py-4 whitespace-nowrap px-4">
                  <span className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-bold">
                    <i className="bx bxs-circle text-green-800 text-xs mr-1"></i>
                    {user.is_active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="py-4 whitespace-nowrap px-10 cursor-pointer relative">
                  {" "}
                  <DropdownMenu user={user} />{" "}
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
