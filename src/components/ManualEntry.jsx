'use client';

import React, { useState } from 'react';

const banks = [
  { id: 1, name: "HDFC Bank" },
  { id: 2, name: "ICICI Bank" },
  { id: 3, name: "SBI Bank" },
  { id: 4, name: "Axis Bank" },
];

export default function ManualEntry({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    bank: '',
    proposedRate: '',
    proposedEmi: '',
    corporate: '',
    scheme: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Manual Entry submitted:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex justify-center bg-black bg-opacity-50 z-50" 
      style={{ 
        alignItems: 'flex-start', 
        paddingTop: '0',
        marginTop: '0',
        top: '0'
      }}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 space-y-4 mt-5">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-5 pb-2 bg-gray-200">
          <h4 className="text-lg font-semibold text-gray-800">Add Manual Entry</h4>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-xl font-bold"
            aria-label="Close"
          >
            X
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-10 pb-5">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Bank Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank
              </label>
              <select
                value={formData.bank}
                onChange={(e) => handleInputChange('bank', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent appearance-none bg-white"
              >
                <option value="">Select Bank</option>
                {banks.map((bank) => (
                  <option key={bank.id} value={bank.id}>
                    {bank.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Proposed Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Proposed Rate
              </label>
              <input
                type="number"
                id="proposedRate"
                value={formData.proposedRate}
                onChange={(e) => handleInputChange('proposedRate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Enter proposed rate"
              />
            </div>

            {/* Proposed EMI */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Proposed EMI
              </label>
              <input
                type="number"
                id="proposedEmi"
                value={formData.proposedEmi}
                onChange={(e) => handleInputChange('proposedEmi', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Enter proposed EMI"
              />
            </div>

            {/* Corporate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Corporate
              </label>
              <input
                type="text"
                id="corporate"
                value={formData.corporate}
                onChange={(e) => handleInputChange('corporate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Enter corporate"
              />
            </div>

            {/* Scheme */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scheme (Optional)
              </label>
              <input
                type="text"
                id="scheme"
                value={formData.scheme}
                onChange={(e) => handleInputChange('scheme', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                placeholder="Enter scheme"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-black text-white font-medium py-2 px-4 rounded-md transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 