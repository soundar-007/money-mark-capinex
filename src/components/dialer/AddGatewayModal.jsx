import React, { useEffect, useState } from "react";
import CustomDropdown from "../CustomDropdown";
import InputFloating from "../InputFloating";
import Button from "../Button";
import { Trash2Icon } from "lucide-react";
import { useOrganizations } from "@/hooks/useOrganization";
import {
  useCreateDialerGateway,
  useDefaultGatewayDialer,
  useDeleteDialerGateway,
  useDialersGateway,
  useDialersList,
} from "@/hooks/useDialers";

const dummyOrganizations = [
  { code: "ORG1", label: "Top Management" },
  { code: "ORG2", label: "Branch Office" },
];

const dummyGateways = [
  {
    id: 1,
    name: "G001",
    slots: 32,
    extension: "300300",
    org: "Top Management",
    isDefault: true,
    ports: "+ Ports",
  },
  {
    id: 2,
    name: "g004",
    slots: 32,
    extension: "300321",
    org: "Top Management",
    isDefault: false,
    ports: "+ Ports",
  },
  {
    id: 1,
    name: "G001",
    slots: 32,
    extension: "300300",
    org: "Top Management",
    isDefault: true,
    ports: "+ Ports",
  },
  {
    id: 2,
    name: "g004",
    slots: 32,
    extension: "300321",
    org: "Top Management",
    isDefault: false,
    ports: "+ Ports",
  },
  {
    id: 1,
    name: "G001",
    slots: 32,
    extension: "300300",
    org: "Top Management",
    isDefault: true,
    ports: "+ Ports",
  },
  {
    id: 2,
    name: "g004",
    slots: 32,
    extension: "300321",
    org: "Top Management",
    isDefault: false,
    ports: "+ Ports",
  },
  {
    id: 1,
    name: "G001",
    slots: 32,
    extension: "300300",
    org: "Top Management",
    isDefault: true,
    ports: "+ Ports",
  },
  {
    id: 2,
    name: "g004",
    slots: 32,
    extension: "300321",
    org: "Top Management",
    isDefault: false,
    ports: "+ Ports",
  },
  {
    id: 1,
    name: "G001",
    slots: 32,
    extension: "300300",
    org: "Top Management",
    isDefault: true,
    ports: "+ Ports",
  },
  {
    id: 2,
    name: "g004",
    slots: 32,
    extension: "300321",
    org: "Top Management",
    isDefault: false,
    ports: "+ Ports",
  },
  {
    id: 1,
    name: "G001",
    slots: 32,
    extension: "300300",
    org: "Top Management",
    isDefault: true,
    ports: "+ Ports",
  },
  {
    id: 2,
    name: "g004",
    slots: 32,
    extension: "300321",
    org: "Top Management",
    isDefault: false,
    ports: "+ Ports",
  },
];

