"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Permissions from "./Permissions";
import { SquarePen } from "lucide-react";
import { useUpdateUser, useUserDetails } from "@/hooks/useUsers";
import Spinner from "../Spinner";
import Loader from "../Loader";

const UserDetails = ({ userId }) => {
  const { data, isLoading } = useUserDetails(userId);
  const [userInfo, setUserInfo] = useState();
  const { mutate: updateUser, isPending } = useUpdateUser();
  useEffect(() => {
    setUserInfo(data?.user);
  }, [data]);

  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      displayName: "",
      designation: "",
      accessType: "",
      email: "",
    },
  });

  useEffect(() => {
    if (userInfo) {
      reset({
        displayName: userInfo.display_name || "",
        designation: userInfo.designation || "",
        accessType: userInfo.access_type || "",
        email: userInfo.email || "",
      });
    }
  }, [userInfo, reset]);

  const handleToggleActive = () => {
    if (!userInfo) return;

    const updatePayload = {
      id: userInfo.id,
      mobile_number: userInfo.mobile_number,
      display_name: userInfo.display_name,
      access_type: userInfo.access_type,
      email: userInfo.email,
      is_active: !userInfo.is_active, // toggle active status
    };

    updateUser(updatePayload, {
      onSuccess: () => {
        setUserInfo((prev) => ({
          ...prev,
          is_active: !prev.is_active,
        }));
      },
    });
  };
  const onSubmit = (formData) => {
    const updatePayload = {
      id: userInfo.id,
      mobile_number: userInfo.mobile_number,
      display_name: formData.displayName,
      access_type: formData.accessType,
      email: formData.email,
      designation: formData.designation,
    };

    updateUser(updatePayload, {
      onSuccess: () => {
        setUserInfo((prev) => ({
          ...prev,
          display_name: formData.displayName,
          designation: formData.designation,
          access_type: formData.accessType,
          email: formData.email,
        }));
        setIsEditing(false);
      },
    });
  };

  const cancelEdit = () => {
    reset();
    setIsEditing(false);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="p-4 ">
      <div className="mt-8 bg-white shadow rounded p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 mb-6 gap-2">
          <div>
            <img
              src={userInfo?.profileImageUrl || "/assets/dummy.jpeg"}
              alt="User"
              className="w-20 h-20 rounded-full mb-2"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">
                {userInfo?.display_name} | {userInfo?.mobile_number} |
              </span>
              <SquarePen
                className="w-6 h-6 cursor-pointer"
                onClick={() => setIsEditing(true)}
              />
            </div>
            <div className="text-sm">
              {userInfo?.designation || "agent"} |{" "}
              <span className="font-medium">
                {userInfo?.orgName || "AGENT"}
              </span>
            </div>
            <div className="text-sm capitalize">
              {userInfo?.access_type || "User"}
            </div>
            <button
              onClick={handleToggleActive}
              className={`mt-2 px-3 py-1 bg-gray-300 rounded-lg disabled:opacity-50 ${
                userInfo?.is_active
                  ? "bg-red-200 text-red-500"
                  : "bg-green-300 text-green-350"
              }`}
            >
              {userInfo?.is_active ? "Disable User" : "Enable User"}
            </button>
          </div>
        </div>

        {isEditing && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
              <div>
                <label
                  htmlFor="displayName"
                  className="block text-sm font-medium mb-1"
                >
                  User Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="displayName"
                  {...register("displayName", {
                    required: "User Name is required",
                  })}
                  className={`block w-full rounded border px-3 py-2 text-sm focus:ring-2 focus:outline-none ${
                    errors.displayName
                      ? "border-red-600 focus:ring-red-600"
                      : "border-gray-300 focus:ring-indigo-200"
                  }`}
                />
                {errors.displayName && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.displayName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="designation"
                  className="block text-sm font-medium mb-1"
                >
                  Designation <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="designation"
                  {...register("designation", {
                    required: "Designation is required",
                  })}
                  className={`block w-full rounded border px-3 py-2 text-sm focus:ring-2 focus:outline-none ${
                    errors.designation
                      ? "border-red-600 focus:ring-red-600"
                      : "border-gray-300 focus:ring-indigo-200"
                  }`}
                />
                {errors.designation && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.designation.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="accessType"
                  className="block text-sm font-medium mb-1"
                >
                  Access Type <span className="text-red-600">*</span>
                </label>
                <select
                  id="accessType"
                  {...register("accessType", {
                    required: "Access Type is required",
                  })}
                  className={`block w-full rounded border px-3 py-2 text-sm focus:ring-2 focus:outline-none ${
                    errors.accessType
                      ? "border-red-600 focus:ring-red-600"
                      : "border-gray-300 focus:ring-indigo-200"
                  }`}
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                </select>
                {errors.accessType && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.accessType.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-200 focus:outline-none"
                />
              </div>
              <div className="flex items-end space-x-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-md"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      <div className="mt-10 max-w-7xl mx-auto">
        <Permissions />
      </div>
    </div>
  );
};

export default UserDetails;
