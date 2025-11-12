"use client";
import { useRouter } from "next/navigation";

export default function StatusColumnList({ statusColors, data }) {
  const router = useRouter();
  return data.map((status, index) => (
    <div
      key={index}
      className="border-r-0 px-4 flex flex-col bg-white dark:bg-gray-900"
      style={{ borderRight: "1px solid" }}
    >
      {/* Column Header */}
      <div
        className="text-white font-semibold text-center p-2 rounded-md mb-2"
        style={{ backgroundColor: statusColors[status.label] }}
      >
        {status.label} ({status.cards.length})
      </div>

      {/* Cards inside this column */}
      <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 pr-2">
        {status.cards.map((item, i) => (
          <div
            onClick={() => router.push(`backend-processing/${23}`)}
            key={i}
            className="rounded-md text-black cursor-pointer border-black-150 space-y-4"
            style={{
              background: status.cardColor
                ? status.cardColor
                : statusColors[status.label] + "22",
              border: "1px solid",
            }}
          >
            <div className="text-md font-bold text-center border-b-1 p-2 mb-1 uppercase">
              {item.name}
            </div>

            <div className="px-4 space-y-4">
              <div className="flex justify-between text-sm font-semibold border-b-1 pb-1 mb-1 px-2">
                <span>
                  ₹{item.amount.split(" ")[0] + item.amount.split(" ")[1]}
                </span>
                <span>{item.amount.split(" ")[2]}</span>
              </div>
              <div className="px-6">
                <div className="flex justify-center items-center pb-1 mb-1 px-2 text-xs font-semibold border-b-1">
                  <div className="flex gap-1 items-center">
                    <span>{item.bankName}</span>
                    <span>({item.productType || "PL"})</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between border-b-1 pb-1 mb-1 text-xs font-semibold">
                <span>{item.fatherName}</span>
                <span>{item.motherName}</span>
              </div>

              <div className="text-xs font-semibold text-center border-b-1 pb-1 mb-1">
                {item.location}
              </div>

              <div className="flex justify-center text-sm font-medium px-1 pb-2 gap-5">
                <div>{item.startTime}</div>
                <div>{item.endTime}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ));
}
