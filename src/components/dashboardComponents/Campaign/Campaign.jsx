import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import CampaignCard from "./CampaignCard";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

const dummyData = [
  {
    id: 1,
    title: "I8H (HINDI_WFH) | MC",
    gateway: "g006(5)",
    status: "CALLING",
    timestamp: "08/07/2025 15:47",
    totalCalls: 3992,
    activeCalls: 244,
    completedCalls: 3445,
    runnerStatus: "Runner Queued",
    stats: {
      Leads: 1,
      CNA: 124,
      "Not Interested": 14,
      "Call Backs": 1,
      "Wrong Number": 1,
      "Hang Ups": 1,
      "Language Barrier": 1,
      "Low Cibil": 1,
      RNR: 1,
    },
    extrapolation: ["50", "150", "250", "100", "250", "+50"],
  },
  {
    id: 2,
    title: "I9B (TAMIL_WFO) | MO",
    gateway: "g007(3)",
    status: "IDLE",
    timestamp: "08/07/2025 14:30",
    totalCalls: 2100,
    activeCalls: 160,
    completedCalls: 1120,
    runnerStatus: "No Runner",
    stats: {
      Leads: 2,
      CNA: 112,
      "Not Interested": 9,
      "Call Backs": 2,
      "Wrong Number": 1,
      "Hang Ups": 2,
      "Language Barrier": 0,
      "Low Cibil": 3,
      RNR: 0,
    },
    extrapolation: ["60", "100", "200", "80", "180", "+40"],
  },
  {
    id: 3,
    title: "I7Z (ENGLISH_WFH) | RA",
    gateway: "g002(8)",
    status: "CALLING",
    timestamp: "08/07/2025 13:15",
    totalCalls: 3450,
    activeCalls: 250,
    completedCalls: 2210,
    runnerStatus: "Runner Queued",
    stats: {
      Leads: 3,
      CNA: 200,
      "Not Interested": 11,
      "Call Backs": 4,
      "Wrong Number": 2,
      "Hang Ups": 3,
      "Language Barrier": 0,
      "Low Cibil": 1,
      RNR: 2,
    },
    extrapolation: ["70", "120", "220", "90", "160", "+60"],
  },
  {
    id: 4,
    title: "I6K (KANNADA_WFH) | MN",
    gateway: "g003(6)",
    status: "BREAK",
    timestamp: "08/07/2025 12:00",
    totalCalls: 1800,
    activeCalls: 100,
    completedCalls: 980,
    runnerStatus: "Break Time",
    stats: {
      Leads: 1,
      CNA: 80,
      "Not Interested": 5,
      "Call Backs": 1,
      "Wrong Number": 0,
      "Hang Ups": 0,
      "Language Barrier": 0,
      "Low Cibil": 2,
      RNR: 1,
    },
    extrapolation: ["40", "100", "180", "60", "140", "+30"],
  },
  {
    id: 5,
    title: "I5P (TELUGU_WFO) | TR",
    gateway: "g004(4)",
    status: "CALLING",
    timestamp: "08/07/2025 11:45",
    totalCalls: 3000,
    activeCalls: 200,
    completedCalls: 1160,
    runnerStatus: "Runner Queued",
    stats: {
      Leads: 2,
      CNA: 100,
      "Not Interested": 8,
      "Call Backs": 3,
      "Wrong Number": 1,
      "Hang Ups": 2,
      "Language Barrier": 1,
      "Low Cibil": 1,
      RNR: 2,
    },
    extrapolation: ["55", "130", "+45"],
  },
];

const tabConfig = {
  Active: {
    statusColor: "text-blue-500 bg-blue-100",
    buttons: [
      { label: "Pause", icon: "pi pi-pause", className: "border-gray-600" },
      {
        label: "Stop",
        icon: "pi pi-ban",
        className: "border-red-500 text-red-500",
      },
    ],
    showExtrapolation: true,
    data: dummyData,
    showHeader: false,
    showSide: false,
    backgroundColor: false,
  },
  Open: {
    statusColor: "text-red-500 bg-red-100",
    buttons: [
      {
        label: "Close",
        icon: "pi pi-ban",
        className: "border-red-500 text-red-500",
      },
      { label: "Traceback", icon: "pi pi-ban", className: "border-gray-600" },
      { label: "Restart", icon: "pi pi-refresh", className: "border-gray-600" },
    ],
    showExtrapolation: false,
    data: dummyData.map((item) => ({
      ...item,
      status: item.status === "CALLING" ? "STOPPED" : item.status,
      activeCalls: item.activeCalls < 0 ? item.activeCalls : -item.activeCalls,
      runnerStatus:
        item.id === 1
          ? "RETURN12"
          : item.id === 2
          ? "Uploading new data"
          : item.runnerStatus,
    })),
    showHeader: true,
    showSide: false,
    backgroundColor: true,
  },
  Completed: {
    statusColor: "text-green-600 bg-green-50",
    buttons: [
      { label: "Rerun", icon: "pi pi-play", className: "border-gray-600" },
    ],
    showExtrapolation: false,
    data: dummyData.map((item) => ({
      ...item,
      status: "COMPLETED",
    })),
    showSide: true,
    showHeader: false,
    backgroundColor: false,
  },
  "Data Lake": {
    is_separate: true,
    component: () => <DataLake />,
  },
};

