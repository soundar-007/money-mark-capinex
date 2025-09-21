// components/DispositionModal.js
import React, { useState } from "react";
import CustomDropdown from "../CustomDropdown";
import Button from "../Button";

const dummyOrganizations = [
  { code: "ORG1", label: "Organization 1" },
  { code: "ORG2", label: "Organization 2" },
  { code: "ORG3", label: "Organization 3" },
];

const dummyDispositions = [
  { code: "Backlog", label: "Backlog" },
  { code: "NotInterested", label: "Not Interested" },
  { code: "DND", label: "DND" },
];

export default function DispositionModal({ isOpen, onClose }) {
  const [orgId, setOrgId] = useState("");
  const [dis1, setDis1] = useState("");
  const [dis2, setDis2] = useState("");
  const [dis3, setDis3] = useState("");
  const [dis4, setDis4] = useState("");
  const [dis5, setDis5] = useState("");
  const [dis6, setDis6] = useState("");
  const [dis7, setDis7] = useState("");
  const [dis8, setDis8] = useState("");

  if (!isOpen) return null;

  const orgOptions = dummyOrganizations.map((o) => ({
    name: o.label,
    value: o.code,
  }));
  const dispositionOptions = dummyDispositions.map((d) => ({
    name: d.label,
    value: d.code,
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 max-h-[90vh] overflow-auto absolute top-5">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="text-md font-medium">Disposition</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Organization */}
          <div className="w-full sm:w-1/2">
            <CustomDropdown
              label="Organization"
              options={orgOptions}
              value={orgId}
              onChange={setOrgId}
              className="w-full"
            />
          </div>

          {/* Dispositions grid 2 columns on md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <CustomDropdown
              label="Disposition1"
              options={dispositionOptions}
              value={dis1}
              onChange={setDis1}
              className="w-full"
            />
            <CustomDropdown
              label="Disposition2"
              options={dispositionOptions}
              value={dis2}
              onChange={setDis2}
              className="w-full"
            />
            <CustomDropdown
              label="Disposition3"
              options={dispositionOptions}
              value={dis3}
              onChange={setDis3}
              className="w-full"
            />
            <CustomDropdown
              label="Disposition4"
              options={dispositionOptions}
              value={dis4}
              onChange={setDis4}
              className="w-full"
            />
            <CustomDropdown
              label="Disposition5"
              options={dispositionOptions}
              value={dis5}
              onChange={setDis5}
              className="w-full"
            />
            <CustomDropdown
              label="Disposition6"
              options={dispositionOptions}
              value={dis6}
              onChange={setDis6}
              className="w-full"
            />
            <CustomDropdown
              label="Disposition7"
              options={dispositionOptions}
              value={dis7}
              onChange={setDis7}
              className="w-full"
            />
            <CustomDropdown
              label="Disposition8"
              options={dispositionOptions}
              value={dis8}
              onChange={setDis8}
              className="w-full"
            />
          </div>
        </form>

        {/* Submit button */}
        <div className="mt-8 text-right">
          <Button label="Submit" />
        </div>
      </div>
    </div>
  );
}
