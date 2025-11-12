import React, { useState } from "react";
import InputFloating from "../InputFloating";
import Button from "../Button";

function AddressDetails({ customer, handleUpdate }) {
  const [formData, setFormData] = useState({
    address: customer.address || "",
    street: customer.street || "",
    locality: customer.locality || "",
    city: customer.city || "",
    state: customer.state || "",
    pin_code: customer.pin_code || "",

    address_proof_type: customer.address_proof_type || "",
    address_proof_number: customer.address_proof_number || "",
  });

  const updateAddressDetails = () => {
    handleUpdate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Details:", formData);
  };

  const handleInputFloatingChange = (name) => (value) => {
    handleChange({ target: { name, value } });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-2">
      {/* Current Address Section */}
      <div>
        <h3 className="font-semibold mb-3">Current Address</h3>
        <div className="flex flex-col gap-5">
          <InputFloating
            className="w-full"
            label="House No./Apartment"
            name="address"
            value={formData.address}
            onChange={handleInputFloatingChange("address")}
          />
          <InputFloating
            className="w-full"
            label="Street"
            name="street"
            value={formData.street}
            onChange={handleInputFloatingChange("street")}
          />
          <InputFloating
            className="w-full"
            label="Locality"
            name="locality"
            value={formData.locality}
            onChange={handleInputFloatingChange("locality")}
          />
          <InputFloating
            className="w-full"
            label="City"
            name="city"
            value={formData.city}
            onChange={handleInputFloatingChange("city")}
          />
          <InputFloating
            className="w-full"
            label="State"
            name="state"
            value={formData.state}
            onChange={handleInputFloatingChange("state")}
          />
          <InputFloating
            className="w-full"
            label="Pin Code"
            name="pin_code"
            value={formData.pin_code}
            onChange={handleInputFloatingChange("pin_code")}
          />
        </div>
      </div>

      {/* Similarly update Permanent Address, Office Address, Address Proof Sections with underscore_case keys */}

      {/* Address Proof Section */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Address Proof Type
        </label>
        <select
          name="address_proof_type"
          value={formData.address_proof_type}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              address_proof_type: e.target.value,
            }))
          }
          className="w-full p-2 border"
        >
          <option value="">Select Proof Type</option>
          <option value="Aadhaar">Aadhaar</option>
          <option value="Voter ID">Voter ID</option>
          <option value="Passport">Passport</option>
        </select>
      </div>

      <div>
        <InputFloating
          label="Address Proof Number"
          name="address_proof_number"
          value={formData.address_proof_number}
          onChange={handleInputFloatingChange("address_proof_number")}
          className="w-full"
        />
      </div>

      <div className="flex justify-end">
        <Button onClick={() => updateAddressDetails()} label={"Save"} />
      </div>
    </form>
  );
}

export default AddressDetails;
