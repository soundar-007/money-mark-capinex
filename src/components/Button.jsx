import React from "react";

function Button({ label, className = "", onClick, disabled = false }) {
  return (
    <button
      className={`bg-primary text-white rounded px-4 py-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
