"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ManualEntry from "@/components/ManualEntry";
import { bankComparisonData } from "@/dummyData/bankData";
import UploadDocumentModal from "@/components/Leads/UploadDocumentModal";
import FollowUpModal from "@/components/Leads/FollowUpModal";
import ShareModal from "@/components/Leads/ShareModal";
import PassOnModal from "@/components/Leads/PassOnModal";
import Notes from "@/components/Leads/Notes";
import CustomEditor from "@/components/dashboardComponents/ColdCalling/Editor";
import CustomerDetailsEditModal from "@/components/Leads/CustomerDetailsEditModal";
import InputFloating from "@/components/InputFloating";
import CustomDropdown from "@/components/CustomDropdown";
import { getLeadDetails, updateLead } from "@/hooks/useLeads";
import Spinner from "@/components/Spinner";
import { useProducts } from "@/hooks/useApi";

const customer = {
  name: "AKASH MATHAPATI",
  leadStatus: "CustomerDiscussion",
  mobile: "9632123318",
};

const actions = [
  { icon: "/assets/chat.png", label: "Chat" },
  { icon: "/assets/upload-document.png", label: "Upload Document" },
  { icon: "/assets/follow-up-icon.png", label: "Follow Up" },
  { icon: "/assets/share.png", label: "Share" },
  { icon: "/assets/assign.png", label: "Pass On" },
  {
    icon: "/assets/connector.png",
    label: "Connector",
    imgStyle: "bg-black",
  },
  { icon: "/assets/image-preview.png", label: "Watch" },
  {
    icon: "/assets/analyser.png",
    label: "Analyser",
    imgSize: "w-[25px] h-[25.5px]",
  },
];

// Dummy data for dropdowns
let products = [
  { value: 1, name: "Personal Loan" },
  { value: 2, name: "Business Loan" },
  { value: 3, name: "Home Loan" },
  { value: 4, name: "Vehicle Loan" },
];

const locations = [
  { value: 1, name: "Mumbai (Mumbai)" },
  { value: 2, name: "Delhi (Delhi)" },
  { value: 3, name: "Bangalore (Bangalore)" },
  { value: 4, name: "Chennai (Chennai)" },
];

const tiers = [
  { value: 1, name: "Tier 1" },
  { value: 2, name: "Tier 2" },
  { value: 3, name: "Tier 3" },
];

