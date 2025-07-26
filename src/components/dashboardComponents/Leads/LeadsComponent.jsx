"use client";
import React, { useState } from "react";
import LeadsFilter from "./LeadsFilter";
import LeadsTable from "./LeadsTable";

function LeadsComponent() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState("Org");
  const [selectedLoan, setSelectedLoan] = useState(null);

  const handleStatusClick = (status) => {
    setSelectedStatus(status === selectedStatus ? null : status);
  };

  const handleDetailClick = (detail) => {
    setSelectedDetail(detail === selectedDetail ? null : detail);
  };

  const handleLoanClick = (loan) => {
    setSelectedLoan(loan === selectedLoan ? null : loan);
  };
  return (
    <div>
      <LeadsFilter
        selectedStatus={selectedStatus}
        setSelectedStatus={handleStatusClick}
        selectedDetail={selectedDetail}
        setSelectedDetail={handleDetailClick}
        selectedLoan={selectedLoan}
        setSelectedLoan={handleLoanClick}
      />
      <LeadsTable
        selectedDetail={selectedDetail}
        selectedStatus={selectedStatus}
        selectedLoan={selectedLoan}
      />
    </div>
  );
}

export default LeadsComponent;
