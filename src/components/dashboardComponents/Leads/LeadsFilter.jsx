"use client";
import React, { useState } from "react";
function LeadsFilter({
  selectedStatus,
  setSelectedStatus,
  selectedDetail,
  setSelectedDetail,
  selectedLoan,
  setSelectedLoan,
}) {
  const statusFilter = [
    "Customer Discussion",
    "Bank Discussion",
    "Pending",
    "Approved",
    "Disbursed",
    "Future Work",
    "Rejected",
  ];

  const detailsFilter = ["Org", "User", "Shared", "Watch"];

  const loanFilter = ["PL", "OD", "HL", "BL", "CC", "HLB", "LAPS", "LAPB"];

  // State for selected filters

  // Handlers for filter selection

  return (
    <div className="flex flex-col gap-2 p-4">
      <div className="flex items-center gap-6">
        {/* Details Filter */}
        <div className="flex gap-4">
          {detailsFilter.map((el) => (
            <div
              key={el}
              className={`cursor-pointer px-3 py-1 rounded-md font-bold text-lg transition-colors duration-200 ${
                selectedDetail === el
                  ? "underline"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedDetail(el)}
            >
              {el}
            </div>
          ))}
        </div>

        {/* Vertical Line */}
        <div className="w-1 h-8 bg-gray-400"></div>

        {/* Loan Filter */}
        <div className="flex gap-4">
          {loanFilter.map((el) => (
            <div
              key={el}
              className={`cursor-pointer px-3 py-1 rounded-md font-bold text-lg transition-colors duration-200 ${
                selectedLoan === el
                  ? "underline"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedLoan(el)}
            >
              {el}
            </div>
          ))}
        </div>
      </div>

      {/* Status Filter */}
      <div className="flex gap-4 flex-wrap">
        {statusFilter.map((el) => (
          <div
            key={el}
            className={`cursor-pointer px-3 py-1 rounded-md font-bold text-lg transition-colors duration-200 ${
              selectedStatus === el
                ? "underline"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedDetail(el)}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeadsFilter;