export default function CustomerDetails() {
  const [formData, setFormData] = useState({});

  const [isManualEntryOpen, setIsManualEntryOpen] = useState(false);
  const [documentModal, setDocumentModal] = useState(false);
  const [followUpModal, setFollowUpModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [passOnModal, setPassOnModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [productId, setProductId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [tierId, setTierId] = useState("");

  const params = useParams();
  const Id = params.leadId;
  const { data, error, isLoading } = getLeadDetails(Id);
  // const { data: product } = useProducts();
  const { mutate, isPending } = updateLead(Id);
  const handleUpdate = (params) => {
    mutate(params);
  };

  useEffect(() => {
    setFormData(data);
  }, [data]);

  if (isLoading) return <Spinner className={"w-20 h-20 border-t-5 border-2"} />;

  const handleActionClick = (label) => {
    switch (label) {
      case "Upload Document":
        setDocumentModal(true);
        break;
      case "Follow Up":
        setFollowUpModal(true);
        break;
      case "Share":
        setShareModal(true);
        break;
      case "Pass On":
        setPassOnModal(true);
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFloatingChange = (fieldName) => (value) => {
    handleChange({ target: { name: fieldName, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="space-y-4">
      {/* Customer Details Section */}
      <div className="flex flex-col gap-3 sm:gap-5  p-3 sm:p-4 md:p-6 ">
        {/* Customer Info Row */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-20 justify-start">
          <div className="flex flex-col items-start sm:items-center gap-1">
            <div className="flex items-center gap-2">
              <span className="font-normal text-gray-600 text-sm">
                Customer Name
              </span>
              <img
                onClick={() => setEditModal(true)}
                src="/assets/edit-button.png"
                alt="Edit"
                className="w-3 h-3 sm:w-4 sm:h-4 inline cursor-pointer"
              />
            </div>
            <p className="text-gray-700 text-sm font-medium">
              {formData?.leadname}
            </p>
          </div>
          <div>
            <span className="font-normal text-gray-600 text-sm">
              Lead Status
            </span>
            <p className="text-blue-600 bg-blue-100 px-2 py-1 rounded-md font-medium mb-0 text-xs sm:text-sm">
              {formData?.lead_status}
            </p>
          </div>
          <div className="flex flex-col">
            <span className="font-normal text-gray-600 text-sm">
              Mobile Number
            </span>
            <p className="font-medium text-gray-700 text-sm">
              {formData?.phone_number}
            </p>
          </div>
          <ManualEntry
            isOpen={isManualEntryOpen}
            onClose={() => setIsManualEntryOpen(false)}
          />
          <UploadDocumentModal
            isOpen={documentModal}
            onClose={() => setDocumentModal(false)}
          />
          <FollowUpModal
            isOpen={followUpModal}
            onClose={() => setFollowUpModal(false)}
          />
          <ShareModal
            isOpen={shareModal}
            onClose={() => setShareModal(false)}
          />
          <PassOnModal
            isOpen={passOnModal}
            onClose={() => setPassOnModal(false)}
          />
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-3">
          {actions.map(({ icon, label, imgStyle = "", imgSize = "" }, idx) => (
            <div key={label} className="relative group">
              <button
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white border border-gray-400 rounded hover:bg-gray-100 transition text-xs sm:text-sm font-medium"
                type="button"
                onClick={() => handleActionClick(label)}
              >
                <img
                  src={icon}
                  alt={label}
                  width={20}
                  height={20}
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${imgStyle} ${imgSize}`}
                />
                <span className="hidden sm:inline">{label}</span>
              </button>
              {/* Tooltip for mobile */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none sm:hidden z-10 whitespace-nowrap">
                {label}
                {/* Tooltip arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-xl">
            <tbody>
              <tr className="border border-gray-300 rounded-xl">
                <td className="bg-gray-50 font-bold text-gray-700 px-4 py-3 text-xs sm:text-base border border-gray-300 rounded-lg">
                  Bank
                </td>
                <td className="bg-gray-50 px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-lg">
                  {/* Bank value can be added here */}
                </td>
                <td className="bg-gray-50 font-bold text-gray-700 px-4 py-3 text-xs sm:text-base border border-gray-300 rounded-lg">
                  Corporate
                </td>
                <td className="bg-gray-50 px-4 py-3 text-xs font-light border border-gray-300 rounded-lg">
                  CAPINEX ()
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead Form */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Products Dropdown */}
            <div className="relative">
              <CustomDropdown
                label="Products"
                options={products}
                value={productId}
                onChange={setProductId}
                className="w-full"
              />
            </div>

            {/* Required Amount */}
            <div>
              <InputFloating
                label="Required Amount*"
                type="number"
                value={formData?.required_amount}
                onChange={handleInputFloatingChange("required_amount")}
                className="w-full"
              />
            </div>

            {/* Expected Tenure */}
            <div>
              <InputFloating
                label="Exp Tenure(In Months)*"
                // name="firstName"
                type="number"
                value={formData?.expected_tenure}
                onChange={handleInputFloatingChange("expected_tenure")}
                className="w-full"
              />
            </div>

            {/* Net Salary */}
            <div>
              <InputFloating
                label="Net Salary*"
                type="number"
                value={formData?.net_salary}
                onChange={handleInputFloatingChange("net_salary")}
                className="w-full"
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {/* Corporate */}
            <div>
              <InputFloating
                label="Corporate"
                type="text"
                value={formData?.corporate}
                onChange={handleInputFloatingChange("corporate")}
                className="w-full"
              />
            </div>

            {/* Current Obligations */}
            <div>
              <InputFloating
                label="Current Obligations"
                type="text"
                value={formData?.current_obligations}
                onChange={handleInputFloatingChange("current_obligations")}
                className="w-full"
              />
            </div>

            {/* Credit Score */}
            <div>
              <InputFloating
                label="Credit Score"
                type="text"
                value={formData?.credit_score}
                onChange={handleInputFloatingChange("credit_score")}
                className="w-full"
              />
            </div>

            {/* Tier Dropdown */}
            <div className="relative">
              <CustomDropdown
                label="Tier"
                options={tiers}
                value={tierId}
                onChange={setTierId}
                className="w-full"
              />
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <CustomDropdown
                label="Locations"
                options={locations}
                value={locationId}
                onChange={setLocationId}
                className="w-full"
              />
            </div>

            {/* Get Commercials Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-black text-white font-medium py-2 px-6 rounded-md transition duration-200"
              >
                Get Commercials
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Bank Comparison Table */}
      <div className="mt-6 shadow-lg p-4">
        <div className="bank-container mt-2 space-y-3">
          <table className="table backend-list-table w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-3 border-b border-gray-200 text-sm text-gray-700">
                  Bank
                </th>
                <th className="text-left p-3 border-b border-gray-200 text-sm text-gray-700">
                  Backend
                </th>
                <th className="text-left p-3 border-b border-gray-200 text-sm text-gray-700">
                  Category
                </th>
                <th className="text-left p-3 border-b border-gray-200 text-sm text-gray-700">
                  Corporate
                </th>
                <th className="text-right p-3 border-b border-gray-200 text-sm text-gray-700">
                  Loan Amount
                </th>
                <th className="text-right p-3 border-bborder-gray-200 text-sm text-gray-700">
                  Proposed Rate
                </th>
                <th className="text-left p-3 border-b border-gray-200 text-sm text-gray-700">
                  Loan Account
                </th>
                <th className="text-left p-3 border-b border-gray-200 text-sm text-gray-700">
                  Status
                </th>
                <th className="text-left p-3 border-b border-gray-200 text-sm text-gray-700"></th>
              </tr>
            </thead>
            <tbody>
              {bankComparisonData.map((bank) => (
                <tr key={bank.id} className="backend_New hover:bg-gray-50">
                  <td className="p-3 border-b-gray text-xs border-gray-100">
                    <span className="text-blue-600 font-medium">
                      {bank.bankName}
                    </span>
                  </td>
                  <td className="p-3 border-b-gray text-xs border-gray-100">
                    {bank.backend}
                  </td>
                  <td className="p-3 border-b-gray text-xs border-gray-100">
                    {bank.category}
                  </td>
                  <td className="p-3 border-b-gray text-xs border-gray-100">
                    {bank.corporate}
                  </td>
                  <td className="p-3 border-b-gray text-xs border-gray-100 text-right">
                    {bank.loanAmount}
                  </td>
                  <td className="p-3 border-b-gray text-xs border-gray-100 text-right">
                    {bank.proposedRate}
                  </td>
                  <td className="p-3 border-b-gray text-xs border-gray-100">
                    {bank.loanAccount}
                  </td>
                  <td className="p-3 border-b-gray text-xs border-gray-100">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {bank.status}
                    </span>
                  </td>
                  <td className="p-3 border-b-gray text-xs border-gray-100">
                    <div className="flex items-center space-x-4">
                      <img
                        src="/assets/kyc.png"
                        title="Click to initiate whatsapp with customer for application details and upload documents"
                        className="h-7 w-7 cursor-pointer hover:opacity-80"
                        alt="KYC"
                      />
                      <button className="px-3 py-1 text-sm rounded-md border-1 transition duration-200">
                        Withdraw
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className="flex justify-end mt-4">
            <div className="btn-ask space-x-3 border-b-gray py-5 px-3">
              <button
                onClick={() => setIsManualEntryOpen(true)}
                className="px-4 py-2  border-1 rounded-md text-sm font-bold text-black-150"
              >
                Manual Entry
              </button>
              <button className="px-4 py-2  text-white rounded-md text-sm font-semibold bg-black transition duration-200">
                Submit to Bank
              </button>
              <button
                style={{ backgroundColor: "#f99" }}
                className="px-4 py-2 text-sm rounded-md text-white"
              >
                Future Work
              </button>
            </div>
          </div>
        </div>

        {/* Bank Cards Section */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
            {bankComparisonData.map((bank) => (
              <div
                key={bank.id}
                className="bank-cards bg-white rounded-lg shadow-md border border-gray-200 p-5 relative"
              >
                <div className="absolute top-2 right-2">
                  <input
                    type="checkbox"
                    className="comparison w-4 h-4 text-green-350 rounded focus:ring-blue-500"
                  />
                </div>
                <h2 className="mb-4 text-center font-semibold text-gray-800">
                  {bank.bankName}
                </h2>

                <div>
                  <div>
                    <table className="w-full">
                      <tr className="bank-heading eligible-heading bg-green-250 p-2 rounded">
                        <td
                          colSpan="4"
                          className="text-left  font-semibold text-green-350 p-2"
                        >
                          BANK OPEN RATES
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="first-td border-b-gray text-sm font-semibold text-gray-700 py-2">
                          EMI
                        </td>
                        <td className="second-td border-b-gray text-right text-sm font-semibold text-gray-900">
                          {bank.cardData.emi}
                        </td>
                        <td className="first-td font-semibold text-gray-700  text-sm py-2">
                          PF
                        </td>
                        <td className="second-td  text-sm text-right font-semibold text-gray-900">
                          {bank.cardData.pf}
                        </td>
                      </tr>
                      <tr>
                        <td className="first-td text-sm font-semibold text-gray-700 py-2 border-b-gray">
                          ROI
                        </td>
                        <td className="second-td border-b-gray  text-sm text-right font-semibold text-gray-900">
                          {bank.cardData.roi}
                        </td>
                      </tr>
                      <tr>
                        <td className="first-td border-b-gray text-sm font-semibold text-gray-700 py-2">
                          Eligibility
                        </td>
                        <td className="second-td border-b-gray text-sm text-right font-semibold text-gray-900">
                          {bank.cardData.eligibility}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="w-1/5">
                    <button
                      style={{ border: "2px solid gray" }}
                      className="w-full text-black-150 font-semibold py-1 px-3 rounded-xl"
                    >
                      Select
                    </button>
                  </div>
                  <div className="w-3/5 flex justify-end space-x-2">
                    <img
                      src="/assets/schedule.png"
                      className="flip-img h-8 w-8 cursor-pointer hover:opacity-80"
                      alt="Schedule"
                    />
                    <img
                      src="/assets/flip.png"
                      className="flip-img h-8 w-8 cursor-pointer hover:opacity-80"
                      alt="Flip"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Notes & Editor  */}
      <div
        className="flex flex-col w-2/4 shadow-md p-4 rounded-lg"
        style={{ maxHeight: "400px" }}
      >
        <CustomEditor />
        <Notes />
        <CustomerDetailsEditModal
          customer={formData}
          isOpen={editModal}
          handleUpdate={handleUpdate}
          onClose={() => setEditModal(false)}
        />
      </div>
    </div>
  );
}
