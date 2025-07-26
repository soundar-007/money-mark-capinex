function CampaignCard({ item, statusColor, buttons, showExtrapolation }) {
  return (
    <div className="grid grid-cols-12 gap-4 border-2 border-gray-200 p-4 rounded-lg bg-white">
      {/* Left Box */}
      <div className="col-span-12 border-b pb-2 lg:col-span-4 lg:border-b-0 lg:border-r pr-4 flex flex-col gap-5">
        <div className="flex justify-between h-20">
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-xs text-gray-600">Gateway: {item.gateway}</p>
          </div>
          <div className="flex flex-col items-center self-end gap-1">
            <button className={`text-xs px-3 py-1 rounded-lg ${statusColor}`}>
              {item.status}
            </button>
            <p className="text-xs text-gray-500">{item.timestamp}</p>
          </div>
        </div>

        <div>
          <h2 className="font-medium text-xs lg:text-sm">Calls Completed</h2>
          <div className="bg-green-100 h-4 rounded">
            <div
              className="h-full bg-green-500 rounded"
              style={{
                width: `${(item.completedCalls / item.totalCalls) * 100}%`,
              }}
            ></div>
          </div>
          <div className="flex gap-12 mt-2">
            <div>
              <p className="font-semibold text-primary text-xs md:text-sm">
                Total Calls
              </p>
              <p className="text-sm text-gray-600">{item.totalCalls}</p>
            </div>
            <div>
              <p className="font-semibold text-primary text-xs md:text-sm">
                Active Calls
              </p>
              <p className="text-sm text-gray-600">{item.activeCalls}</p>
            </div>
            <div className="mr-auto">
              <p className="font-semibold text-primary text-xs md:text-sm">
                Completed
              </p>
              <p className="text-sm text-gray-600">{item.completedCalls}</p>
            </div>
          </div>
        </div>

        <div className="text-red-500 font-medium">{item.runnerStatus}</div>

        <div className="flex justify-end gap-2">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              className={`border px-3 py-1 rounded-lg flex gap-1 items-center text-xs lg:text-sm ${btn.className}`}
            >
              <i
                className={`${btn.icon} text-xs lg:text-sm`}
                style={{ fontWeight: "bolder" }}
              ></i>
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Center Box */}
      <div
        className={`col-span-12 ${
          showExtrapolation ? "lg:col-span-6" : "lg:col-span-8"
        } border-b pb-2 lg:border-b-0 lg:border-r px-4 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-x-6`}
      >
        {Object.entries(item.stats).map(([label, value]) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-sm text-gray-600">{label}</span>
            <span className="font-semibold">{value}</span>
          </div>
        ))}
      </div>

      {/* Right Box */}
      {showExtrapolation && (
        <div className="col-span-12 lg:col-span-2 pl-2 flex flex-col gap-3">
          <p className="font-medium">Extrapolation</p>
          <div className="grid grid-cols-3 gap-2">
            {item.extrapolation.map((value, i) => (
              <button
                key={value + i}
                className="bg-gray-100 border-2 border-gray-800 hover:bg-gray-200 text-sm rounded"
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CampaignCard;
