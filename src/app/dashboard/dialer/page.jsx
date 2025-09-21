"use client";
import React, { useState } from "react";
import CustomDropdown from "@/components/CustomDropdown";
import InputFloating from "@/components/InputFloating";
import IVRAudioModal from "@/components/dialer/IVRAudioModal";
import DispositionModal from "@/components/dialer/DispositionModal";
import Button from "@/components/Button";
import AddQueueModal from "@/components/dialer/AddQueueModal";
import AddGatewayModal from "@/components/dialer/AddGatewayModal";
import DialerUsers from "@/components/dialer/DialerUsers";
export default function Dialer() {
  const [searchTerm, setSearchTerm] = useState("");

  const [isIvrModalOpen, setIsIvrModalOpen] = useState(false);
  const [isDispositionsModalOpen, setIsDispositionsModalOpen] = useState(false);
  const [isQueueModalOpen, setIsQueueModalOpen] = useState(false);
  const [isGatewayModalOpen, setIsGatewayModalOpen] = useState(false);

  const handleQueueChange = (userId, newQueue) => {
    setUsers(
      tableData.map((tableData) =>
        tableData.id === userId ? { ...tableData, queue: newQueue } : tableData
      )
    );
  };

  return (
    <div className="p-4">
      {/* Add User Section */}
      <div className="flex flex-wrap justify-end gap-4 mb-6">
        <Button label="IVR Audio" onClick={() => setIsIvrModalOpen(true)} />
        <IVRAudioModal
          isOpen={isIvrModalOpen}
          onClose={() => setIsIvrModalOpen(false)}
        />
        <Button
          onClick={() => setIsDispositionsModalOpen(true)}
          label={"Add Dispositions"}
        />
        <DispositionModal
          isOpen={isDispositionsModalOpen}
          onClose={() => setIsDispositionsModalOpen(false)}
        />
        <Button label="Add Queue" onClick={() => setIsQueueModalOpen(true)} />
        <AddQueueModal
          isOpen={isQueueModalOpen}
          onClose={() => setIsQueueModalOpen(false)}
        />
        <Button
          onClick={() => setIsGatewayModalOpen(true)}
          label="Add Gateway"
        />
        <AddGatewayModal
          isOpen={isGatewayModalOpen}
          onClose={() => setIsGatewayModalOpen(false)}
        />
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <InputFloating
          label={"Search Here"}
          value={searchTerm}
          onChange={setSearchTerm}
          className=" w-full "
        />
      </div>

      {/* User Table */}
      <DialerUsers />
    </div>
  );
}
