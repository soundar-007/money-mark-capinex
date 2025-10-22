import React, { useState } from "react";
import InputFloating from "../InputFloating";
import Button from "../Button";

function BankDetails() {
  const [formData, setFormData] = useState({
    ifcsCode: "",
    nameAsPerBank: "",
    customerAccountNumber: "",
    bankName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFloatingChange = (name) => (value) => {
    handleChange({ target: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bank Details:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputFloating
        label="IFCS Code"
        name="ifcsCode"
        value={formData.ifcsCode}
        onChange={handleInputFloatingChange("ifcsCode")}
        className="w-full"
      />

      <InputFloating
        label="Name (As Per Bank)"
        name="nameAsPerBank"
        value={formData.nameAsPerBank}
        onChange={handleInputFloatingChange("nameAsPerBank")}
        className="w-full"
      />

      <InputFloating
        label="Account No."
        name="customerAccountNumber"
        value={formData.customerAccountNumber}
        onChange={handleInputFloatingChange("customerAccountNumber")}
        className="w-full"
      />

      <InputFloating
        label="Bank Name"
        name="bankName"
        value={formData.bankName}
        onChange={handleInputFloatingChange("bankName")}
        className="w-full"
      />

      <div className="flex justify-end">
        <Button label={"Update"} />
      </div>
    </form>
  );
}

export default BankDetails;
