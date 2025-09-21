// components/IVRAudioModal.js
import React, { useState } from "react";
import CustomDropdown from "../CustomDropdown";
import InputFloating from "../InputFloating";
import { Trash2Icon } from "lucide-react";
import Button from "../Button";

const dummyDispositions = [
  { code: "Backlog", label: "Backlog" },
  { code: "NotInterested", label: "Not Interested" },
  { code: "DND", label: "DND" },
];

const dummyRows = [
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
  {
    id: 1,
    description: "loan assistance",
    disposition1: "",
    disposition2: "NotInterested",
    disposition3: "DND",
  },
  {
    id: 2,
    description: "HDFC Personal Loans",
    disposition1: "Backlog",
    disposition2: "",
    disposition3: "",
  },
];

export default function IVRAudioModal({ isOpen, onClose }) {
  const [description, setDescription] = useState("");
  const [dis1, setDis1] = useState("");
  const [dis2, setDis2] = useState("");
  const [dis3, setDis3] = useState("");

  if (!isOpen) return null;

  const dropdownOptions = dummyDispositions.map((d) => ({
    name: d.label,
    value: d.code,
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 top-5 absolute">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-2">
          <h4 className="text-md font-medium">IVR Audio</h4>
          <button
            className="text-gray-500 hover:text-red-500 text-xl font-bold"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* Modal Sub-Header */}
        <div className="mb-4">
          <h4 className="text-md">
            <a
              href="https://www.3cx.com/docs/converting-wav-file/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              Please process the audio file prior to uploading.
            </a>
          </h4>
        </div>

        {/* Drag & Drop Box (dotted rectangle, no upload field) + Description */}
        <form className="flex items-center flex-wrap gap-4 mb-6">
          <div className="flex-1 relative">
            <input
              type="file"
              // hidden
              className="absolute inset-0 w-full h-12 opacity-0 cursor-pointer z-10"
            />
            <div className="w-full h-12 border-2 border-dotted border-gray-400 rounded flex items-center justify-center bg-gray-50">
              <span className="text-gray-500 font-medium">
                Drag &amp; Drop Docs
              </span>
            </div>
          </div>

          <div className="flex-1">
            <InputFloating
              className="w-full"
              value={description}
              placeholder="Description"
              onChange={setDescription}
              type="text"
            />
          </div>
        </form>

        {/* Dispositions Row (using CustomDropdown) */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1">
            <CustomDropdown
              label="Disposition1"
              options={dropdownOptions}
              value={dis1}
              onChange={setDis1}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <CustomDropdown
              label="Disposition2"
              options={dropdownOptions}
              value={dis2}
              onChange={setDis2}
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <CustomDropdown
              label="Disposition3"
              options={dropdownOptions}
              value={dis3}
              onChange={setDis3}
              className="w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right mb-6">
          <Button label="Submit" />
        </div>

        <div className="overflow-auto max-h-96 rounded shadow border ">
          <table className="min-w-full ">
            <thead className=" bg-gray-300 text-gray-700 sticky top-0 z-10">
              <tr>
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Disposition1</th>
                <th className="py-2 px-4">Disposition2</th>
                <th className="py-2 px-4">Disposition3</th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {dummyRows.map((row, index) => (
                <tr key={`${row.id}-${index}`} className="border-t ">
                  <td className="py-2 px-4">{row.id}</td>
                  <td className="py-2 px-4">{row.description}</td>
                  <td className="py-2 px-4">{row.disposition1}</td>
                  <td className="py-2 px-4">{row.disposition2}</td>
                  <td className="py-2 px-4">{row.disposition3}</td>
                  <td className="py-2 px-4">
                    <Trash2Icon className="text-red-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
