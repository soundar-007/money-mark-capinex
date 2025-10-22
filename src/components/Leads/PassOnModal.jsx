import React from 'react'
import Button from '../Button';
import CustomDropdown from '../CustomDropdown';

function PassOnModal({isOpen,onClose}) {
  if (!isOpen) return null;

  const handleAdd = () => {};
    const options = [
      {
        name: "Zara",
        value: 2,
      },
      {
        name: "Manic",
        value: 1,
      },
      {
        name: "Krim",
        value: 4,
      },
    ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 absolute top-5">
        {/* Modal header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="text-md font-medium">Assign To</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <CustomDropdown
            placeholder={"Assigned To"}
            label={"Assigned To"}
            options={options}
          />
          <Button className="self-end" label={"Assign"} />
        </div>
      </div>
    </div>
  );
}

export default PassOnModal