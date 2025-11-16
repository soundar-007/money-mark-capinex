"use client";
import { useBackendProcessing } from "@/hooks/useBackendProcess";
import { useRouter } from "next/navigation";

function TableList() {
const { data } = useBackendProcessing();
const groupedData = groupedBackend(data);

  const router = useRouter();


  return (
    <div className="space-y-8 max-h-[600px] overflow-y-auto px-4">
      {groupedData.map(({ status, rows, color }) => (
        <div key={status} className="w-full">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            {status} ({rows.length})
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead
              style={{ backgroundColor: color, color: "#fff" }}
              className="text-sm"
            >
              <tr>
                <th className="p-2 border border-gray-300 text-left">
                  Customer Name
                </th>
                <th className="p-2 border border-gray-300 text-left">
                  Required Amount
                </th>
                <th className="p-2 border border-gray-300 text-left">
                  Bank Name
                </th>
                <th className="p-2 border border-gray-300 text-left">
                  Product Type
                </th>
                <th className="p-2 border border-gray-300 text-left">
                  Backend
                </th>
                <th className="p-2 border border-gray-300 text-left">
                  Lead Owner
                </th>
                <th className="p-2 border border-gray-300 text-left">
                  Location
                </th>
                <th className="p-2 border border-gray-300 text-left">
                  Connection
                </th>
                <th className="p-2 border border-gray-300 text-left">
                  Total Time
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={
                    idx % 2 === 0
                      ? "bg-white text-xs cursor-pointer"
                      : "bg-gray-200 text-xs cursor-pointer"
                  }
                  onClick={() => router.push(`backend-processing/${row.id}`)}
                >
                  <td className="p-2 border border-gray-300 text-sm">
                    {row.customerName}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {row.requiredAmount}
                  </td>
                  <td className="p-2 border border-gray-300">{row.bankName}</td>
                  <td className="p-2 border border-gray-300">
                    {row.productType}
                  </td>
                  <td className="p-2 border border-gray-300">{row.backend}</td>
                  <td className="p-2 border border-gray-300">
                    {row.leadOwner}
                  </td>
                  <td className="p-2 border border-gray-300">{row.location}</td>
                  <td className="p-2 border border-gray-300">
                    {row.connection}
                  </td>
                  <td className="p-2 border border-gray-300">
                    {row.totalTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default TableList;


const statusColors = {
  Documentation: "#854C1D",
  Filed: "#6E3630",
  Approved: "#2B593F",
};

function groupedBackend(data) {
  if (!data) return [];

  const grouped = data.reduce((acc, item) => {
    const status = item.lead_backend_status || "Unknown";

    if (!acc[status]) {
      acc[status] = {
        status,
        color: statusColors[status] || "#000",
        rows: [],
      };
    }

    acc[status].rows.push({
      id:item.id,
      customerName: item.lead_full_name,
      requiredAmount: item.loan_amount ? `₹${Number(item.loan_amount).toLocaleString()}` : "-",
      bankName: item.selected_bank,
      productType: item.product,
      backend: item.submitted_by_name,
      leadOwner: item.leadname,
      location: item.location,
      connection: item.processing_status_display,
      totalTime: "",
    });

    return acc;
  }, {});

  return Object.values(grouped);
}
