import React, { useState, useEffect } from "react";
import PersonalDetails from "./PersonalDetails";
import EmployeeDetails from "./EmployeeDetails";
import AddressDetails from "./AddressDetails";
import BankDetails from "./BankDetails";
import { maskPhoneNumber } from "@/lib/masking";

const tabs = ["personal", "employment", "address", "bank"];
const label = {
  personal: "Personal Details",
};

const CustomerDetailsEditModal = ({
  customer,
  onClose,
  isOpen,
  handleUpdate,
}) => {
  const [activeTab, setActiveTab] = useState("personal");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 z-55"
      onClick={onClose}
    >
      <div
        className={`fixed top-0 h-full bg-white shadow-lg p-8 overflow-y-auto transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside dialog
        style={{ maxHeight: "100vh", width: "auto", right: "-2px" }}
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-lg"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {/* Header Info */}
        <div className="mb-4 flex text-sm gap-10">
          <div>
            <strong>Customer Name:</strong>
            <p>
              {(customer?.first_name || "FNAME") +
                (customer?.last_name || "LNAME")}
            </p>
          </div>
          <div>
            <strong>Mobile Number:</strong>
            <p>{maskPhoneNumber(customer?.phone_number) || ""}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-6 text-gray-600 font-semibold">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-500"
                    : ""
                }`}
                type="button"
              >
                {tab + " Details"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "personal" && (
            <PersonalDetails customer={customer} handleUpdate={handleUpdate} />
          )}
          {activeTab === "employment" && (
            <EmployeeDetails customer={customer} handleUpdate={handleUpdate} />
          )}
          {activeTab === "address" && (
            <AddressDetails customer={customer} handleUpdate={handleUpdate} />
          )}
          {activeTab === "bank" && (
            <BankDetails customer={customer} handleUpdate={handleUpdate} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsEditModal;
