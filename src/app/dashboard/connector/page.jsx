import InputFloating from "@/components/InputFloating";

function ConnectorPage() {
  const dummyData = [
    { name: "kavana", number: 987654321 },
    { name: "kavana", number: 987654321 },
    { name: "kavana", number: 987654321 },
    { name: "kavana", number: 987654321 },
    { name: "kavana", number: 987654321 },
    { name: "kavana", number: 987654321 },
  ];
  return (
    <div>
      <div className="flex flex-col gap-4 w-full lg:flex-row lg:w-1/2 p-4">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <InputFloating placeholder="Name *" className="w-full sm:w-1/2" />
          <InputFloating placeholder="Mobile *" className="w-full sm:w-1/2" />
        </div>
        <div className="flex justify-end sm:justify-start">
          <button className="bg-primary text-white font-medium px-4 py-2 rounded-md w-full sm:w-auto sm:min-w-[100px] mt-2 sm:mt-0">
            Submit
          </button>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr>
              <th className="px-2 py-2">#</th>
              <th className="px-2 py-2">Name</th>
              <th className="px-2 py-2">Mobile</th>
            </tr>
            <tr>
              <td colSpan={3}>
                <div className="border-b border-1 border-black w-full" />
              </td>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, index) => (
              <tr className="text-gray-700" key={index}>
                <td className="px-2 py-1 font-semibold">{index + 1}</td>
                <td className="px-2 py-1 uppercase font-semibold">
                  {item.name}
                </td>
                <td className="px-2 py-1 font-semibold ">{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ConnectorPage;
