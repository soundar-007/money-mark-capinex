import React, { useState } from "react";
import InputFloating from "../InputFloating";
import Button from "../Button";

function PersonalDetails() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pan: "",
    uid: "",
    fatherName: "",
    motherName: "",
    gender: "Male",
    maritalStatus: "Single",
    dob: "",
    residenceType: "Owned",
    qualification: "Graduate",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Customer:", formData);
  };

  const handleInputFloatingChange = (name) => (value) => {
    handleChange({ target: { name, value } });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-3">
      <div className="flex flex-col gap-5">
        <InputFloating
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputFloatingChange("firstName")}
          className="w-full"
        />
        <InputFloating
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputFloatingChange("lastName")}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-5">
        <InputFloating
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputFloatingChange("email")}
          className="w-full"
          type="email"
        />
        <InputFloating
          label="PAN"
          name="pan"
          value={formData.pan}
          onChange={handleInputFloatingChange("pan")}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-5">
        <InputFloating
          label="UID"
          name="uid"
          value={formData.uid}
          onChange={handleInputFloatingChange("uid")}
          className="w-full"
        />
        <InputFloating
          label="Father Name"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleInputFloatingChange("fatherName")}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-5">
        <InputFloating
          label="Mother Name"
          name="motherName"
          value={formData.motherName}
          onChange={handleInputFloatingChange("motherName")}
          className="w-full"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border "
        >
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-5">
        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          className="w-full p-2 border "
        >
          <option>Single</option>
          <option>Married</option>
        </select>
        <InputFloating
          //   label="DOB"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleInputFloatingChange("dob")}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-5">
        <select
          name="residenceType"
          value={formData.residenceType}
          onChange={handleChange}
          className="w-full p-2 border "
        >
          <option>Owned</option>
          <option>Rented</option>
        </select>
        <select
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="w-full p-2 border "
        >
          <option>Graduate</option>
          <option>Post Graduate</option>
          <option>PhD</option>
        </select>
      </div>

      <div className="flex justify-end">
        <Button label={"Update"} />
      </div>
    </form>
  );
}

export default PersonalDetails;
