export default function BackendProcessing() {
  const statusColors = {
    Documentation: "#81592f",
    Filled: "#6b3627",
    Pending: "#a47d2b",
    Approved: "#2f6036",
    Disbursed: "#13161e",
  };

  const dummyData = [
    {
      bankName: "HDFC BANK(PL)",
      name: "AimasWFH",
      amount: "₹2,00,000.00",
      min: "29m",
      location: "Mysuru(KA)",
      status: "Documentation",
    },
    {
      bankName: "ICICI BANK(LTD)",
      name: "BizCore",
      amount: "₹1,75,430.00",
      min: "12m",
      location: "Bengaluru(KA)",
      status: "Filed",
    },
    {
      bankName: "SBI BANK",
      name: "FinSmart",
      amount: "₹3,20,500.00",
      min: "1h",
      location: "Chennai(TN)",
      status: "Approved",
    },
    {
      bankName: "AXIS BANK",
      name: "TechFusion",
      amount: "₹90,250.00",
      min: "48m",
      location: "Hyderabad(TS)",
      status: "Pending",
    },
    {
      bankName: "KOTAK BANK",
      name: "LogiTrack",
      amount: "₹2,50,000.00",
      min: "35m",
      location: "Mumbai(MH)",
      status: "Pending",
    },
    {
      bankName: "HDFC BANK(PL)",
      name: "AimasWFH",
      amount: "₹2,00,000.00",
      min: "29m",
      location: "Mysuru(KA)",
      status: "Documentation",
    },
    {
      bankName: "ICICI BANK(LTD)",
      name: "BizCore",
      amount: "₹1,75,430.00",
      min: "12m",
      location: "Bengaluru(KA)",
      status: "Filed",
    },
    {
      bankName: "SBI BANK",
      name: "FinSmart",
      amount: "₹3,20,500.00",
      min: "1h",
      location: "Chennai(TN)",
      status: "Approved",
    },
    {
      bankName: "AXIS BANK",
      name: "TechFusion",
      amount: "₹90,250.00",
      min: "48m",
      location: "Hyderabad(TS)",
      status: "Pending",
    },
    {
      bankName: "KOTAK BANK",
      name: "LogiTrack",
      amount: "₹2,50,000.00",
      min: "35m",
      location: "Mumbai(MH)",
      status: "Pending",
    },
    {
      bankName: "HDFC BANK(PL)",
      name: "AimasWFH",
      amount: "₹2,00,000.00",
      min: "29m",
      location: "Mysuru(KA)",
      status: "Documentation",
    },
    {
      bankName: "ICICI BANK(LTD)",
      name: "BizCore",
      amount: "₹1,75,430.00",
      min: "12m",
      location: "Bengaluru(KA)",
      status: "Filed",
    },
    {
      bankName: "SBI BANK",
      name: "FinSmart",
      amount: "₹3,20,500.00",
      min: "1h",
      location: "Chennai(TN)",
      status: "Approved",
    },
    {
      bankName: "AXIS BANK",
      name: "TechFusion",
      amount: "₹90,250.00",
      min: "48m",
      location: "Hyderabad(TS)",
      status: "Pending",
      startMin: "40h",
    },
    {
      bankName: "KOTAK BANK",
      name: "LogiTrack",
      amount: "₹2,50,000.00",
      min: "35m",
      location: "Mumbai(MH)",
      status: "Pending",
      inLac: "",
    },
  ];

  // const groupedByStatus = statuses.map((status) => ({
  //   ...status,
  //   cards: dummyData.filter((d) => d.status === status.label),
  // }));

  const data = [
    {
      label: "Documentation",
      cards: [
        {
          name: "Ravi Kumar",
          amount: "12.50 Lac Documentation",
          bankName: "HDFC Bank (PL)",
          fatherName: "Suresh Kumar",
          motherName: "Lakshmi S",
          location: "Hyderabad",
          startTime: "5m",
          endTime: "220h",
        },
        {
          name: "Sneha Reddy",
          amount: "8.00 Lac Documentation",
          bankName: "Axis Bank",
          fatherName: "Raghav Reddy",
          motherName: "Sunitha R",
          location: "Bangalore",
          startTime: "12m",
          endTime: "150h",
        },
        {
          name: "Amit Sharma",
          amount: "15.00 Lac Documentation",
          bankName: "ICICI Bank",
          fatherName: "Rajesh Sharma",
          motherName: "Kavita Sharma",
          location: "Delhi",
          startTime: "7m",
          endTime: "200h",
        },
        {
          name: "Priya Desai",
          amount: "6.50 Lac Documentation",
          bankName: "SBI",
          fatherName: "Vinod Desai",
          motherName: "Manjula D",
          location: "Ahmedabad",
          startTime: "3m",
          endTime: "130h",
        },
        {
          name: "Mohit Agarwal",
          amount: "10.75 Lac Documentation",
          bankName: "Kotak Mahindra",
          fatherName: "Anil Agarwal",
          motherName: "Sarita A",
          location: "Mumbai",
          startTime: "9m",
          endTime: "180h",
        },
        {
          name: "Divya Menon",
          amount: "5.25 Lac Documentation",
          bankName: "Federal Bank",
          fatherName: "Sathish Menon",
          motherName: "Usha Menon",
          location: "Kochi",
          startTime: "4m",
          endTime: "110h",
        },
      ],
      cardColor: "#FDE6B7",
    },
    {
      label: "Filled",
      cards: [
        {
          name: "Arjun Mehta",
          amount: "14.20 Lac Filled",
          bankName: "HDFC Bank",
          fatherName: "Rakesh Mehta",
          motherName: "Anita Mehta",
          location: "Jaipur",
          startTime: "2m",
          endTime: "190h",
        },
        {
          name: "Neha Gupta",
          amount: "11.90 Lac Filled",
          bankName: "Axis Bank",
          fatherName: "Sanjay Gupta",
          motherName: "Maya Gupta",
          location: "Lucknow",
          startTime: "10m",
          endTime: "170h",
        },
        {
          name: "Vikas Jain",
          amount: "9.50 Lac Filled",
          bankName: "ICICI Bank",
          fatherName: "Manoj Jain",
          motherName: "Suman Jain",
          location: "Indore",
          startTime: "7m",
          endTime: "140h",
        },
        {
          name: "Shruti Verma",
          amount: "7.75 Lac Filled",
          bankName: "SBI",
          fatherName: "Naresh Verma",
          motherName: "Neelam Verma",
          location: "Kanpur",
          startTime: "4m",
          endTime: "130h",
        },
        {
          name: "Tarun Joshi",
          amount: "10.25 Lac Filled",
          bankName: "Kotak Mahindra",
          fatherName: "Prakash Joshi",
          motherName: "Sunanda Joshi",
          location: "Dehradun",
          startTime: "6m",
          endTime: "155h",
        },
      ],
    },
    {
      label: "Pending",
      cards: [
        {
          name: "Harsha Rao",
          amount: "15.00 Lac Pending",
          bankName: "ICICI Bank",
          fatherName: "Raghunath Rao",
          motherName: "Kusuma Rao",
          location: "Mysore",
          startTime: "6m",
          endTime: "185h",
        },
        {
          name: "Bhavana Jha",
          amount: "12.00 Lac Pending",
          bankName: "HDFC Bank",
          fatherName: "Ravi Jha",
          motherName: "Sudha Jha",
          location: "Patna",
          startTime: "5m",
          endTime: "170h",
        },
        {
          name: "Kartikeya D",
          amount: "9.85 Lac Pending",
          bankName: "Axis Bank",
          fatherName: "Devendra D",
          motherName: "Vandana D",
          location: "Vijayawada",
          startTime: "3m",
          endTime: "140h",
        },
        {
          name: "Sonal Pawar",
          amount: "8.20 Lac Pending",
          bankName: "SBI",
          fatherName: "Dinesh Pawar",
          motherName: "Pushpa Pawar",
          location: "Nashik",
          startTime: "2m",
          endTime: "135h",
        },
      ],
    },
    {
      label: "Approved",
      cards: [
        {
          name: "Nikhil Bhatt",
          amount: "14.50 Lac Approved",
          bankName: "ICICI Bank",
          fatherName: "Mahesh Bhatt",
          motherName: "Rekha Bhatt",
          location: "Ahmedabad",
          startTime: "2m",
          endTime: "130h",
        },
        {
          name: "Aishwarya T",
          amount: "10.25 Lac Approved",
          bankName: "Axis Bank",
          fatherName: "Satish T",
          motherName: "Lalitha T",
          location: "Chennai",
          startTime: "4m",
          endTime: "145h",
        },
        {
          name: "Siddharth Dubey",
          amount: "9.75 Lac Approved",
          bankName: "HDFC Bank",
          fatherName: "Girish Dubey",
          motherName: "Rani Dubey",
          location: "Raipur",
          startTime: "6m",
          endTime: "160h",
        },
        {
          name: "Geetha Raj",
          amount: "7.60 Lac Approved",
          bankName: "SBI",
          fatherName: "Shiv Raj",
          motherName: "Chitra Raj",
          location: "Coimbatore",
          startTime: "5m",
          endTime: "150h",
        },
      ],
    },
    {
      label: "Disbursed",
      cards: [
        {
          name: "Manoj Pillai",
          amount: "18.00 Lac Disbursed",
          bankName: "Federal Bank",
          fatherName: "K. S. Pillai",
          motherName: "Annamma Pillai",
          location: "Kollam",
          startTime: "3m",
          endTime: "125h",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto w-full py-4 px-2 custom-scrollbar">
        <div className="flex gap-4 w-max">
          {dummyData.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[250px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg border-2 border-gray-400"
            >
              <div className="flex justify-center items-center mb-2 border-b-2 border-gray-400 px-4 py-2 text-center">
                <h3 className="font-bold text-sm">{item.bankName}</h3>
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold border-b border-gray-500 text-center mb-2 ">
                  {item.name}
                </div>
                <div className="text-gray-800 font-bold text-lg text-center border-b mb-2 border-gray-500 ">
                  {item.amount}
                </div>
                <div className="text-xs text-gray-800 text-center border-b border-gray-500  mb-2">
                  {item.min}
                </div>
                <div className="font-semibold text-sm mt-2 text-center border-b border-gray-500">
                  {item.location}
                </div>
                <button className="mt-3 w-full bg-primary  text-white text-sm py-1 rounded-md">
                  Accept
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="self-end">
        <i className="pi pi-list text-lg top- right-0 p-2 cursor-pointer"></i>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 w-full px-4">
        {data.map((status, index) => (
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
                  key={i}
                  className="rounded-md text-black  border-black-150 space-y-4"
                  style={{
                    background: status.cardColor
                      ? status.cardColor
                      : statusColors[status.label] + "22",
                    border: "1px solid",
                  }} // light tint of color
                >
                  <div className="text-md font-bold text-center border-b-1 p-2  mb-1 uppercase">
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
                      <div className="flex justify-center items-center pb-1 mb-1 px-2 text-xs font-semibold  border-b-1">
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
        ))}
      </div>
    </div>
  );
}
