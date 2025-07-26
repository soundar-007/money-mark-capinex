import React from "react";

function ReusableTable({ columns, data }) {
  return (
    <div className="p-4 overflow-x-auto">
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr>
            <th className="px-2 py-2">#</th>
            {columns.map(({ header }, idx) => (
              <th key={idx} className="px-2 py-2">
                {header}
              </th>
            ))}
          </tr>
          <tr>
            <td colSpan={columns.length + 1}>
              <div className="border-b border-1 border-black w-full" />
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="text-gray-700" key={index}>
              <td className="px-2 py-1 font-semibold">{index + 1}</td>
              {columns.map(({ accessor }, idx) => (
                <td key={idx} className="px-2 py-1 font-semibold ">
                  {item[accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReusableTable;
