import React, { useRef, useState } from "react";

function Otp({ length = 4, className = "", handleOnChange, mask = false }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRef = useRef([]);

  const handleChange = (e, idx) => {
    const val = e.target.value;
    if (!/^\d?$/.test(val)) return;

    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);

    if (val && idx < length - 1) {
      inputRef.current[idx + 1].focus();
    }

    if (handleOnChange) handleOnChange(newOtp.join(""));
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];

      if (newOtp[idx]) {
        newOtp[idx] = "";
        setOtp(newOtp);
        if (handleOnChange) handleOnChange(newOtp.join(""));
      } else if (idx > 0) {
        inputRef.current[idx - 1].focus();
        newOtp[idx - 1] = "";
        setOtp(newOtp);
        if (handleOnChange) handleOnChange(newOtp.join(""));
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      inputRef.current[idx - 1].focus();
    } else if (e.key === "ArrowRight" && idx < length - 1) {
      inputRef.current[idx + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").trim();

    if (!/^\d+$/.test(pasteData)) {
      return;
    }

    const pasteArray = pasteData.split("").slice(0, length);
    const newOtp = [...otp];
    for (let i = 0; i < pasteArray.length; i++) {
      newOtp[i] = pasteArray[i];
    }
    setOtp(newOtp);
    if (handleOnChange) handleOnChange(newOtp.join(""));

    const lastIndex = Math.min(pasteArray.length - 1, length - 1);
    inputRef.current[lastIndex].focus();
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      {otp.map((num, idx) => (
        <input
          key={idx}
          type={mask ? "password" : "text"}
          maxLength={1}
          value={num}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          onPaste={handlePaste}
          ref={(el) => (inputRef.current[idx] = el)}
          className="w-12 h-12 text-center border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-150"
          aria-label={`Digit ${idx + 1}`}
        />
      ))}
    </div>
  );
}

export default Otp;
