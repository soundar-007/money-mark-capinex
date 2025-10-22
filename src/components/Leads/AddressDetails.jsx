import React, { useState } from "react";
import InputFloating from "../InputFloating";
import Button from "../Button";

function AddressDetails() {
  const [formData, setFormData] = useState({
    currentAddress: "",
    currentStreet: "",
    currentLocality: "",
    currentCity: "",
    currentState: "",
    currentPinCode: "",
    permanentAddress: "",
    permanentStreet: "",
    permanentLocality: "",
    permanentCity: "",
    permanentState: "",
    permanentPinCode: "",
    officeAddress: "",
    officeStreet: "",
    officeLocality: "",
    officeCity: "",
    officeState: "",
    officePinCode: "",
    addressProofType: "",
    addressProofNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Details:", formData);
  };

  // Wrapper to adapt InputFloating output to handleChange event
  const handleInputFloatingChange = (name) => (value) => {
    handleChange({ target: { name, value } });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-2" >
      {/* Current Address Section */}
      <div>
        <h3 className="font-semibold mb-3">Current Address</h3>
        <div className="flex flex-col gap-5">
          <InputFloating
          className="w-full"
            label="House No./Apartment"
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleInputFloatingChange("currentAddress")}
          />
          <InputFloating
          className="w-full"
            label="Street"
            name="currentStreet"
            value={formData.currentStreet}
            onChange={handleInputFloatingChange("currentStreet")}
          />
          <InputFloating
          className="w-full"
            label="Locality"
            name="currentLocality"
            value={formData.currentLocality}
            onChange={handleInputFloatingChange("currentLocality")}
          />
          <InputFloating
          className="w-full"
            label="City"
            name="currentCity"
            value={formData.currentCity}
            onChange={handleInputFloatingChange("currentCity")}
          />
          <InputFloating
          className="w-full"
            label="State"
            name="currentState"
            value={formData.currentState}
            onChange={handleInputFloatingChange("currentState")}
          />
          <InputFloating
          className="w-full"
            label="Pin Code"
            name="currentPinCode"
            value={formData.currentPinCode}
            onChange={handleInputFloatingChange("currentPinCode")}
          />
        </div>
      </div>

      {/* Permanent Address Section */}
      <div>
        <h3 className="font-semibold mb-3">Permanent Address</h3>
        <div className="flex flex-col gap-5">
          <InputFloating
          className="w-full"
            label="House No./Apartment"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleInputFloatingChange("permanentAddress")}
          />
          <InputFloating
          className="w-full"
            label="Street"
            name="permanentStreet"
            value={formData.permanentStreet}
            onChange={handleInputFloatingChange("permanentStreet")}
          />
          <InputFloating
          className="w-full"
            label="Locality"
            name="permanentLocality"
            value={formData.permanentLocality}
            onChange={handleInputFloatingChange("permanentLocality")}
          />
          <InputFloating
          className="w-full"
            label="City"
            name="permanentCity"
            value={formData.permanentCity}
            onChange={handleInputFloatingChange("permanentCity")}
          />
          <InputFloating
          className="w-full"
            label="State"
            name="permanentState"
            value={formData.permanentState}
            onChange={handleInputFloatingChange("permanentState")}
          />
          <InputFloating
          className="w-full"
            label="Pin Code"
            name="permanentPinCode"
            value={formData.permanentPinCode}
            onChange={handleInputFloatingChange("permanentPinCode")}
          />
        </div>
      </div>

      {/* Office Address Section */}
      <div>
        <h3 className="font-semibold mb-3">Office Address</h3>
        <div className="flex flex-col gap-5">
          <InputFloating
          className="w-full"
            label="House No./Apartment"
            name="officeAddress"
            value={formData.officeAddress}
            onChange={handleInputFloatingChange("officeAddress")}
          />
          <InputFloating
          className="w-full"
            label="Street"
            name="officeStreet"
            value={formData.officeStreet}
            onChange={handleInputFloatingChange("officeStreet")}
          />
          <InputFloating
          className="w-full"
            label="Locality"
            name="officeLocality"
            value={formData.officeLocality}
            onChange={handleInputFloatingChange("officeLocality")}
          />
          <InputFloating
          className="w-full"
            label="City"
            name="officeCity"
            value={formData.officeCity}
            onChange={handleInputFloatingChange("officeCity")}
          />
          <InputFloating
          className="w-full"
            label="State"
            name="officeState"
            value={formData.officeState}
            onChange={handleInputFloatingChange("officeState")}
          />
          <InputFloating
          className="w-full"
            label="Pin Code"
            name="officePinCode"
            value={formData.officePinCode}
            onChange={handleInputFloatingChange("officePinCode")}
          />
        </div>
      </div>

      {/* Address Proof Section */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Address Proof Type
        </label>
        <select
          name="addressProofType"
          value={formData.addressProofType}
          onChange={handleChange}
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
          name="addressProofNumber"
          value={formData.addressProofNumber}
          onChange={handleInputFloatingChange("addressProofNumber")}
          className="w-full"
        />
      </div>

      <div className="flex justify-end">
       <Button label={'Save'}/>
      </div>
    </form>
  );
}

export default AddressDetails;
