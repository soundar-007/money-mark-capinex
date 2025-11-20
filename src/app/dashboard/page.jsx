'use client';
import React, { useState, useEffect } from 'react';
import StatusCard from '@/components/dashboardComponents/StatusCard';
import { Chart } from 'primereact/chart';
import { useDashboard } from '@/hooks/useApi';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Spinner from '@/components/Spinner';

export default function Dashboard() {

  const {data , isLoading} = useDashboard();
   
  if(isLoading){
    return <Spinner className={"w-20 h-20 border-t-5 border-2"} />;
  }
  console.log(data)

  const options = [
    "Personal Loan",
    "Overdraft ",
    "Housing Loan - Salaried",
    "Credit Card",
    "Business Loan",
    "Housing Loan - Business",
    "Loan Against Property - Salaried",
    "Loan Against Property - Business",
  ];
  const generateMonthYearOptions = () => {
    const date = new Date();
    const options = [];
    for (let i = 0; i < 12; i++) {
      const month = date.toLocaleString('default', { month: 'short' });
      const year = date.getFullYear();
      options.push(`${month}-${year}`);
      date.setMonth(date.getMonth() - 1);
    }
    return options;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Disbursement By Bank */}
          <StatusCard
            title="Disbursement By Bank"
            imageUrl="https://storage.googleapis.com/a1aa/image/yBPWOOJ4IeqXFOHXy0Kd7ncB25gU4Do4pXHVDNNY0gY.jpg"
            options={generateMonthYearOptions()}
            placeholder="Select Month"
            defaultText="No data yet, work in progress"
          >
            {" "}
            <DisbursementByBank />
          </StatusCard>

          {/* Current Backend Processing By Status */}
          <StatusCard
            title="Current Backend Processing By Status"
            imageUrl="https://storage.googleapis.com/a1aa/image/0ihWxazSHBqQO-U3hVvCQQL4k-z6iLVWIqMSmG-UoBU.jpg"
            options={options}
            placeholder="Select Status"
            defaultText="No information available at this time"
          />

          {/* Top 5 Performers and Top 5 Fat Leads */}
          <div className="bg-white p-10 rounded-lg shadow-xl ">
       {  data?.top_performers.length > 0 &&   <div className="mb-4">
              <h3 className="text-lg font-semibold text-center">
                Top 5 Performers
              </h3>
              <div className="grid grid-cols-5 gap-4 mt-4">
                {/* Performer Items */}
                {data?.top_performers?.map((lead, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      alt={`Performer ${index + 1}`}
                      className="mb-2 rounded-full"
                      height="50"
                      src="https://storage.googleapis.com/a1aa/image/1h_T22EZbHSF-pY3kUX7bZPlJVl4OLyfI83cfWEavvE.jpg"
                      width="50"
                    />
                    <p>{lead?.lead_name}</p>
                  </div>
                ))}
              </div>
            </div>}
         { data?.top_fat_leads?.length > 0 &&   <div>
              <h3 className="text-lg font-semibold text-center">
                Top 5 Fat Leads
              </h3>
              <div className="grid grid-cols-5 gap-4 mt-4">
                {/* Lead Items */}
                {data?.top_fat_leads?.map((lead, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      alt={`Performer ${index + 1}`}
                      className="mb-2 rounded-full"
                      height="50"
                      src="https://storage.googleapis.com/a1aa/image/1h_T22EZbHSF-pY3kUX7bZPlJVl4OLyfI83cfWEavvE.jpg"
                      width="50"
                    />
                    <p>{lead?.lead_name}</p>
                  </div>
                ))}
              </div>
            </div>}
          </div>

        {data?.backend_processing_by_bank?.length > 0 ? (
  <BackendProcessingByBankChart data={data.backend_processing_by_bank} />
) : (
  <div className="flex flex-col items-center">
    <img
      alt="Processing By Bank Icon"
      className="mb-4"
      height="100"
      src="https://storage.googleapis.com/a1aa/image/K0Au0uuTit84KTitHPbCcYfuA-RsGcJ8CegUb_fxSPA.jpg"
      width="100"
    />
    <p className="text-gray-400">No information available at this time</p>
  </div>
)}

        </div>
      </div>
    </div>
  );
}

function DisbursementByBank() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);

    const totalValue = 1000;           // fixed total
    const disbursedValue = 500;        // dynamic actual data
    const remainingValue = Math.max(totalValue - disbursedValue, 0); // safeguard against negative

    const data = {
      datasets: [
        {
          data: [disbursedValue, remainingValue],
          backgroundColor: [
            '#003B3A',
            '#E0E0E0'  
          ],
          hoverBackgroundColor: [
            '#00504F', // slightly lighter on hover
        '#CCCCCC'
          ]
        }
      ]
    };

    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true
          }
        }
      }
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
<div className="card flex justify-center items-center relative w-full">
  <div className="absolute top-0 left-0">
    <h5 className="text-xs text-chart font-bold">ICIC Bank</h5>
    <h3 className="text-sm">₹10.00 Lac</h3>
    <h3 className="text-xs">₹10,00,000.00 </h3>
  </div>
  <div className="flex justify-center items-center w-full">
    <Chart
      type="pie"
      data={chartData}
      options={chartOptions}
      className="w-1/2 md:w-30rem h-60"
    />
  </div>
  <div className="absolute bottom-0 right-0">
    <h5 className="text-xs text-chart font-bold">Total</h5>
    <h3 className="text-sm">₹10.00 Lac</h3>
    <h3 className="text-xs">₹10,00,000.00 </h3>
  </div>
</div>

  );
}


 function BackendProcessingByBankChart({ data }) {
  const COLORS = [
    "#004d4d",
    "#007777",
    "#009999",
    "#00b3b3",
    "#00cccc",
  ];

  const totalAmount = data.reduce(
    (sum, item) => sum + item.total_amount,
    0
  );

  return (
    <div className="w-full bg-white p-8 rounded-xl shadow-md">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-6 border-b pb-2">
        Current Backend Processing By Bank
      </h3>

      <div className="grid grid-cols-12 gap-4">
        {/* LEFT SIDE LIST */}
        <div className="col-span-3 space-y-4">
          {data.map((item, index) => (
            <div key={index}>
              <p className="font-semibold" style={{ color: COLORS[index] }}>
                {item.bank_name}
              </p>
              <p className="text-sm font-semibold">
                ₹{item.total_amount_lakhs.toFixed(2)} Lac
              </p>
              <p className="text-xs text-gray-500">
                ₹{item.total_amount.toLocaleString("en-IN")}.00
              </p>
            </div>
          ))}
        </div>

        {/* CENTER DONUT CHART */}
        <div className="col-span-6 flex justify-center">
          <div style={{width:"300px",height:"300px"}}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="total_amount"
                  nameKey="bank_name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  innerRadius={70}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name, entry) => [
                    `₹${entry.payload.total_amount.toLocaleString("en-IN")}.00`,
                    entry.payload.bank_name,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RIGHT SIDE TOTAL */}
        <div className="col-span-3 flex flex-col self-end">
          <p className="text-sm text-gray-500 font-semibold">Total</p>
          <p className="text-xl font-bold">
            ₹{(totalAmount / 100000).toFixed(2)} Lac
          </p>
          <p className="text-sm text-gray-600">
            ₹{totalAmount.toLocaleString("en-IN")}.00
          </p>
        </div>
      </div>
    </div>
  );
}
