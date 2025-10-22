import React, { useEffect, useRef } from "react";

function PopUp({ onClose }) {
  const popupRef = useRef(null);

    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popupRef}
      className="bg-white border border-gray-300 rounded shadow-lg w-48 py-2 flex flex-col text-sm"
    >
      <button className="py-1 px-2 hover:bg-gray-100 text-left">
        Call Barge
      </button>
      <button className="py-1 px-2 hover:bg-gray-100 text-left">Logout</button>
    </div>
  );
}

export default PopUp;
