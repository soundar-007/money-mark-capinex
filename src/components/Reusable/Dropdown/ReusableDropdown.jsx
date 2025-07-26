import { useState } from "react";

export function ReusableDropdown({ label, options }) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isFloating = isFocused || value;

  return (
    <div className="relative w-56">
      <select
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id="floating-select"
        className={`block appearance-none w-full bg-transparent border border-gray-400 rounded px-2 py-2 pt-3 pb-1 text-gray-900 focus:outline-none  focus:border-black-text   ${
          !value ? "text-gray-600" : "text-gray-900"
        }`}
      >
        <option value="" disabled></option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.label}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Floating label */}
      <label
        htmlFor="floating-select"
        className={`absolute left-3 transition-all duration-200
          pointer-events-none
          ${
            isFloating
              ? "-top-3 text-s  bg-white px-1"
              : "top-2.5 text-gray-700 text-xs"
          }`}
      >
        {label}
      </label>

      {/* Down arrow icon */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
          className="h-4 w-4 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
