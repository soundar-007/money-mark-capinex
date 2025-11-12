"use client";
import { useRouter } from "next/navigation";

function TableList() {
  const router = useRouter();
  const groupedData = [
    {
      status: "Documentation",
      color: "#854C1D",
      rows: [
        {
          customerName: "Mr. BUKKE RAVEENDRA NAIK",
          requiredAmount: "₹30.00 Lac",
          bankName: "AXIS Bank",
          productType: "PL",
          backend: "Akash M",
          leadOwner: "JagruthiB",
          location: "Tirupati(AP)",
          connection: "",
          totalTime: "4941h",
        },
        {
          customerName: "BAIRU PRAVEEN",
          requiredAmount: "₹7.00 Lac",
          bankName: "HDFC Bank",
          productType: "PL",
          backend: "Akash M",
          leadOwner: "VaishnaviWFH",
          location: "Hyderabad(TS)",
          connection: "",
          totalTime: "4974h",
        },
      ],
    },
    {
      status: "Filed",
      color: "#6E3630",
      rows: [
        {
          customerName: "John Doe",
          requiredAmount: "₹5.00 Lac",
          bankName: "TATA Capital",
          productType: "PL",
          backend: "Harshitha",
          leadOwner: "Harshitha",
          location: "Bangalore(KA)",
          connection: "",
          totalTime: "5473h",
        },
      ],
    },
    {
      status: "Approved",
      color: "#2B593F",
      rows: [
        {
          customerName: "TESTING",
          requiredAmount: "₹5.00 Lac",
          bankName: "HDFC Bank",
          productType: "PL",
          backend: "Akash M",
          leadOwner: "Akash M",
          location: "Bangalore(KA)",
          connection: "",
          totalTime: "6052h",
        },
      ],
    },
  ];

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
                    idx % 2 === 0 ? "bg-white text-xs" : "bg-gray-50 text-xs"
                  }
                  onClick={() => router.push(`backend-processing/${23}`)}
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
