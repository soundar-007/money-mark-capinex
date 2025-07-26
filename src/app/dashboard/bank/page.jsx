"use client";

import { useState } from "react";

const inital = [
  { id: 1, bankName: "HDFC Bank", status: "Disable" },
  { id: 3, bankName: "SBI", status: "Disable" },
  { id: 2, bankName: "ICICI Bank", status: "Disable" },
  { id: 6, bankName: "Punjab National Bank", status: "Disable" },
  { id: 4, bankName: "Axis Bank", status: "Disable" },
  { id: 5, bankName: "Kotak Mahindra", status: "Disable" },
  { id: 9, bankName: "Union Bank", status: "Disable" },
  { id: 7, bankName: "Bank of Baroda", status: "Disable" },
  { id: 8, bankName: "Canara Bank", status: "Disable" },
  { id: 10, bankName: "Yes Bank", status: "Disable" },
  { id: 12, bankName: "IndusInd Bank", status: "Disable" },
  { id: 11, bankName: "IDFC First Bank", status: "Enable" },
  { id: 14, bankName: "Federal Bank", status: "Disable" },
  { id: 13, bankName: "RBL Bank", status: "Enable" },
  { id: 15, bankName: "Bandhan Bank", status: "Enable" },
];
function BankPage() {
  const [bankData, setBankData] = useState(inital);

  const toggleStatus = (id) => {
    setBankData(
      bankData.map((bank) =>
        bank.id === id
          ? { ...bank, status: bank.status === "Enable" ? "Disable" : "Enable" }
          : bank
      )
    );
  };

  return (
    <div className=" p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 max-w-7xl mx-auto ">
        {bankData.map((bank) => (
          <div
            key={bank.id}
            className={`bg-white border-2 ${
              bank.status === "Enable" ? "border-red-350" : "border-green-350"
            } rounded-lg p-4 flex flex-col items-center justify-between gap-3  transition duration-300 transform hover:-translate-y-1 hover:shadow-lg `}
          >
            <div className="flex items-center gap-2 text-lg font-bold ">
              <i className="bx bxs-bank text-2xl"></i>
              <span>{bank.bankName}</span>
            </div>
            <button
              onClick={() => toggleStatus(bank.id)}
              className={`flex items-center gap-2 px-6 py-1 rounded-3xl text-sm font-semibold  transition-colors duration-200 ${
                bank.status === "Enable"
                  ? "bg-gray-200  text-black-150 hover:bg-gray-300"
                  : "bg-green-250  text-green-350 font-semibold"
              }`}
            >
              <i
                class={`bx bxs-toggle-${
                  bank.status === "Enable" ? "left" : "right"
                } text-lg `}
              ></i>{" "}
              {bank.status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BankPage;
