import Button from "@/components/Button";
import InputFloating from "@/components/InputFloating";
import { createBackLogs } from "@/hooks/useBacklogs";
import React, { useState } from "react";

function AddBackLog({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { mutate: create } = createBackLogs();

  if (!isOpen) return null;

  const handleAdd = () => {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 absolute top-5">
        {/* Modal header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="text-md font-medium">Add BackLog</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <div>
              <InputFloating
                //    value={name}
                //    onChange={setName}
                placeholder="Name"
                type="text"
                maxLength={10}
                required
                className="w-full"
              />
            </div>
            <div>
              <InputFloating
                //    value={hostname}
                //    onChange={setHostname}
                placeholder="Mobile"
                type="text"
                required
                className="w-full"
              />
            </div>
          </div>
          <div className="self-start">
            <Button label={"Add"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBackLog;
