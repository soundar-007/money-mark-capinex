"use client";
import { ReusableDropdown } from "@/components/Reusable/Dropdown/ReusableDropdown";
import ReusableTable from "@/components/Reusable/Table/ReusableTable";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";

function BankStatementPage() {
  function generateMonthsArray(startYear, startMonth) {
    const months = [];
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const today = new Date();
    let year = startYear;
    let month = startMonth;
    let id = 1;

    while (
      year < today.getFullYear() ||
      (year === today.getFullYear() && month <= today.getMonth())
    ) {
      months.push({
        id: id++,
        label: `${monthNames[month]}-${year}`,
      });

      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
    }

    return months;
  }

  const months = generateMonthsArray(2024, 6);

  const products = [
    {
      id: 1,
      label: "Personal Loan",
    },
    {
      id: 1,
      label: "Housing Loan",
    },
    {
      id: 1,
      label: "Overdraft",
    },
    {
      id: 1,
      label: "Credit Card",
    },
    {
      id: 1,
      label: "Business Loan",
    },
  ];
  const tier = [
    {
      id: 1,
      label: "Prime",
    },
    {
      id: 2,
      label: "Emerging",
    },
  ];

  const [selectedMonth, setSelectedMonth] = useState(months[0]?.label || "");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedTier, setSelectedTier] = useState("");

  const dummyData = [
    {
      fromDate: "2024-01-01",
      toDate: "2024-01-31",
      bankName: "ABC Bank",
      tier: "Prime",
      location: "New York",
      fileCount: 12,
      disbursedAmount: 150000,
    },
    {
      fromDate: "2024-02-01",
      toDate: "2024-02-28",
      bankName: "XYZ Bank",
      tier: "Emerging",
      location: "Los Angeles",
      fileCount: 8,
      disbursedAmount: 82000,
    },
    {
      fromDate: "2024-03-01",
      toDate: "2024-03-31",
      bankName: "LMN Bank",
      tier: "Prime",
      location: "Chicago",
      fileCount: 15,
      disbursedAmount: 207000,
    },
    {
      fromDate: "2024-04-01",
      toDate: "2024-04-30",
      bankName: "OPQ Bank",
      tier: "Emerging",
      location: "Houston",
      fileCount: 5,
      disbursedAmount: 43000,
    },
    {
      fromDate: "2024-05-01",
      toDate: "2024-05-31",
      bankName: "RST Bank",
      tier: "Prime",
      location: "Miami",
      fileCount: 20,
      disbursedAmount: 275000,
    },
  ];

  const columns = [
    { header: "From Date", accessor: "fromDate" },
    { header: "To Date", accessor: "toDate" },
    { header: "Bank Name", accessor: "bankName" },
    { header: "Tier", accessor: "tier" },
    { header: "Location", accessor: "location" },
    { header: "File Count", accessor: "fileCount" },
    { header: "Disbursed Amount", accessor: "disbursedAmount" },
  ];

  return (
    <div className="flex flex-col gap-5 p-4">
      <div className="p-4 flex gap-6">
        <ReusableDropdown label="Months *" options={months} default />
        <ReusableDropdown label="Products *" options={products} />
        <ReusableDropdown label="Tier" options={tier} />
        <button className="bg-primary text-white px-4 py-2 font-semibold rounded-lg">
          Search
        </button>
      </div>
      <div>
        <ReusableTable columns={columns} data={dummyData} />
      </div>
    </div>
  );
}

export default BankStatementPage;
