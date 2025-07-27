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

  const simPorts = [
    {
      portId: "g004_00",
      gatewayId: "g004",
      dialExtension: "30032100",
      assignedExtension: null,
      status: "Failed",
      mobileNumber: 23252525235,
      blocked: null,
      lastCheckDate: "19/06/2025 19:48",
      simChangeDate: "29/06/2025 19:48",
      message: "Failed to run the test",
    },
    {
      portId: "g004_01",
      gatewayId: "g004",
      dialExtension: "30032101",
      assignedExtension: null,
      status: "Failed",
      mobileNumber: 23525235235,
      blocked: null,
      lastCheckDate: "19/06/2025 19:49",
      simChangeDate: null,
      message: "Failed to run the test",
    },
    {
      portId: "g004_02",
      gatewayId: "g004",
      dialExtension: "30032102",
      assignedExtension: null,
      status: "Failed",
      mobileNumber: null,
      blocked: null,
      lastCheckDate: "19/06/2025 19:49",
      simChangeDate: null,
      message: "Failed to run the test",
    },
    {
      portId: "g004_03",
      gatewayId: "g004",
      dialExtension: "30032103",
      assignedExtension: null,
      status: "Failed",
      mobileNumber: 57486934,
      blocked: null,
      lastCheckDate: "19/06/2025 19:50",
      simChangeDate: "1/11/2025 19:48",
      message: "Failed to run the test",
    },
    {
      portId: "g004_04",
      gatewayId: "g004",
      dialExtension: "30032104",
      assignedExtension: null,
      status: "Failed",
      mobileNumber: null,
      blocked: null,
      lastCheckDate: "19/06/2025 19:50",
      simChangeDate: null,
      message: "Failed to run the test",
    },
    {
      portId: "g004_05",
      gatewayId: "g004",
      dialExtension: "30032105",
      assignedExtension: null,
      status: "Failed",
      mobileNumber: null,
      blocked: null,
      lastCheckDate: "19/06/2025 19:51",
      simChangeDate: null,
      message: "Failed to run the test",
    },
    {
      portId: "g004_06",
      gatewayId: "g004",
      dialExtension: "30032106",
      assignedExtension: null,
      status: "Failed",
      mobileNumber: 23424234234234,
      blocked: null,
      lastCheckDate: "19/06/2025 19:51",
      simChangeDate: "9/02/2024 19:48",
      message: "Failed to run the test",
    },
    {
      portId: "g004_07",
      gatewayId: "g004",
      dialExtension: "30032107",
      assignedExtension: null,
      status: "Failed",
      mobileNumber: null,
      blocked: null,
      lastCheckDate: "19/06/2025 19:52",
      simChangeDate: null,
      message: "Failed to run the test",
    },
    {
      portId: "g004_08",
      gatewayId: "g004",
      dialExtension: "30032108",
      assignedExtension: null,
      status: "Failed",
      mobileNumber: 98786345,
      blocked: null,
      lastCheckDate: "19/06/2025 19:52",
      simChangeDate: null,
      message: "Failed to run the test",
    },
    {
      portId: "g004_09",
      gatewayId: "g004",
      dialExtension: "30032109",
      assignedExtension: null,
      status: "Failed",
      mobileNumber: null,
      blocked: null,
      lastCheckDate: "19/06/2025 19:53",
      simChangeDate: null,
      message: "Failed to run the test",
    },
    {
      portId: "g004_10",
      gatewayId: "g004",
      dialExtension: "30032110",
      assignedExtension: null,
      status: "Failed",
      mobileNumber: null,
      blocked: null,
    },
  ];

  return (
    <div className="w-full border-2 rounded-md p-8 space-y-4">
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
            <Button
              label="Run SIM Test"
              className="sm:w-1/5 border rounded-md p-3 border-black"
            />
          </>
        )}
      </div>

      {selectedBank && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {simPorts.map((block) => (
            <div key={block.portId} className="rounded-md  shadow-sm ">
              <div
                className="flex justify-between p-1"
                style={{ backgroundColor: "#FDE8E8" }}
              >
                <div className="font-semibold">{block.portId}</div>
                <div className="text-sm">{block.dialExtension}</div>
              </div>
              <div className="p-2 text-xs text-gray-700 flex flex-col gap-1">
                {block.mobileNumber && (
                  <div className="mb-2">
                    <span className="font-semibold">Mobile:</span>{" "}
                    {block.mobileNumber}
                  </div>
                )}
                {block.lastCheckDate && (
                  <div>
                    <span className="font-semibold">Last Check On:</span>{" "}
                    {block.lastCheckDate}
                  </div>
                )}
                {block.simChangeDate && (
                  <div>
                    <span className="font-semibold">SIM Changed On:</span>{" "}
                    {block.simChangeDate}
                  </div>
                )}
                {block.blocked && (
                  <div>
                    <span className="font-semibold">Blocked:</span>{" "}
                    {block.blocked}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
