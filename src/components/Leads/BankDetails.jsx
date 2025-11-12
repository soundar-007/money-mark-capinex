import React, { useState } from "react";
import InputFloating from "../InputFloating";
import Button from "../Button";

function BankDetails({ customer, handleUpdate }) {
  const [formData, setFormData] = useState({
    ifsc_code: customer.ifsc_code,
    account_holder_name: customer.account_holder_name,
    account_number: customer.account_number,
    bank_name: customer.bank_name,
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
      console.log("Address Details:", formData);
    };
  const updateBankDetails = (e) => {
    e.preventDefault();
    handleUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputFloating
        label="IFCS Code"
        name="ifcsCode"
        value={formData.ifsc_code}
        onChange={handleInputFloatingChange("ifsc_code")}
        className="w-full"
      />

      <InputFloating
        label="Name (As Per Bank)"
        name="account_holder_name"
        value={formData.account_holder_name}
        onChange={handleInputFloatingChange("account_holder_name")}
        className="w-full"
      />

      <InputFloating
        label="Account No."
        name="account_number"
        value={formData.account_number}
        onChange={handleInputFloatingChange("account_number")}
        className="w-full"
      />

      <InputFloating
        label="Bank Name"
        name="bank_name"
        value={formData.bank_name}
        onChange={handleInputFloatingChange("bank_name")}
        className="w-full"
      />

      <div className="flex justify-end">
        <Button onClick={(e) => updateBankDetails(e)} label={"Update"} />
      </div>
    </form>
  );
}

export default BankDetails;
