"use client";
import { useState, useRef, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const DatePicker = ({ label = 'Start Date' }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    flatpickr(inputRef.current, {
      dateFormat: 'd/m/Y',
      defaultDate: selectedDate,
      onChange: (selectedDates, dateStr) => {
        setSelectedDate(dateStr);
      },
    });
  }, [selectedDate]);

  return (
    <div className="relative w-1/6 flex-1 rounded-md border border-gray-400">
      <div className="flex items-center">
        <label
          htmlFor="date-picker"
          className={`absolute left-3 transition-all pointer-events-none px-1 bg-white ${
            isFocused || selectedDate !== ''
              ? 'text-sm -top-2 text-primary-light'
              : 'text-gray-700 top-3'
          }`}
        >
          {label}
        </label>
        <div className="flex w-full items-center mt-1">
          <input
            type="text"
            id="date-picker"
            value={selectedDate}
            ref={inputRef}
            readOnly
            className="w-full py-3 px-4 focus:outline-none bg-white"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(selectedDate !== '')}
          />
          <button
            className="relative inline-flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium rounded-r-md text-gray-700" // added justify-center
            onClick={() => inputRef.current.focus()}
          >
            <i className="bx bx-calendar-alt h-5 w-5 text-center"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePicker;