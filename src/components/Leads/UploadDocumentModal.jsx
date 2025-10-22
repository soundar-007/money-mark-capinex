import React, { useState } from "react";
import { Copy } from "lucide-react";

function UploadDocumentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 absolute top-5">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="text-md font-medium">
            Upload Doc <Copy />
          </h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-gray-400 bg-gray-100"
          }`}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <input
            id="fileInput"
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
          />
          <p className="text-gray-600">
            Drag & Drop documents here, or click to upload (Multiple allowed)
          </p>
        </div>

        {files.length > 0 && (
          <ul className="mt-4 text-sm text-gray-700">
            {files.map((file, index) => (
              <li key={index} className="border-b py-1">
                {file.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UploadDocumentModal;
