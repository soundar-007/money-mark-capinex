import React, { useEffect, useState } from "react";
import InputFloating from "../InputFloating";
import Button from "../Button";
import { useGenders, useMarital } from "@/hooks/useApi";
import CustomDropdown from "../CustomDropdown";

function PersonalDetails({ customer, handleUpdate }) {
  const [formData, setFormData] = useState({
    first_name: customer.first_name || "FNAME",
    last_name: customer.last_name || "LNAME",
    email: customer?.email || "",
    pan: customer.pan,
    uid: customer.uid,
    father_name: customer.father_name,
    mother_name: customer.mother_name,
    gender: customer.gender,
    marital_status: customer.marital_status,
    dob: customer.dob,
    residence_type: customer.residence_type,
    qualification: customer.qualification,
  });
  const [genderId, setGenderId] = useState("");
  const [gender, setGender] = useState([]);
  const { data: genders } = useGenders();
  const [maritalId, setMaritalId] = useState("");
  const [marital, setMarital] = useState([]);
  const { data: maritals } = useMarital();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFloatingChange = (name) => (value) => {
    handleChange({ target: { name, value } });
  };

  const updatePersonalDetails = (e) => {
    e.preventDefault();
    handleUpdate(formData);
  };

  useEffect(() => {
    setGender(() => {
      return genders?.map((el) => ({ name: el.label, id: el.id }));
    });
  }, [genders]);

  useEffect(() => {
    setMarital(() => {
      return maritals?.map((el) => ({ name: el.label, id: el.id }));
    });
  }, [maritals]);

  return (
    <form className="space-y-6 mt-3">
      <div className="flex flex-col gap-5">
        <InputFloating
          label="First Name"
          name="firstName"
          value={formData.first_name}
          onChange={handleInputFloatingChange("first_name")}
          className="w-full"
        />
        <InputFloating
          label="Last Name"
          name="lastName"
          value={formData.last_name}
          onChange={handleInputFloatingChange("last_name")}
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
          value={formData.father_name}
          onChange={handleInputFloatingChange("father_name")}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-5">
        <InputFloating
          label="Mother Name"
          name="motherName"
          value={formData.mother_name}
          onChange={handleInputFloatingChange("mother_name")}
          className="w-full"
        />
        <CustomDropdown
          label="Gender"
          options={gender}
          value={genderId}
          onChange={setGenderId}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-5">
        <CustomDropdown
          label="Marital Status"
          options={marital}
          value={maritalId}
          onChange={setMaritalId}
          className="w-full"
        />
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
          value={formData.residence_type}
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
        <Button onClick={(e) => updatePersonalDetails(e)} label={"Update"} />
      </div>
    </form>
  );
}

export default PersonalDetails;
