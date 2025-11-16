import React, { useEffect, useState } from "react";
import { Copy, DeleteIcon, Trash2Icon, TrashIcon } from "lucide-react";
import Button from "../Button";
import { useDocumentTypes, useDocumentUpload } from "@/hooks/useApi";
import toast from "react-hot-toast";

function UploadDocumentModal({ isOpen, onClose , leadId }) {
  if (!isOpen) return null;

  const [files, setFiles] = useState([]);
  const [types, setTypes] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [otherNames, setOtherNames] = useState({});
  const [documentTypes,setDocumentTypes] = useState([]);
  const {data} = useDocumentTypes();
  const {mutate:upload} = useDocumentUpload(leadId)
 
  useEffect(()=>{
    setDocumentTypes(data)
  },[data])

  const handleOtherNameChange = (index, value) => {
    setOtherNames((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

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

  const handleTypeChange = (index, value) => {
    console.log(index,value)
    setTypes((prevTypes) => ({ ...prevTypes, [index]: value }));
  };

  const handleDeleteFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
    setTypes((prevTypes) => {
      const updated = { ...prevTypes };
      delete updated[index];
      return updated;
    });
    setOtherNames((prevOtherNames) => {
      const updated = { ...prevOtherNames };
      delete updated[index];
      return updated;
    });
  };

const handleSubmit = () => {
   if (files.length === 0) {
     toast.error("Please upload at least one document.");
     return;
   }

   for (let i = 0; i < files.length; i++) {
     const type = types[i];

     if (!type) {
       toast.error(`Please select a document type for "${files[i].name}".`);
       return;
     }

     if (type === "OTHER" && !otherNames[i]) {
       toast.error(
         `Please enter the name for the 'Other' document: "${files[i].name}".`
       );
       return;
     }
   }

  const formData = new FormData();
  const allFiles = [...files]
  allFiles.forEach((file, index) => {
    formData.append("document_file", file);
    formData.append("document_type", types[index] || "");
    if (types[index] === "OTHER") {
      formData.append("other_name", otherNames[index] || "");
    }
  });

  upload(formData,{onSuccess:()=>{
    setFiles([])
    setOtherNames({})
    setTypes({})
  }});
};



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8 absolute top-5 flex flex-col gap-2">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="text-md font-medium flex gap-2">
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
          <div className="mt-6 rounded-lg shadow border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b font-semibold text-gray-700 text-left align-middle w-1/3">
                      Document Name
                    </th>
                    <th className="py-3 px-4 border-b font-semibold text-gray-700 text-left align-middle w-1/4">
                      Type
                    </th>
                    <th className="py-3 px-4 border-b font-semibold text-gray-700 text-left align-middle w-1/3">
                      Other Name
                    </th>
                    <th className="py-3 px-4 border-b font-semibold text-gray-700 text-center align-middle w-1/12">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition">
                      <td className="py-3 px-4 align-middle">{file.name}</td>
                      <td className="py-3 px-4 align-middle">
                        <div className="relative">
                          <select
                            className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pr-10 shadow-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 appearance-none transition"
                            value={types[index] || ""}
                            onChange={(e) =>
                              handleTypeChange(index, e.target.value)
                            }
                          >
                            <option value="">Select Type</option>{" "}
                            {documentTypes?.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                          {/* Custom dropdown arrow */}
                          <svg
                            className="absolute top-1/2 right-2 -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        {types[index] === "OTHER" && (
                          <input
                            type="text"
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter Document Name"
                            value={otherNames[index] || ""}
                            onChange={(e) =>
                              handleOtherNameChange(index, e.target.value)
                            }
                          />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center align-middle">
                        <Trash2Icon
                          className="inline-block text-red-500 h-5 w-5 cursor-pointer hover:scale-110 transition-transform"
                          onClick={() => handleDeleteFile(index)}
                          aria-label="Delete document"
                          title="Delete document"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {files.length > 0 && (
          <Button
            onClick={() => handleSubmit()}
            className="ml-auto"
            label={"Submit"}
          />
        )}
      </div>
    </div>
  );
}

export default UploadDocumentModal;
