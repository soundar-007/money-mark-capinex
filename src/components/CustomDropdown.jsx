"use client";
import React, { useState } from "react";

const CustomDropdown = ({
  label,
  options,
  value,
  onChange,
  className = "w-full sm:w-1/2", // Default width
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative border border-gray-400 rounded ${className}`}>
      {/* Floating Label */}
      <label
        className={`absolute left-3 transition-all pointer-events-none px-1 bg-white ${
          isFocused || value ? "text-xs -top-2 text-primary-light" : "text-gray-700 top-2"
        }`}
      >
        {label}
      </label>

      {/* Dropdown with Flexbox */}
      <div className="flex items-center mt-1">
        <select
          className="w-full  rounded-md py-2 px-3 focus:outline-none bg-white appearance-none"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setIsOpen(false);
          }}
          onFocus={() => {
            setIsFocused(true);
            setIsOpen(true);
          }}
          onBlur={() => {
            setIsFocused(value !== "");
            setIsOpen(false);
          }}
        >
          <option value="" hidden></option>
          {options?.map((option, index) => (
            <option
              key={index}
              value={option.value}
              disabled={option.value === ""}
            >
              {option.name}
            </option>
          ))}
        </select>

        {/* Dropdown Icon */}
        <i
          className={`bx ${
            isOpen ? "bxs-up-arrow" : "bxs-down-arrow"
          } text-gray-500 pointer-events-none transition-all text-sm mr-2`}
        ></i>
      </div>
    </div>
  );
};

export default CustomDropdown;

