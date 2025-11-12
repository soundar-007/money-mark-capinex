import React, { useState } from "react";
import InputFloating from "../InputFloating";
import Button from "../Button";

function EmployeeDetails({ customer, handleUpdate }) {
  const [formData, setFormData] = useState({
    employment_type: customer.employment_type,
    net_salary: customer.net_salary,
    gross_salary: customer.gross_salary,
    total_work_experience: customer.total_work_experience,
    current_work_experience: customer.current_work_experience,
    company: customer.company,
    official_email: customer.official_email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFloatingChange = (fieldName) => (value) => {
    handleChange({ target: { name: fieldName, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-5">
      <div>
        <label className="block text-sm font-semibold mb-1">
          Employment Type
        </label>
        <select
          name="employmentType"
          value={formData.employmentType}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="Salaried">Salaried</option>
          <option value="Self-Employed">Self-Employed</option>
          <option value="Freelancer">Freelancer</option>
        </select>
      </div>

      <InputFloating
        label="Net Salary *"
        name="net_salary"
        value={formData.net_salary}
        onChange={handleInputFloatingChange("net_salary")}
        className="w-full"
        type="number"
        required
      />

      <InputFloating
        label="Gross Salary *"
        name="gross_salary"
        value={formData.gross_salary}
        onChange={handleInputFloatingChange("gross_salary")}
        className="w-full"
        type="number"
        required
      />

      <InputFloating
        label="Total Work Exp."
        name="total_work_experience"
        value={formData.total_work_experience}
        onChange={handleInputFloatingChange("total_work_experience")}
        className="w-full"
      />

      <InputFloating
        label="Total Work Exp (Current)"
        name="current_work_experience"
        value={formData.current_work_experience}
        onChange={handleInputFloatingChange("current_work_experience")}
        className="w-full"
      />

      <InputFloating
        label="Company"
        name="company"
        value={formData.company}
        onChange={handleInputFloatingChange("company")}
        className="w-full"
      />

      <InputFloating
        label="Official Email"
        name="official_email"
        value={formData.official_email}
        onChange={handleInputFloatingChange("official_email")}
        className="w-full"
        type="email"
      />

      <div className="flex justify-end">
        <Button label={"Update"} />
      </div>
    </form>
  );
}

export default EmployeeDetails;
