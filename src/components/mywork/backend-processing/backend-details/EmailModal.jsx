import Button from "@/components/Button";
import InputFloating from "@/components/InputFloating";
import { DeleteIcon, Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";

function EmailModal({ isOpen, onClose }) {
  const [emails, setEmails] = useState([""]);
  const [includeDocs, setIncludeDocs] = useState(true);
  useEffect(() => {
    if (!isOpen) {
      setEmails([""]);
      setIncludeDocs(true);
    }
  }, [isOpen]);
  if (!isOpen) return null;

  const handleEmailChange = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleAddEmail = (e) => {
    e.preventDefault();
    setEmails([...emails, ""]);
  };

  const handleDeleteEmail = (index) => {
    setEmails(emails.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4"
      style={{ marginTop: 0 }}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 absolute top-5">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="text-md font-medium">Email</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        {/* <div className="flex flex-col gap-2">
          <InputFloating
            label="Email"
            value={email}
            onChange={setEmail}
            className="w-full"
          />
          <Button className="bg-black-150" label="Send" />
        </div> */}
        <form className="flex flex-col gap-4">
          <table className="w-full">
            <tbody>
              {emails.map((email, idx) => (
                <tr key={idx}>
                  <td style={{ width: "80%" }}>
                    <InputFloating
                      label="Email"
                      value={email}
                      onChange={(val) => handleEmailChange(idx, val)}
                      className="w-full"
                      type="email"
                    />
                  </td>
                  <td style={{ width: "20%" }}>
                    {emails.length > 1 && (
                      <Trash2Icon
                        className="text-red-350"
                        onClick={() => handleDeleteEmail(idx)}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="flex items-center"
            // style={{ width: "40%", marginTop: "10px" }}
          >
            <input
              id="include_docs"
              type="checkbox"
              checked={includeDocs}
              onChange={() => setIncludeDocs(!includeDocs)}
              style={{ marginRight: "10px" }}
            />
            Include Documents
            <div className="add_email ml-auto">
              {/* <Button label="Add" onClick={handleAddEmail} className="mr-2" />
               */}
              <div
                onClick={handleAddEmail}
                className="underline text-blue-500 cursor-pointer"
              >
                Add
              </div>
            </div>
          </div>
          <div
            style={{ fontSize: "16px", display: "inline-flex", width: "100%" }}
          >
            <Button
              label="Submit"
              className="btn btn-primary"
              onClick={handleSubmit}
              type="button"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailModal;
