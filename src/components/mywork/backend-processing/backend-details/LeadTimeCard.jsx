const LeadTimeCard = () => {
  const leadTime = {
    totalTime: "0.00",
    waitingTime: "0.07",
    documentation: "0.00",
    loggedIn: "0.00",
    pending: "0.00",
    underwriting: "0.00",
    approved: "0.00",
    abnd: "0.00",
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      {/* Header row with icons */}
      <div className="flex items-center py-2 border-b border-gray-200 w-full">
        <div className="flex items-center w-full">
          <span className="font-bold text-md mr-2">Lead Time</span>
          {/* <img
            src="assets/img/icons/arrow_drop_down.png"
            alt="dropdown"
            className="ml-2"
            style={{ width: "18px" }}
          /> */}
        </div>
        <div className="flex-shrink-0 ml-2">
          {/* <img
            src="assets/img/icons/alarm.png"
            alt="alarm"
            className="ml-2"
            style={{ width: "20px" }}
          /> */}
        </div>
      </div>

      {/* Lead time rows */}
      <div className="mt-2 space-y-2">
        {Object.entries(leadTime).map(([key, value]) => (
          <div key={key} className="grid grid-cols-5 items-center py-1">
            <span className="col-span-3 font-medium text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, " $1") + ":"}
            </span>
            <span className="col-span-2 text-right font-semibold text-gray-800">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadTimeCard;
