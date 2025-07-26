"use client";
import React, { useState } from "react";
import CustomDropdown from "@/components/CustomDropdown";
import { Button } from "primereact/button";
import InputFloating from "@/components/InputFloating";
export default function SIMMap() {
  const [selectedBank, setSelectedBank] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const banks = [
    { name: "g004", value: "g004" },
    { name: "g005", value: "g005" },
    { name: "m002", value: "m002" },
  ];

  const simBlocks = Array.from({ length: 24 }, (_, i) => {
    const id = `g004_${i.toString().padStart(2, "0")}`;
    const number = `300321${i.toString().padStart(2, "0")}`;
    const status = i < 6 ? (i === 6 ? "warning" : "error") : "ok";
    return { id, number, status, lastCheck: `19/06/2025 19:${48 + i}` };
  });

  const getStatusClass = (status) => {
    switch (status) {
      case "error":
        return "bg-red-100 border border-red-300";
      case "warning":
        return "bg-yellow-100 border border-yellow-300";
      default:
        return "bg-gray-100 border";
    }
  };

  return (
    <div className="w-full border-2 rounded-md p-5 space-y-4">
      <div className="flex flex-wrap gap-4 items-center">
        <CustomDropdown
          label={"Select Gateway *"}
          options={banks}
          value={selectedBank}
          onChange={setSelectedBank}
          className="w-full sm:w-1/5"
        />

        {selectedBank && (
          <>
            <InputFloating
              label={"Mobile *"}
              value={mobileNumber}
              onChange={(val) => setMobileNumber(val)}
              className="w-full sm:w-1/5"
            />
            <Button label="Run SIM Test" className="sm:w-1/5 border rounded-md p-3 border-black" />
          </>
        )}
      </div>

      {selectedBank && (
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          {simBlocks.map((block, index) => (
            <div
              key={index}
              className={` rounded-md border shadow-sm`}
            >
              <div className={`flex justify-between p-1 ${getStatusClass(block.status)}`}>
<div className="font-semibold">{block.id}</div>
              <div className="text-sm">{block.number}</div>
              </div>
              
              {block.status !== "ok" && (
                <div className="text-xs text-gray-600 mt-1">
                  Last Check On: {block.lastCheck}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
