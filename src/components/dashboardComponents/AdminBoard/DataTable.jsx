'use client';
import { useState, useEffect } from 'react';
import React from 'react';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([
            { id: 1, name: 'Kavana', login: true, todayNew: 0, todayFiled: 0, todayDisbursed: 0, yesterdayNew: 2, yesterdayFiled: 0, yesterdayDisbursed: 0, janNew: 7, janFiled: 0, janDisbursed: 0 },
            { id: 2, name: 'Akash M', login: true, todayNew: 0, todayFiled: 0, todayDisbursed: 0, yesterdayNew: 3, yesterdayFiled: 0, yesterdayDisbursed: 0, janNew: 9, janFiled: 0, janDisbursed: 0 },
            { id: 3, name: 'Srinivas K', login: false, todayNew: 0, todayFiled: 0, todayDisbursed: 0, yesterdayNew: 0, yesterdayFiled: 0, yesterdayDisbursed: 0, janNew: 1, janFiled: 0, janDisbursed: 0 },
            { id: 4, name: 'Leelavati', login: true, todayNew: 1, todayFiled: 0, todayDisbursed: 0, yesterdayNew: 3, yesterdayFiled: 0, yesterdayDisbursed: 0, janNew: 12, janFiled: 0, janDisbursed: 0 },
            { id: 5, name: 'Bhoomika', login: true, todayNew: 0, todayFiled: 0, todayDisbursed: 0, yesterdayNew: 1, yesterdayFiled: 0, yesterdayDisbursed: 0, janNew: 9, janFiled: 0, janDisbursed: 0 },
            { id: 6, name: 'Sahana', login: true, todayNew: 0, todayFiled: 0, todayDisbursed: 0, yesterdayNew: 1, yesterdayFiled: 0, yesterdayDisbursed: 0, janNew: 3, janFiled: 0, janDisbursed: 0 },
            { id: 7, name: 'Sushmita', login: true, todayNew: 0, todayFiled: 0, todayDisbursed: 0, yesterdayNew: 1, yesterdayFiled: 0, yesterdayDisbursed: 0, janNew: 9, janFiled: 0, janDisbursed: 0 },
            { id: 8, name: 'Swathi', login: true, todayNew: 0, todayFiled: 0, todayDisbursed: 0, yesterdayNew: 1, yesterdayFiled: 0, yesterdayDisbursed: 0, janNew: 16, janFiled: 0, janDisbursed: 0 }
        ]);
    }, []);

    return (
        <div className="p-4 overflow-x-auto">
            <table className="min-w-full text-sm">
                <thead className='border-b border-black'>
                    <tr className="bg-gray-100 text-left border-b">
                        <th rowSpan="2" className="p-2">S No.</th>
                        <th rowSpan="2" className="p-2">Name</th>
                        <th rowSpan="2" className="p-2">Login</th>
                        <th colSpan="3" className="p-2 text-center">Today</th>
                        <th colSpan="3" className="p-2 text-center">Yesterday</th>
                        <th colSpan="3" className="p-2 text-center">January-2025</th>
                    </tr>
                    <tr className="bg-gray-100 text-left border-b">
                        {['New', 'Filed', 'Disbursed'].map((header) => (
                            <th key={header} className="p-2">{header}</th>
                        ))}
                        {['New', 'Filed', 'Disbursed'].map((header) => (
                            <th key={header} className="p-2">{header}</th>
                        ))}
                        {['New', 'Filed', 'Disbursed'].map((header) => (
                            <th key={header} className="p-2">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id} className="odd:bg-white even:bg-gray-50">
                            <td className="p-2 text-center">{row.id}</td>
                            <td className="p-2">{row.name}</td>
                            <td className="p-2 text-center">
                                <span className={`inline-block w-4 h-4 rounded-full ${row.login ? 'bg-green-600' : 'bg-red-600'}`}></span>
                            </td>
                            <td className="p-2 text-center bg-gray-200">{row.todayNew}</td>
                            <td className="p-2 text-center bg-gray-200">{row.todayFiled}</td>
                            <td className="p-2 text-center bg-gray-200">{row.todayDisbursed}</td>
                            <td className="p-2 text-center bg-gray-300">{row.yesterdayNew}</td>
                            <td className="p-2 text-center bg-gray-300">{row.yesterdayFiled}</td>
                            <td className="p-2 text-center bg-gray-300">{row.yesterdayDisbursed}</td>
                            <td className="p-2 text-center bg-gray-200">{row.janNew}</td>
                            <td className="p-2 text-center bg-gray-200">{row.janFiled}</td>
                            <td className="p-2 text-center bg-gray-200">{row.janDisbursed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;