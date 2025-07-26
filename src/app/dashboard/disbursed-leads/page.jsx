"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FilterSearchUI() {
  const [selectedDate, setSelectedDate] = useState("");
  const [view, setView] = useState("filter");
  const options = ["Indian", "SBI", "Canara"];

  function getLatestMonths() {
    const currentYear = new Date().getFullYear();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames.map((month) => `${month}-${currentYear}`);
  }

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <button
          className={`border px-4 py-2 rounded ${
            view === "filter" ? "bg-gray-300" : ""
          }`}
          onClick={() => setView("filter")}
        >
          <i className="bx bx-filter-alt"></i> Filter
        </button>
        <button
          className={`border px-4 py-2 rounded ${
            view === "chart" ? "bg-gray-300" : ""
          }`}
          onClick={() => setView("chart")}
        >
          <i className="bx bx-line-chart"></i> Chart
        </button>
      </div>
      {view === "filter" ? (
        <div className="bg-white rounded-lg statuscard-shadow p-6 mt-3 flex flex-col md:flex-row lg:flex-row gap-4 lg:gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-3 w-full">
            <Dropdown
              placeholder={"All Banks"}
              label={"Banks"}
              options={options}
            />
            <Dropdown
              placeholder={"Select Tier"}
              label={"Tier"}
              options={options}
            />
            <Dropdown
              placeholder={"All Products"}
              label={"Products"}
              options={options}
            />
            <Dropdown
              placeholder={"All Team Members"}
              label={"AssignedTo"}
              options={options}
            />
            <Dropdown
              placeholder={"Month-Year"}
              label={"Months"}
              options={getLatestMonths()}
            />
            <div className="border border-gray-400 flex justify-center w-full bg-white min-w-[150px]">
              <label className="text-center text-gray-600 border border-gray-400 p-2">
                Day
              </label>
              <div className="relative w-full">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="dd-mm-yyyy"
                  className="focus:outline-none px-2 py-2 rounded w-full"
                />
                <i className="bx bxs-calendar absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-xs text-gray-600"></i>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-end p-3 gap-4 w-full md:w-auto lg:w-auto">
            <button className="border border-gray-400 px-4 py-2 rounded-sm text-gray-600">
              Clean
            </button>
            <button className="bg-primary text-white font-semibold border-gray-400 px-4 py-2 rounded-sm">
              Search
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <p className="text-gray-700">Chart view is under development</p>
        </div>
      )}
      <div className="mt-4 text-gray-600 p-5 border-b-2 border-gray-400">
        No Leads Available.
      </div>
    </div>
  );
}

function Dropdown({ placeholder, label, options }) {
  return (
    <div className="border border-gray-400 flex justify-center w-full bg-white min-w-[150px]">
      <label className="text-center border text-gray-600 border-gray-400 p-2">
        {label}
      </label>
      <div className="relative w-full">
        <select
          className="appearance-none border px-2 py-2 rounded w-full pr-8 bg-white text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
        <i className="bx bxs-down-arrow absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-xs text-gray-600"></i>
      </div>
    </div>
  );
}
