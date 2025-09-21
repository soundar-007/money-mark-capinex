// components/AddOrganizationModal.js
import React, { useState } from "react";
import Button from "../Button";
import InputFloating from "../InputFloating";

export default function AddOrganizationModal({ isOpen, onClose }) {
  const [orgName, setOrgName] = useState("");

  if (!isOpen) return null;

  const handleAdd = () => {
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 absolute top-5">
        {/* Modal header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="text-md font-medium">Add Child</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd();
          }}
          className="flex gap-4 items-center"
          noValidate
        >
          <div className="flex-1">
            <label htmlFor="orgName" className="block text-sm font-medium mb-1">
              OrgName <span className="text-red-600">*</span>
            </label>
            <InputFloating
              type="text"
              id="orgName"
              name="orgName"
              value={orgName}
              onChange={setOrgName}
              required
              className="w-full  rounded px-3 py-2 focus:outline-none "
              placeholder="Enter organization name"
            />
          </div>
          <div>
            <Button label="Add" />
          </div>
        </form>
      </div>
    </div>
  );
}