export default function AddGatewayModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [hostname, setHostname] = useState("");
  const [availableSlots, setAvailableSlots] = useState("");
  const [dialExtension, setDialExtension] = useState("");
  const [orgId, setOrgId] = useState("");
  const [dialerId, setDialerId] = useState("");
  const [make, setMake] = useState("");
  const { data: organization, isLoading } = useOrganizations();
  const { data: gatewayData } = useDialersGateway();
  const { mutate: createGateway } = useCreateDialerGateway();
  const { mutate: defaultGateway } = useDefaultGatewayDialer();
  const [data, setData] = useState(gatewayData);
  const { data: dialer } = useDialersList();
  const { mutate: deleteGateway } = useDeleteDialerGateway();
  const [isDeleting, setIsdeleting] = useState(false);
  useEffect(() => {
    setData(gatewayData);
  }, [gatewayData]);
  if (!isOpen) return null;

  const orgOptions = organization?.map((o) => ({
    name: o.name,
    value: o.id,
  }));

  const handleReset = () => {
    setName("");
    setHostname("");
    setAvailableSlots("");
    setDialExtension("");
    setOrgId("");
    setMake("");
    setDialerId("");
  };

  const handleGateway = (e) => {
    e.preventDefault();
    const params = {
      name,
      host_name: hostname,
      extension: dialExtension,
      available_slots: availableSlots,
      make,
      organization: orgId,
      dailer: dialerId,
    };
    console.log(params);
    createGateway(params, {
      onSuccess: () => {
        handleReset();
      },
    });
  };

  const handleDefault = (id) => {
    console.log(id, typeof id);
    setData((prev) =>
      prev.map((el) => {
        if (el.id == id) {
          return { ...el, is_default: true };
        } else {
          return { ...el, is_default: false };
        }
      })
    );
    defaultGateway(id);
  };

  const dailerOptions = dialer?.map((d) => ({
    name: d.name,
    value: d.id,
  }));

  const handleDelete = (id) => {
    if (!id || isDeleting) return;
    setIsdeleting(true);
    deleteGateway(id, {
      onSettled: () => {
        setIsdeleting(false);
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 max-h-[90vh] overflow-auto absolute top-5">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h4 className="text-md font-medium">Add Gateway</h4>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Form - Single Row */}
        <form onSubmit={handleGateway} className="flex flex-col gap-4 mb-6">
          <div>
            <InputFloating
              value={name}
              onChange={setName}
              placeholder="Name *"
              type="text"
              maxLength={10}
              required
              className="w-full"
            />
          </div>
          <div>
            <InputFloating
              value={hostname}
              onChange={setHostname}
              placeholder="Hostname *"
              type="text"
              required
              className="w-full"
            />
          </div>
          <div>
            <InputFloating
              value={availableSlots}
              onChange={setAvailableSlots}
              placeholder="Available Slots *"
              type="number"
              required
              className="w-full"
            />
          </div>
          <div>
            <InputFloating
              value={dialExtension}
              onChange={setDialExtension}
              placeholder="Extension *"
              type="text"
              required
              className="w-full"
            />
          </div>
          <div>
            <CustomDropdown
              label="Organization"
              options={orgOptions}
              value={orgId}
              onChange={setOrgId}
              className="w-full"
            />
          </div>
          <div>
            <CustomDropdown
              label="Dialer"
              options={dailerOptions}
              value={dialerId}
              onChange={setDialerId}
              className="w-full"
            />
          </div>
          <div>
            <InputFloating
              value={make}
              onChange={setMake}
              placeholder="Make"
              type="text"
              className="w-full"
            />
          </div>

          {/* Add Button */}
          <div className="self-end">
            <Button type="submit" label="Add" />
          </div>
        </form>

        {/* Table */}
        <div className="overflow-auto max-h-56 rounded border border-gray-300 shadow">
          <table className="min-w-full bg-gray-100">
            <thead className="bg-gray-300 text-gray-700 sticky top-0 z-10">
              <tr>
                <th className="py-2 px-4 w-12 text-left">#</th>
                <th className="py-2 px-4 w-40 text-left">Name</th>
                <th className="py-2 px-4 w-24 text-left">Slots</th>
                <th className="py-2 px-4 w-32 text-left">Extension</th>
                <th className="py-2 px-4 w-48 text-left">Org</th>
                <th className="py-2 px-4 w-16 text-center">Default</th>
                <th className="py-2 px-4 w-32 text-left">Ports</th>
                <th className="py-2 px-4 w-12 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((row, idx) => (
                <tr key={row.id} className="border-t bg-white hover:bg-gray-50">
                  <td className="py-2 px-4">{idx + 1}</td>
                  <td className="py-2 px-4">{row.name}</td>
                  <td className="py-2 px-4">{row.available_slots}</td>
                  <td className="py-2 px-4">{row.extension}</td>
                  <td className="py-2 px-4">{row.organization}</td>
                  <td className="py-2 px-4 text-center">
                    <input
                      type="radio"
                      checked={row.is_default}
                      onClick={() => handleDefault(row.id)}
                      name="defaultGateway"
                      className="mx-auto"
                      aria-label={`Set ${row.name} as default gateway`}
                    />
                  </td>
                  <td className="py-2 px-4">{row.make}</td>
                  <td className="py-2 px-4 text-center cursor-pointer">
                    <Trash2Icon
                      onClick={() => handleDelete(row.id)}
                      className="text-red-600"
                    />
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
