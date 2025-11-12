"use client";

import { Edit2Icon, EditIcon } from "lucide-react";
import React, { useState } from "react";

const BorrowerDetailsCard = () => {
  const borrower = {
    name: "Akash M",
    mobile: "9008947018",
    amountRequested: "1000000",
    gender: "Male",
    proposedEMI: "21617.95",
    proposedRate: "10.75",
    location: "Bangalore (KA)",
    expectedTenure: "60",
    netSalary: "80000",
  };

  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      {/* Header Row */}
      <div className="flex border-b border-gray-200 mb-4 items-center">
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
        <div className="w-1/2 flex justify-end items-center gap-3 pt-2">
          {/* Submit to bank + dropdown */}
          <div className="relative">
            <button
              className="bg-black text-white px-3 py-1 rounded inline-flex items-center space-x-2"
              onClick={() => setMenuOpen1((v) => !v)}
              type="button"
            >
              <span>Submit to bank</span>
              {/* <img
                src="assets/img/icons/drop-down.png"
                alt="dropdown"
                className="pl-3"
              /> */}
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
              onClick={() => setMenuOpen2((v) => !v)}
              type="button"
            >
              {/* <img
                src="assets/img/icons/vector-hr.png"
                alt="vector"
                className="w-7"
              /> */}
            </button>
            {menuOpen2 && (
              <div
                className="absolute right-0 mt-1 bg-gray-100 border rounded shadow min-w-[140px] z-20"
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
                    src="assets/img/icons/whatsapp-kyc.png"
                    alt="kyc"
                    className="mr-1 w-5"
                  />{" "}
                  Start KYC
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Borrower block */}
      <div className="flex gap-2 items-center mb-4">
        <h2 className="text-xl font-semibold">{borrower.name}</h2>
        <EditIcon />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-gray-700 text-sm">
        <div>
          <span className="font-semibold">Mobile:</span> {borrower.mobile}
        </div>
        <div>
          <span className="font-semibold">Amount Requested:</span>{" "}
          {borrower.amountRequested}
        </div>
        <div>
          <span className="font-semibold">Gender:</span> {borrower.gender}
        </div>
        <div>
          <span className="font-semibold">Proposed EMI:</span>{" "}
          {borrower.proposedEMI}
        </div>
        <div>
          <span className="font-semibold">Proposed Rate:</span>{" "}
          {borrower.proposedRate}%
        </div>
        <div>
          <span className="font-semibold">Location:</span> {borrower.location}
        </div>
        <div>
          <span className="font-semibold">Expected Tenure:</span>{" "}
          {borrower.expectedTenure} months
        </div>
        <div>
          <span className="font-semibold">Net Salary:</span>{" "}
          {borrower.netSalary}
        </div>
      </div>

      {/* Form Block */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-6 space-y-4 grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        <input
          type="text"
          placeholder="Loan Account No"
          className="border border-gray-300 rounded px-3 py-2 w-full mt-4"
        />
        <input
          type="number"
          placeholder="Final Loan Amount"
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Final Rate"
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Final Tenure"
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="EMI"
          required
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <button
          type="submit"
          className=" bg-gray-200 text-gray-800 py-2 rounded border border-gray-700 "
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default BorrowerDetailsCard;
