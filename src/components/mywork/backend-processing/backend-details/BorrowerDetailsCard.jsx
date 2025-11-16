"use client";

import InputFloating from "@/components/InputFloating";
import UploadDocumentModal from "@/components/Leads/UploadDocumentModal";
import {
  AtSignIcon,
  ChevronDown,
  EditIcon,
  MenuIcon,
  UploadCloudIcon,
} from "lucide-react";
import React, { useState } from "react";
import EmailModal from "./EmailModal";

const BorrowerDetailsCard = ({borrower}) => {
  if(!borrower) return


  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [formData, setFormData] = useState({
    loan_account_no: "",
    final_loan_amount: "",
    final_rate: "",
    final_tenure: "",
    emi: "",
    amount_requested: "",
    gender: "",
    proposed_emi: "",
    proposed_rate: "",
    location: "",
    expected_tenure: "",
    net_salary: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFloatingChange = (name) => (value) => {
    handleChange({ target: { name, value } });
  };

  const [isUploadDocumentModalOpen, setIsUploadDocumentModalOpen] =
    useState(false);

  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      {/* Header Row */}
      <div className="flex border-b border-gray-200 mb-4 items-center">
        <UploadDocumentModal
          isOpen={isUploadDocumentModalOpen}
          onClose={() => setIsUploadDocumentModalOpen(false)}
        />
        <div
          onClick={() => handleTab("tab1")}
          className={`w-1/4 font-semibold border-b mt-4 pb-2 cursor-pointer text-center ${
            selectedTab == "tab1" ? " border-black" : ""
          }`}
        >
          Borrower Details
        </div>
        <div
          onClick={() => handleTab("tab2")}
          className={`w-1/4 font-semibold border-b mt-4 pb-2 cursor-pointer text-center ${
            selectedTab == "tab2" ? " border-black" : ""
          }`}
        >
          Documents (1)
        </div>
        {selectedTab == "tab1" && (
          <div className="w-1/2 flex justify-end items-center gap-3 pt-2">
            {/* Submit to bank + dropdown */}
            <div className="relative">
              <button
                className="bg-black text-white px-3 py-1 rounded inline-flex items-center space-x-2"
                type="button"
              >
                <span>Submit to bank</span>
                <ChevronDown onClick={() => setMenuOpen1((v) => !v)} />
              </button>
              {menuOpen1 && (
                <div
                  className="absolute right-0 mt-1 bg-gray-100 border rounded shadow min-w-[80px] z-20"
                  onMouseLeave={() => setMenuOpen1(false)}
                >
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-red-600">
                    Reject
                  </div>
                </div>
              )}
            </div>
            {/* Second Dropdown */}
            <div className="relative">
              <button
                className="inline-flex items-center px-2"
                onMouseEnter={() => setMenuOpen2((v) => true)}
                type="button"
              >
                <MenuIcon />
              </button>
              {menuOpen2 && (
                <div
                  className="absolute right-0 mt-1 bg-gray-100 border rounded shadow z-20 text-sm"
                  style={{ width: "140px" }}
                  onMouseLeave={() => setMenuOpen2(false)}
                >
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Backend Transfer
                  </div>
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Assign Bank Contact
                  </div>
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Lead
                  </div>
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Analyser
                  </div>
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center">
                    <img
                      src="/assets/whatsapp-kyc.png"
                      alt="kyc"
                      className="mr-1 w-5"
                    />{" "}
                    Start KYC
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {selectedTab == "tab2" && (
          <div className="w-1/2 flex justify-end items-center gap-3 pt-2">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setIsUploadDocumentModalOpen(true)}
                className=" text-black px-3 py-1 rounded inline-flex items-center space-x-2 border-2"
              >
                <UploadCloudIcon className="w-4 h-4" /> <span>Upload</span>
              </button>
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="text-black px-3 py-1 rounded inline-flex items-center space-x-2 border-2"
              >
                <AtSignIcon className="w-4 h-4" /> <span>Email</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Borrower block */}
      {selectedTab == "tab1" && (
        <div>
          <div className="flex gap-2 items-center mb-4">
            <h2 className="text-xl font-semibold">{borrower?.leadname}</h2>
            <EditIcon />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-gray-700 text-sm">
            <div>
              <span className="font-semibold">Mobile:</span> {borrower?.phone_number}
            </div>
            <div>
              <span className="font-semibold">Amount Requested:</span>{" "}
              {borrower?.loan_amount}
            </div>
            <div>
              <span className="font-semibold">Gender:</span> {borrower?.gender}
            </div>
            <div>
              <span className="font-semibold">Proposed EMI:</span>{" "}
              {borrower?.proposed_emi}
            </div>
            <div>
              <span className="font-semibold">Proposed Rate:</span>{" "}
              {borrower?.proposed_rate}%
            </div>
            <div>
              <span className="font-semibold">Location:</span>{" "}
              {borrower?.location}
            </div>
            <div>
              <span className="font-semibold">Expected Tenure:</span>{" "}
              {borrower?.expected_tenure} months
            </div>
            <div>
              <span className="font-semibold">Net Salary:</span>{" "}
              {borrower?.net_salary}
            </div>
          </div>

          {/* Form Block */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 space-y-4 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <InputFloating
              label="Loan Account No"
              value={formData.loan_account_no}
              onChange={handleInputFloatingChange("loan_account_no")}
              className="w-full mt-4"
            />
            <InputFloating
              label="Final Loan Amount"
              value={formData.final_loan_amount}
              onChange={handleInputFloatingChange("final_loan_amount")}
              className="w-full"
            />
            <InputFloating
              label="Final Rate"
              value={formData.final_rate}
              onChange={handleInputFloatingChange("final_rate")}
              className="w-full"
            />
            <InputFloating
              label="Final Tenure"
              value={formData.final_tenure}
              onChange={handleInputFloatingChange("final_tenure")}
              className="w-full"
            />
            <InputFloating
              label="EMI"
              className="w-full"
              value={formData.emi}
              onChange={handleInputFloatingChange("emi")}
            />
            {/* <Button className="bg-black-150" label="Update" /> */}
            <button className="bg-gray-300">Update</button>
          </form>
        </div>
      )}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
};

export default BorrowerDetailsCard;
