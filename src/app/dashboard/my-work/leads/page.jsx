import React from "react";
import AdminStatusCard from "@/components/dashboardComponents/AdminBoard/AdminStatusCard";
import CustomFilterDemo from "@/components/dashboardComponents/AdminBoard/DataTable";
import LeadsComponent from "@/components/dashboardComponents/Leads/LeadsComponent";

export default function Leads() {
  const statuses = [
    { label: "Filed", count: 0, showIcon: true },
    { label: "Pending", count: 0, showIcon: true },
    { label: "Approved", count: 0, showIcon: true },
    { label: "ABND", count: 0, showIcon: true },
    { label: "Disbursed", count: 0, showIcon: true },
  ];

  return (
    <div className="flex flex-col justify-center p-4 gap-7">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 w-full ">
        <AdminStatusCard title="My Performance" statuses={statuses} />
        <AdminStatusCard title="Overall Performance" statuses={statuses} />
      </div>
      <LeadsComponent />
    </div>
  );
}
