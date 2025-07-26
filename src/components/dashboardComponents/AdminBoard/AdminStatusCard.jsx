import React from "react";

const AdminStatusCard = ({ title, statuses }) => {
  return (
    <div className="flex-1  bg-blue-100 p-4 rounded-lg">
      <h2 className="font-bold mb-2 text-center md:text-left break-words">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-between mb-2 text-gray-700 text-sm">
        {statuses.map((status, index) => (
          <div
            key={index}
            className="flex items-center mb-2 text-gray-700 w-full md:w-auto"
          >
            <div className="flex  flex-col items-center md:items-start">
              <div className="flex  items-center">
                <span className="bg-black text-white rounded-md p-1  text-center flex justify-center items-center mr-2">
                  {status.count}
                </span>
                <span className="text-center md:text-left break-words">
                  {status.label}
                </span>
              </div>
              {status.showIcon && (
                <span className="text-gray-700 mt-1 md:mt-0">
                  <i className="pi pi-indian-rupee text-xs">0.00</i>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminStatusCard;
