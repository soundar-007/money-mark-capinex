import { useState } from "react";

// Dummy API data
const permissionsData = {
  userInfo: [],
  permissions: [
    { permission: "menu_lead_admin", description: "Lead Admin", bit: false },
    { permission: "menu_lead", description: "Lead", bit: true },
    { permission: "menu_dialer", description: "Dialer", bit: false },
    {
      permission: "menu_backend_processing",
      description: "Backend Processing",
      bit: false,
    },
    { permission: "menu_campaign", description: "Campaign", bit: false },
    { permission: "menu_connector", description: "Connector", bit: false },
    {
      permission: "menu_bank_contact",
      description: "Bank Contact",
      bit: false,
    },
    { permission: "menu_backlog", description: "Backlog", bit: true },
    { permission: "menu_missed_calls", description: "Missed Calls", bit: true },
    { permission: "menu_user_administration", description: "HR", bit: false },
    { permission: "backend_admin", description: "Backend Admin", bit: false },
    { permission: "menu_admin_board", description: "Admin Board", bit: false },
    { permission: "settlement", description: "Settlement", bit: false },
    { permission: "template", description: "Template", bit: false },
    { permission: "tutorials", description: "Tutorials", bit: false },
    { permission: "download", description: "Download", bit: false },
    {
      permission: "lead_commercials",
      description: "Get Commercials",
      bit: true,
    },
    { permission: "lead_share_lead", description: "Share Lead", bit: false },
    { permission: "lead_reassign", description: "Lead Pass on", bit: false },
    { permission: "lead_connector", description: "Lead Connector", bit: false },
    { permission: "lead_whatsapp", description: "Whatsapp KYC", bit: true },
    { permission: "lead_transfer", description: "Lead Transfer", bit: false },
    {
      permission: "datalake",
      description: "DataLake(Excel upload)",
      bit: false,
    },
    { permission: "monitoring", description: "Agent Monitoring", bit: true },
  ],
  backend: [],
  // dailer: []
};

const TABS = [
  { key: "permissions", label: "User Permissions" },
  { key: "backend", label: "Backend Permissions" },
  { key: "dailer", label: "Dialer" },
];

export default function Permissions() {
  const [activeTab, setActiveTab] = useState("permissions");

  const tabContent = permissionsData[activeTab] || [];

  return (
    <div className="mt-10 max-w-8xl mx-auto border">
      {/* Tabs */}
      <div className="flex bg-gray-200 rounded overflow-hidden">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 p-3 font-semibold transition ${
              activeTab === tab.key ? "bg-gray-700 text-white" : "bg-gray-200"
            } border-b-2 border-indigo-100`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="p-6 border rounded border-gray-200 bg-white min-h-[150px]">
        {tabContent.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {tabContent.map((perm, i) => (
              <label key={perm.permission} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  defaultChecked={perm.bit}
                />
                {perm.description}
              </label>
            ))}
          </div>
        ) : (
          <div className="text-gray-500 py-8 text-center">
            No permissions set for this tab.
          </div>
        )}
      </div>
    </div>
  );
}