// Header component for Open and Completed tabs
function TabHeader() {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex items-center gap-2">
        <button className="border-2 border-gray-800 px-2 rounded-lg">-</button>
        <h2 className="text-sm lg:text-lg">CAPNIEX</h2>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <h2 className="text-sm lg:text-lg">POSITIONS</h2>
        </div>
        <button className="border-2 border-gray-800 px-2 rounded-lg bg-blue-100 text-sm lg:text-lg">
          SUBMIT
        </button>
      </div>
    </div>
  );
}
function TabSide() {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex items-center gap-2">
        {/* <button className="border-2 border-gray-800 px-2 rounded-lg">-</button> */}
        {/* <h2 className="text-sm lg:text-lg">CAPNIEX</h2> */}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <h2 className="text-sm lg:text-lg">For Last</h2>
          <input
            value={"10"}
            className="border-2 border-black rounded-lg p-1"
            style={{ width: "50px" }}
          />
          <h2 className="text-sm lg:text-lg">Days</h2>
        </div>
        <button className="border-2 border-gray-800 px-2 rounded-lg bg-blue-100 text-sm lg:text-lg">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

// Main Campaign component
export default function Campaign({ activeIndex, setActiveIndex }) {
  const items = [
    { label: "Active" },
    { label: "Open" },
    { label: "Completed" },
    { label: "Data Lake" },
  ];

  const renderContent = () => {
    const selectedTab = tabConfig[items[activeIndex].label];
    if (selectedTab.is_separate) return selectedTab.component();

    return (
      <div
        className={`p-3 space-y-6 ${
          selectedTab.backgroundColor ? "bg-gray-100" : ""
        } rounded-lg`}
      >
        {selectedTab.showHeader && <TabHeader />}
        {selectedTab.showSide && <TabSide />}
        {selectedTab.data.map((item) => (
          <CampaignCard
            key={item.id}
            item={item}
            statusColor={selectedTab.statusColor}
            buttons={selectedTab.buttons}
            showExtrapolation={selectedTab.showExtrapolation}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="overflow-hidden">
      <div className="mt-2 ml-3 font-bold text-base">Runners</div>
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        className="mb-4"
      />
      {renderContent()}
    </div>
  );
}

function DataLake() {
  const [skipHeader, setSkipHeader] = useState(false);
  const dummyData = [
    {
      campaign: "H5H",
      status: "Dialer",
      totalRecords: 548,
      list: ["Mapping", "Assign", "Validate", "Assignment", "Assign Lead"],
    },
    {
      campaign: "SpringBoost24",
      status: "SMS",
      totalRecords: 1200,
      list: ["Import", "Validate", "Trigger SMS", "Follow-up"],
    },
    {
      campaign: "AutoGenX",
      status: "Email",
      totalRecords: 830,
      list: [
        "Mapping",
        "Email Template",
        "Send Campaign",
        "Track Opens",
        "Response Assignment",
      ],
    },
    {
      campaign: "Q3SalesPush",
      status: "WhatsApp",
      totalRecords: 670,
      list: ["Lead Sync", "Message Template", "Broadcast", "Reply Handling"],
    },
    {
      campaign: "YearEndPromo",
      status: "Dialer",
      totalRecords: 925,
      list: [
        "Lead Upload",
        "Validation",
        "Auto Assignment",
        "Calling",
        "Disposition",
      ],
    },
  ];

  return (
    <div className="  p-4 space-y-6">
      {/* Header */}
      <div className="w-full max-w-md border-2 border-gray-600 rounded-lg p-4 flex flex-col gap-4 bg-white shadow-sm">
        <InputText
          placeholder="Campaign Name"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="border-2 border-gray-500 border-dashed p-4 flex items-center justify-center text-gray-500 text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer">
          Drag & Drop Docs
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="skipHeader" />
          <label htmlFor="skipHeader" className="text-sm text-gray-600">
            Skip Header
          </label>
        </div>
        <button
          label="Upload"
          className="w-24 bg-primary text-white rounded-md hover:bg-black-600 p-2"
        >
          Upload
        </button>
      </div>

      {/* Placeholder for list of cards */}
      <div>
        <div className="space-y-4 p-2">
          {dummyData.map((item, index) => (
            <div
              key={item.campaign + index}
              className="relative w-full max-w-md p-4 flex flex-col gap-2 border-2 border-gray-300 rounded-lg bg-white shadow-sm"
            >
              <button
                style={{ top: "-3px" }}
                className="absolute right-0  text-gray-800 hover:text-red-500 text-lg font-bold"
              >
                &times;
              </button>
              <div className="flex justify-between items-center p-1">
                <div className="font-semibold text-sm text-gray-800">
                  Campaign: {item.campaign}
                </div>
                <div className="text-sm">
                  Status:
                  <span className="text-blue-500 font-medium">
                    {item.status}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Total Records: {item.totalRecords}
              </div>
              <div className="flex flex-wrap gap-2">
                {item.list.map((action, i) => (
                  <button className="text-xs bg-gray-100 border-2 border-gray-700 rounded-md px-3 py-1 hover:bg-gray-200 font-semibold">
                    {action}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
