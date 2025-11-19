"use client";

import InputFloating from "@/components/InputFloating";
import UploadDocumentModal from "@/components/Leads/UploadDocumentModal";
import {
  AtSignIcon,
  ChevronDown,
  DownloadIcon,
  EditIcon,
  MenuIcon,
  Trash2Icon,
  UploadCloudIcon,
} from "lucide-react";
import React, { useState } from "react";
import EmailModal from "./EmailModal";
import { useFinalLoan, useUpdateStatus } from "@/hooks/useBackendProcess";

const statusMapping = {
  Documentation: {
    btn: "Submit to bank",
    status: "Filed",
  },
  Filed: {
    btn: "Approve",
    status: "Approved",
  },
  Approved: {
    btn: "Disburse",
    status: "Disbursed",
  },
};

function downloadFile(fileUrl, fileName) {
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName || "";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const BorrowerDetailsCard = ({borrower}) => {
  if(!borrower) return


  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [formData, setFormData] = useState({
    loan_account_number: borrower.loan_account_number,
    final_loan_amount: borrower.final_loan_amount,
    final_rate: borrower.final_rate,
    final_tenure: borrower.final_tenure,
    final_emi: borrower.final_emi,
  });
  const {mutate} = useFinalLoan(borrower.id)
  const {mutate:changeStatus,isPending:statusLoading} = useUpdateStatus(borrower.id)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFloatingChange = (name) => (value) => {
    handleChange({ target: { name, value } });
  };

  const [isUploadDocumentModalOpen, setIsUploadDocumentModalOpen] =
    useState(false);

  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleTab = (tab) => {
    setSelectedTab(tab);
  };

  const handleUpdateFinal = ()=>{
    mutate(formData)
  }
  const handleUpdateStatus = ()=>{
    const param = {
      backend_status:statusMapping[borrower?.lead_backend_status]?.status
    }
 
    changeStatus(param)
  }

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      {/* Header Row */}
      <div className="flex border-b border-gray-200 mb-4 items-center">
        <UploadDocumentModal
          leadId={borrower?.lead}
          isOpen={isUploadDocumentModalOpen}
          onClose={() => setIsUploadDocumentModalOpen(false)}
        />
        <div
          onClick={() => handleTab("tab1")}
          className={`w-1/4 font-semibold border-b mt-4 pb-2 cursor-pointer text-center ${
            selectedTab == "tab1" ? " border-black" : ""
          }`}
        >
          Borrower Details
        </div>
        <div
          onClick={() => handleTab("tab2")}
          className={`w-1/4 font-semibold border-b mt-4 pb-2 cursor-pointer text-center ${
            selectedTab == "tab2" ? " border-black" : ""
          }`}
        >
          Documents ({borrower?.lead_documents?.length || 0})
        </div>
        {selectedTab == "tab1" && (
          <div className="w-1/2 flex justify-end items-center gap-3 pt-2">
            {/* Submit to bank + dropdown */}
            <div className="relative">
              <button
                disabled={statusLoading}
                onClick={() => handleUpdateStatus()}
                className="bg-black text-xs font-semibold text-white px-3 py-1 rounded inline-flex items-center space-x-2"
                type="button"
              >
                <span>{statusMapping[borrower?.lead_backend_status]?.btn}</span>
                <ChevronDown
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen1((v) => !v);
                  }}
                />
              </button>
              {menuOpen1 && (
                <div
                  className="absolute right-0 mt-1 bg-gray-100 border rounded shadow min-w-[80px] z-20"
                  onMouseLeave={() => setMenuOpen1(false)}
                >
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200 text-red-600">
                    Reject
                  </div>
                </div>
              )}
            </div>
            {/* Second Dropdown */}
            <div className="relative">
              <button
                className="inline-flex items-center px-2"
                onMouseEnter={() => setMenuOpen2((v) => true)}
                type="button"
              >
                <MenuIcon />
              </button>
              {menuOpen2 && (
                <div
                  className="absolute right-0 mt-1 bg-gray-100 border rounded shadow z-20 text-sm"
                  style={{ width: "140px" }}
                  onMouseLeave={() => setMenuOpen2(false)}
                >
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Backend Transfer
                  </div>
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Assign Bank Contact
                  </div>
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Lead
                  </div>
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Analyser
                  </div>
                  <div className="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center">
                    <img
                      src="/assets/whatsapp-kyc.png"
                      alt="kyc"
                      className="mr-1 w-5"
                    />{" "}
                    Start KYC
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {selectedTab == "tab2" && (
          <div className="w-1/2 flex justify-end items-center gap-3 pt-2">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => setIsUploadDocumentModalOpen(true)}
                className=" text-black px-3 py-1 rounded inline-flex items-center space-x-2 border-2"
              >
                <UploadCloudIcon className="w-4 h-4" /> <span>Upload</span>
              </button>
              <button
                onClick={() => setIsEmailModalOpen(true)}
                className="text-black px-3 py-1 rounded inline-flex items-center space-x-2 border-2"
              >
                <AtSignIcon className="w-4 h-4" /> <span>Email</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Borrower block */}
      {selectedTab == "tab1" && (
        <div>
          <div className="flex gap-2 items-center mb-4">
            <h2 className="text-xl font-semibold">{borrower?.leadname}</h2>
            <EditIcon />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 text-gray-700 text-sm">
            <div>
              <span className="font-semibold">Mobile:</span>{" "}
              {borrower?.phone_number}
            </div>
            <div>
              <span className="font-semibold">Amount Requested:</span>{" "}
              {borrower?.loan_amount}
            </div>
            <div>
              <span className="font-semibold">Gender:</span> {borrower?.gender}
            </div>
            <div>
              <span className="font-semibold">Proposed EMI:</span>{" "}
              {borrower?.proposed_emi}
            </div>
            <div>
              <span className="font-semibold">Proposed Rate:</span>{" "}
              {borrower?.proposed_rate}%
            </div>
            <div>
              <span className="font-semibold">Location:</span>{" "}
              {borrower?.location}
            </div>
            <div>
              <span className="font-semibold">Expected Tenure:</span>{" "}
              {borrower?.expected_tenure} months
            </div>
            <div>
              <span className="font-semibold">Net Salary:</span>{" "}
              {borrower?.net_salary}
            </div>
          </div>

          {/* Form Block */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 space-y-4 grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <InputFloating
              label="Loan Account No"
              value={formData.loan_account_number}
              onChange={handleInputFloatingChange("loan_account_number")}
              className="w-full mt-4"
            />
            <InputFloating
              label="Final Loan Amount"
              value={formData.final_loan_amount}
              onChange={handleInputFloatingChange("final_loan_amount")}
              className="w-full"
            />
            <InputFloating
              label="Final Rate"
              value={formData.final_rate}
              onChange={handleInputFloatingChange("final_rate")}
              className="w-full"
            />
            <InputFloating
              label="Final Tenure"
              value={formData.final_tenure}
              onChange={handleInputFloatingChange("final_tenure")}
              className="w-full"
            />
            <InputFloating
              label="EMI"
              className="w-full"
              value={formData.final_emi}
              onChange={handleInputFloatingChange("final_emi")}
            />
            {/* <Button className="bg-black-150" label="Update" /> */}
            {["Documentation,Filed"].includes(borrower.lead_backend_status) && (
              <button onClick={handleUpdateFinal} className="bg-gray-300">
                Update
              </button>
            )}
          </form>
        </div>
      )}
      {selectedTab == "tab2" && (
        <div className="flex flex-col gap-3">
          {borrower.lead_documents?.map((doc, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 p-3 border rounded shadow-sm hover:bg-gray-50"
            >
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  {doc?.document_type_display} Proof
                </span>
              </div>

              <div className="flex gap-3">
               <DownloadIcon onClick={()=>downloadFile(doc.filename,doc.file_url)} className="text-blue-500 cursor-pointer"/>
                <Trash2Icon className="text-red-500"/>
              </div>
            </div>
          ))}
        </div>
      )}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </div>
  );
};

export default BorrowerDetailsCard;
