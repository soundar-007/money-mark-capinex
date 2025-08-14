"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LeadsTable({ selectedDetail, selectedStatus, selectedLoan }) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // Sample data (replace with your actual data source)
  const sampleData = [
    {
      id: 1,
      name: "John Doe",
      mobileNumber: "123-456-7890",
      leadOwner: "Alice Smith",
      loanAmount: 50000,
      createdOn: "2025-07-01",
      updatedOn: "2025-07-15",
      bankName: "Bank A",
      location: "New York",
      status: "Pending",
      email: "john.doe@example.com",
      role: "Borrower",
      sharedWith: "Bob Wilson",
      shareDate: "2025-07-10",
      watchStatus: "Active",
      lastViewed: "2025-07-17",
    },
    {
      id: 2,
      name: "Jane Smith",
      mobileNumber: "234-567-8901",
      leadOwner: "Mark Johnson",
      loanAmount: 75000,
      createdOn: "2025-06-25",
      updatedOn: "2025-07-10",
      bankName: "Bank B",
      location: "Los Angeles",
      status: "Approved",
      email: "jane.smith@example.com",
      role: "Borrower",
      sharedWith: "Sarah Brown",
      shareDate: "2025-07-05",
      watchStatus: "Inactive",
      lastViewed: "2025-07-12",
    },
    {
      id: 3,
      name: "Michael Brown",
      mobileNumber: "345-678-9012",
      leadOwner: "Emily Davis",
      loanAmount: 30000,
      createdOn: "2025-07-03",
      updatedOn: "2025-07-18",
      bankName: "Bank C",
      location: "Chicago",
      status: "Rejected",
      email: "michael.brown@example.com",
      role: "Co-Borrower",
      sharedWith: "Tom Clark",
      shareDate: "2025-07-08",
      watchStatus: "Active",
      lastViewed: "2025-07-19",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      mobileNumber: "456-789-0123",
      leadOwner: "David Lee",
      loanAmount: 100000,
      createdOn: "2025-06-20",
      updatedOn: "2025-07-14",
      bankName: "Bank D",
      location: "Houston",
      status: "Pending",
      email: "sarah.wilson@example.com",
      role: "Borrower",
      sharedWith: "Lisa Adams",
      shareDate: "2025-07-02",
      watchStatus: "Active",
      lastViewed: "2025-07-16",
    },
    {
      id: 5,
      name: "David Kim",
      mobileNumber: "567-890-1234",
      leadOwner: "Rachel Green",
      loanAmount: 25000,
      createdOn: "2025-07-05",
      updatedOn: "2025-07-20",
      bankName: "Bank E",
      location: "San Francisco",
      status: "Approved",
      email: "david.kim@example.com",
      role: "Borrower",
      sharedWith: "James Taylor",
      shareDate: "2025-07-11",
      watchStatus: "Inactive",
      lastViewed: "2025-07-18",
    },
    {
      id: 6,
      name: "Emma Davis",
      mobileNumber: "678-901-2345",
      leadOwner: "Chris Evans",
      loanAmount: 60000,
      createdOn: "2025-06-28",
      updatedOn: "2025-07-13",
      bankName: "Bank F",
      location: "Miami",
      status: "Pending",
      email: "emma.davis@example.com",
      role: "Co-Borrower",
      sharedWith: "Anna White",
      shareDate: "2025-07-06",
      watchStatus: "Active",
      lastViewed: "2025-07-15",
    },
    {
      id: 7,
      name: "Liam Johnson",
      mobileNumber: "789-012-3456",
      leadOwner: "Sophie Turner",
      loanAmount: 45000,
      createdOn: "2025-07-02",
      updatedOn: "2025-07-17",
      bankName: "Bank G",
      location: "Seattle",
      status: "Rejected",
      email: "liam.johnson@example.com",
      role: "Borrower",
      sharedWith: "Michael Scott",
      shareDate: "2025-07-09",
      watchStatus: "Inactive",
      lastViewed: "2025-07-14",
    },
    {
      id: 8,
      name: "Olivia Martinez",
      mobileNumber: "890-123-4567",
      leadOwner: "John Carter",
      loanAmount: 80000,
      createdOn: "2025-06-30",
      updatedOn: "2025-07-16",
      bankName: "Bank H",
      location: "Boston",
      status: "Approved",
      email: "olivia.martinez@example.com",
      role: "Borrower",
      sharedWith: "Kelly Brown",
      shareDate: "2025-07-07",
      watchStatus: "Active",
      lastViewed: "2025-07-20",
    },
    {
      id: 9,
      name: "Noah Lee",
      mobileNumber: "901-234-5678",
      leadOwner: "Laura Adams",
      loanAmount: 35000,
      createdOn: "2025-07-04",
      updatedOn: "2025-07-19",
      bankName: "Bank I",
      location: "Denver",
      status: "Pending",
      email: "noah.lee@example.com",
      role: "Co-Borrower",
      sharedWith: "Emma Stone",
      shareDate: "2025-07-12",
      watchStatus: "Active",
      lastViewed: "2025-07-17",
    },
    {
      id: 10,
      name: "Ava Thompson",
      mobileNumber: "012-345-6789",
      leadOwner: "Tom Harris",
      loanAmount: 70000,
      createdOn: "2025-06-29",
      updatedOn: "2025-07-15",
      bankName: "Bank J",
      location: "Phoenix",
      status: "Approved",
      email: "ava.thompson@example.com",
      role: "Borrower",
      sharedWith: "Daniel Moore",
      shareDate: "2025-07-03",
      watchStatus: "Inactive",
      lastViewed: "2025-07-13",
    },
  ];

  // Column configurations for each detailsFilter option
  const columnConfigs = {
    Org: [
      { header: "#", key: "id", render: (row) => row.id },
      { header: "Name", key: "name", render: (row) => row.name },
      {
        header: "Mobile Number",
        key: "mobileNumber",
        render: (row) => row.mobileNumber,
      },
      {
        header: "Lead Owner",
        key: "leadOwner",
        render: (row) => row.leadOwner,
      },
      {
        header: "Loan Amount",
        key: "loanAmount",
        render: (row) => `$${row.loanAmount.toLocaleString()}`,
      },
      {
        header: "Created On",
        key: "createdOn",
        render: (row) => row.createdOn,
      },
      {
        header: "Updated On",
        key: "updatedOn",
        render: (row) => row.updatedOn,
      },
      { header: "Bank Name", key: "bankName", render: (row) => row.bankName },
      { header: "Location", key: "location", render: (row) => row.location },
      { header: "Status", key: "status", render: (row) => row.status },
      // {
      //   header: "Download",
      //   key: "download",
      //   render: (row) => (
      //     <button
      //       className="text-blue-600 hover:text-blue-800"
      //       onClick={() => alert(`Download for ${row.name}`)}
      //     >
      //       Download
      //     </button>
      //   ),
      // },
    ],
    User: [
      { header: "#", key: "id", render: (row) => row.id },
      { header: "Name", key: "name", render: (row) => row.name },
      {
        header: "Mobile Number",
        key: "mobilenumber",
        render: (row) => row.mobileNumber,
      },
      {
        header: "Lead Owner",
        key: "leadowner",
        render: (row) => row.leadOwner,
      },
      {
        header: "Loan Amount",
        key: "loanAmount",
        render: (row) => `$${row.loanAmount.toLocaleString()}`,
      },
      {
        header: "Created On",
        key: "createdOn",
        render: (row) => row.createdOn,
      },
      { header: "Status", key: "status", render: (row) => row.status },
      // {
      //   header: "Download",
      //   key: "download",
      //   render: (row) => (
      //     <button
      //       className="text-blue-600 hover:text-blue-800"
      //       onClick={() => alert(`Download for ${row.name}`)}
      //     >
      //       Download
      //     </button>
      //   ),
      // },
    ],
    Shared: [
      { header: "#", key: "id", render: (row) => row.id },
      { header: "Name", key: "name", render: (row) => row.name },
      {
        header: "Shared With",
        key: "sharedWith",
        render: (row) => row.sharedWith,
      },
      {
        header: "Share Date",
        key: "shareDate",
        render: (row) => row.shareDate,
      },
      {
        header: "Loan Amount",
        key: "loanAmount",
        render: (row) => `$${row.loanAmount.toLocaleString()}`,
      },
      { header: "Status", key: "status", render: (row) => row.status },
      // {
      //   header: "Download",
      //   key: "download",
      //   render: (row) => (
      //     <button
      //       className="text-blue-600 hover:text-blue-800"
      //       onClick={() => alert(`Download for ${row.name}`)}
      //     >
      //       Download
      //     </button>
      //   ),
      // },
    ],
    Watch: [
      { header: "#", key: "id", render: (row) => row.id },
      { header: "Name", key: "name", render: (row) => row.name },
      {
        header: "Watch Status",
        key: "watchStatus",
        render: (row) => row.watchStatus,
      },
      {
        header: "Last Viewed",
        key: "lastViewed",
        render: (row) => row.lastViewed,
      },
      {
        header: "Loan Amount",
        key: "loanAmount",
        render: (row) => `$${row.loanAmount.toLocaleString()}`,
      },
      { header: "Status", key: "status", render: (row) => row.status },
      // {
      //   header: "Download",
      //   key: "download",
      //   render: (row) => (
      //     <button
      //       className="text-blue-600 hover:text-blue-800"
      //       onClick={() => alert(`Download for ${row.name}`)}
      //     >
      //       Download
      //     </button>
      //   ),
      // },
    ],
  };

  // Use selectedDetail or default to "Org"
  const columns = columnConfigs[selectedDetail || "Org"];

  // Filter data based on selectedStatus, selectedLoan, and searchTerm
  const filteredData = sampleData;
  // .filter((row) => {
  //   const statusMatch = selectedStatus ? row.status === selectedStatus : true;
  //   const searchMatch = searchTerm
  //     ? Object.values(row).some(
  //         (value) =>
  //           typeof value === "string" &&
  //           value.toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //     : true;
  //   return statusMatch && searchMatch;
  // });

  // const statusColors = {
  //   customerDiscussion:{
  //     bg:'bg-blue-200',
  //     text:'text-blue-600'
  //   },
  //   bankDiscussion:{
  //     bg:'bg-blue-200',
  //     text:'text-blue-600'
  //   }
  // }

  return (
    <div className="mt-2">
      <table className="min-w-full text-black-text">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-2 py-1 text-left font-bold text-xs border-b-1"
              >
                {col.header}
              </th>
            ))}
          </tr>
          {/* Search/filter row */}
          <tr>
            <td colSpan={columns.length} className="px-4 ">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-1/3 px-2 py-1 border-1 rounded-sm flex-1"
                />
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, i) => (
            <tr
              key={row.id}
              className={`cursor-pointer ${
                (i + 1) % 2 == 0 ? "" : "bg-gray-300"
              }`}
              onClick={() => router.push(`/dashboard/my-work/leads/${row.id}`)}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`px-4 py-4 text-xs font-semibold ${
                    col.key == "status" ? "bg-white" : ""
                  }`}
                >
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadsTable;
