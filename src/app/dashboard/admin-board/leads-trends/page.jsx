import React from "react";
import AdminStatusCard from "@/components/dashboardComponents/AdminBoard/AdminStatusCard";
import CustomFilterDemo from "@/components/dashboardComponents/AdminBoard/DataTable";

export default function AdminBoard() {
  const statuses = [
    { label: "New", count: 0 },
    { label: "Filed", count: 0 },
    { label: "Approved", count: 0 },
    { label: "Disbursed", count: 0, showIcon: true },
    { label: "Rejected", count: 0, showIcon: true },
  ];

  return (
    <div className="flex flex-col justify-center p-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-2 w-full ">
      <AdminStatusCard title="Today" statuses={statuses} />
      <AdminStatusCard title="Yesterday" statuses={statuses} />
      <AdminStatusCard title="Month " statuses={statuses} />
      <AdminStatusCard title="Last Month" statuses={statuses} />
      </div>

   <CustomFilterDemo/>
  
    </div>
  );
}
