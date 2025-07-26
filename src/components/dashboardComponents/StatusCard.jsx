"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

const StatusCard = ({
  title,
  imageUrl,
  options,
  placeholder,
  defaultText,
  children,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="bg-white p-6 md:p-10 rounded-lg statuscard-shadow">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-16">
        <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-0 border-b-2 border-gray-400">
          {title}
        </h3>
        <Dropdown
          value={selectedOption}
          options={options.map((opt) => ({ label: opt, value: opt }))}
          onChange={(e) => setSelectedOption(e.value)}
          placeholder={placeholder}
          className="w-full md:w-40"
        />
      </div>
      <div className="flex flex-col items-center mb-2">
        {children || (
          <>
            {" "}
            <img
              alt={`${title} Icon`}
              height="100"
              src={imageUrl}
              width="100"
              className="mb-4"
            />
            <p className="text-gray-400 text-center">{defaultText}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default StatusCard;
