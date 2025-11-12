"use client";
import { useLeads } from "@/hooks/useLeads";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function LeadsTable({ selectedDetail, selectedStatus, selectedLoan }) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const { data, isLoading } = useLeads();
  const [sampleData, setSampleData] = useState([]);
  useEffect(() => {
    setSampleData(data);
  }, [data]);

  if (isLoading) {
    // return <p>Loading..</p>
    return null;
  }
  const columnConfigs = {
    Org: [
      { header: "#", key: "id", render: (row) => row.id },
      { header: "Name", key: "name", render: (row) => row.leadname },
      {
        header: "Mobile Number",
        key: "mobileNumber",
        render: (row) => row.phone_number,
      },
      {
        header: "Lead Owner",
        key: "leadOwner",
        render: (row) => row.leadname,
      },
      {
        header: "Loan Amount",
        key: "loanAmount",
        render: (row) => `$${row.loan_amount}`,
      },
      {
        header: "Created On",
        key: "createdOn",
        render: (row) => row.created_on,
      },
      {
        header: "Updated On",
        key: "updatedOn",
        render: (row) => row.created_on,
      },
      { header: "Bank Name", key: "bankName", render: (row) => row?.bankName },
      { header: "Location", key: "location", render: (row) => row?.location },
      { header: "Status", key: "status", render: (row) => row?.lead_status },
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
      { header: "Name", key: "name", render: (row) => row.leadname },
      {
        header: "Mobile Number",
        key: "mobilenumber",
        render: (row) => row.phone_number,
      },
      {
        header: "Lead Owner",
        key: "leadowner",
        render: (row) => row.leadname,
      },
      {
        header: "Loan Amount",
        key: "loanAmount",
        render: (row) => `$${row.loan_amount}`,
      },
      {
        header: "Created On",
        key: "createdOn",
        render: (row) => row.created_on,
      },
      { header: "Status", key: "status", render: (row) => row.lead_status },
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
      { header: "Name", key: "name", render: (row) => row.leadname },
      {
        header: "Shared With",
        key: "sharedWith",
        render: (row) => row?.sharedWith,
      },
      {
        header: "Share Date",
        key: "shareDate",
        render: (row) => row?.shareDate,
      },
      {
        header: "Loan Amount",
        key: "loanAmount",
        render: (row) => `$${row?.loan_amount}`,
      },
      { header: "Status", key: "status", render: (row) => row?.lead_status },
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
      { header: "Name", key: "name", render: (row) => row.leadname },
      {
        header: "Watch Status",
        key: "watchStatus",
        render: (row) => row?.watchStatus,
      },
      {
        header: "Last Viewed",
        key: "lastViewed",
        render: (row) => row?.lastViewed,
      },
      {
        header: "Loan Amount",
        key: "loanAmount",
        render: (row) => `$${row.loan_amount}`,
      },
      { header: "Status", key: "status", render: (row) => row?.lead_status },
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
  const columns = columnConfigs[selectedDetail || "User"];
  const filteredData = sampleData?.filter((row) => {
    const statusMatch = selectedStatus ? row.status === selectedStatus : true;
    const searchMatch = searchTerm
      ? Object.values(row).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : true;
    return statusMatch && searchMatch;
  });

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
          {filteredData?.length > 0 &&
            filteredData?.map((row, i) => (
              <tr
                key={row.id}
                className={`cursor-pointer ${
                  (i + 1) % 2 == 0 ? "" : "bg-gray-300"
                }`}
                onClick={() =>
                  router.push(`/dashboard/my-work/leads/${row.id}`)
                }
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
