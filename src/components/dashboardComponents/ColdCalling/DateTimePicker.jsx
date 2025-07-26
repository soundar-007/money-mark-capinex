import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import CustomEditor from "./Editor";
import { Calendar } from "primereact/calendar";

const DateTimePickerModal = ({ visible, onHide }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null);
  const [selectedMinute, setSelectedMinute] = useState(null);

  const [showMonthSelector, setShowMonthSelector] = useState(false);

  const recentDays = Array.from({ length: 5 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  const hours = [
    "09",
    "10",
    "11",
    "12",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
  ];
  const minutes = ["00", "15", "30", "45"];

  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header="Select Time"
      className="w-9/12  lg:w-1/3"
      closable
      draggable={false}
      modal
    >
      <div className="w-full   ">
        <div className="flex gap-2 mb-5 flex-wrap lg:flex-nowrap ">
          {recentDays.map((date, index) => (
            <button
              key={index}
              className={`px-6  py-1 rounded-md border border-gray-400  ${
                selectedDate.toDateString() === date.toDateString()
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setSelectedDate(date)}
            >
              <div>{date.getDate()}</div>
              <div className="text-sm">
                {date.toLocaleDateString("en-US", { weekday: "short" })}
              </div>
            </button>
          ))}
          <button
            className="px-3 py-2 rounded-md border border-gray-400 flex items-center gap-1"
            onClick={() => setShowMonthSelector(!showMonthSelector)}
          >
            <span className="text-gray-600">mn</span>
            <i className="bx bx-calendar text-primary"></i>
          </button>
        </div>
        {showMonthSelector && (
          <div className="relative mb-4">
            <input
              type="month"
              className="border p-2 rounded-md w-full cursor-pointer"
              onChange={(e) => {
                const selectedMonth = new Date(e.target.value);
                setSelectedDate(selectedMonth);
                setShowMonthSelector(false);
              }}
            />
          </div>
        )}
        <div className="mb-5">
          <div className="flex gap-2 flex-wrap items-center ">
            <span className="text-gray-700 text-center">Hours</span>
            {hours.map((hour) => (
              <button
                key={hour}
                className={`px-2 py-1 rounded-md border border-gray-400 ${
                  selectedHour === hour
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setSelectedHour(hour)}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center mb-20">
            <span className="text-gray-700 text-center">Minutes</span>
            {minutes.map((minute) => (
              <button
                key={minute}
                className={`px-3 py-2 rounded-md border border-gray-400 ${
                  selectedMinute === minute
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setSelectedMinute(minute)}
              >
                {minute}
              </button>
            ))}
          </div>
        </div>

        {/* Text Editor */}
        <div className="w-11/12">
          <CustomEditor />
        </div>
        {/* Submit Button */}
        <div className="flex justify-end mt-5">
        <button className=" bg-primary text-white px-6 py-2 rounded-md font-bold">Submit</button>

        </div>


      </div>
    </Dialog>
  );
};

export default DateTimePickerModal;
