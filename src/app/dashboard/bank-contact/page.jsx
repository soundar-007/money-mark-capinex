"use client";
import CustomDropdown from "@/components/CustomDropdown";
import InputFloating from "@/components/InputFloating";
import React, { useState } from "react";

export default function BankContact() {
  const [selectedBank, setSelectedBank] = useState("");
  const [name, setName] = useState("");
  const banks = [
    { name: "HDFC", value: "HDFC" },
    { name: "SBI", value: "SBI" },
    { name: "Indian", value: "Indian" },
    { name: "canara", value: "Manager" },
  ];
  return (
    <div className="w-full p-7">
      <div>
        <CustomDropdown
          label={"Select Bank *"}
          options={banks}
          value={selectedBank}
          onChange={setSelectedBank}
          className="w-full sm:w-1/4  "
        />
      </div>
      <div className="mt-5 flex gap-4 flex-wrap md:flex-nowrap">
        <InputFloating
          label={"Name *"}
          value={name}
          onChange={(value) => setName(value)}
          className="w-full sm:w-1/4"
        />
        <InputFloating
          label={"Mobile *"}
          value={name}
          onChange={(value) => setName(value)}
          className="w-full sm:w-1/4"
        />
        <InputFloating
          label={"Email *"}
          value={name}
          onChange={(value) => setName(value)}
          className="w-full sm:w-1/4"
        />
        <InputFloating
          label={"Designation"}
          value={name}
          onChange={(value) => setName(value)}
          className="w-full sm:w-1/4"
        />
        <div>
        <button className="bg-primary text-white rounded px-4 py-2 font-semibold">
          Submit
        </button>
        </div>
      
      </div>
    </div>
  );
}
