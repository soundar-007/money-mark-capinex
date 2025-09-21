// components/AddQueueModal.js
import React, { useEffect, useState } from "react";
import CustomDropdown from "../CustomDropdown";
import InputFloating from "../InputFloating";
import { SquarePen } from "lucide-react";
import Button from "../Button";
import { useOrganizations } from "@/hooks/useOrganization";
import {
  useCreateDialerQueue,
  useDialersList,
  useDialersQueue,
  useUpdateDialerQueue,
} from "@/hooks/useDialers";

export default function AddQueueModal({ isOpen, onClose }) {
  const [queue, setQueue] = useState("");
  const [extension, setExtension] = useState("");
  const [orgId, setOrgId] = useState("");
  const [dialerId, setDialerId] = useState("");
  const [aboutQueue, setAboutQueue] = useState("");
  const { data: organization, isLoading } = useOrganizations();
  const { mutate: createQueue, isPending } = useCreateDialerQueue();
  const { data: dialer } = useDialersList();
  const { data: queueData } = useDialersQueue();
  const { mutate: updateQueue } = useUpdateDialerQueue();
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setIsEditing(false);
      setEditId(null);
      setQueue("");
      setExtension("");
      setOrgId("");
      setDialerId("");
      setAboutQueue("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const orgOptions = organization?.map((o) => ({
    name: o.name,
    value: o.id,
  }));

  const dailerOptions = dialer?.map((d) => ({
    name: d.name,
    value: d.id,
  }));

  const handleCreateQueue = () => {
    const params = {
      name: queue,
      extension: extension,
      description: aboutQueue,
      dailer: dialerId,
      organization: orgId,
    };
    createQueue(params, {
      onSuccess: () => {
        setQueue("");
        setDialerId("");
        setOrgId("");
        setAboutQueue("");
        setExtension("");
      },
    });
  };

  const startEditing = (queueToEdit) => {
    setIsEditing(true);
    setEditId(queueToEdit.id);
    setQueue(queueToEdit.name || "");
    setExtension(queueToEdit.extension || "");
    setOrgId(queueToEdit.organization || "");
    setDialerId(queueToEdit?.dailer || "");
    setAboutQueue(queueToEdit.description || "");
  };

  const handleUpdateQueue = () => {
    const params = {
      id: editId,
      organization: orgId,
      dailer: dialerId,
      description: aboutQueue,
      name: queue,
      extension,
    };

    updateQueue(params, {
      onSuccess: () => {
        setIsEditing(false);
        setEditId(null);
        setQueue("");
        setExtension("");
        setOrgId("");
        setDialerId("");
        setAboutQueue("");
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 max-h-[90vh] overflow-auto absolute top-5">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="text-md font-medium">Add Queue</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form className="flex flex-wrap gap-4 mb-6">
          {/* First row: Queue and Extension */}
          <div className="w-full flex gap-4 mb-4">
            <div className="flex-1 min-w-[220px]">
              <InputFloating
                value={queue}
                onChange={setQueue}
                placeholder="Queue *"
                type="text"
                maxLength={50}
                required
                disabled={isEditing}
                className="w-full"
              />
            </div>
            <div className="flex-1 min-w-[220px]">
              <InputFloating
                value={extension}
                onChange={setExtension}
                placeholder="Extension *"
                type="text"
                maxLength={6}
                minLength={6}
                required
                disabled={isEditing}
                className="w-full"
              />
            </div>
          </div>

          {/* Second row: Organization and Dailer */}
          <div className="w-full flex gap-4 mb-4">
            <div className="flex-1 min-w-[220px]">
              <CustomDropdown
                label="Organization"
                options={orgOptions}
                value={orgId}
                onChange={setOrgId}
                className="w-full"
              />
            </div>
            <div className="flex-1 min-w-[220px]">
              <CustomDropdown
                label="Dailer *"
                options={dailerOptions}
                value={dialerId}
                onChange={setDialerId}
                className="w-full"
              />
            </div>
          </div>

          {/* Third row: About Queue full width */}
          <div className="w-full min-w-[220px]">
            <InputFloating
              value={aboutQueue}
              onChange={setAboutQueue}
              placeholder="About Queue *"
              type="text"
              required
              className="w-full"
            />
          </div>
        </form>

        {/* Submit Button */}
        <div className="text-right mb-4">
          {isEditing ? (
            <Button onClick={handleUpdateQueue} label="Update" />
          ) : (
            <Button onClick={handleCreateQueue} label="Add" />
          )}
        </div>

        {/* Table */}
        <div className="overflow-auto max-h-96 rounded border border-gray-300 shadow">
          <table className="min-w-full bg-gray-100">
            <thead className="bg-gray-300 text-gray-700 sticky top-0 z-10">
              <tr>
                <th className="py-2 px-4 text-left w-16">#</th>
                <th className="py-2 px-4 text-left w-40">Queue</th>
                <th className="py-2 px-4 text-left w-40">Extension</th>
                <th className="py-2 px-4 text-left w-48">Org</th>
                <th className="py-2 px-4 text-left">About Queue</th>
              </tr>
            </thead>
            <tbody>
              {queueData?.map((row, idx) => (
                <tr
                  key={row.id}
                  className={`border-t bg-white hover:bg-gray-50`}
                >
                  <td className="py-2 px-4 flex items-center gap-2">
                    {idx + 1}
                    <SquarePen
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => startEditing(row)}
                    />
                  </td>
                  <td className="py-2 px-4">{row.id}</td>
                  <td className="py-2 px-4">{row.extension}</td>
                  <td className="py-2 px-4">{row.organization}</td>
                  <td className="py-2 px-4">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
