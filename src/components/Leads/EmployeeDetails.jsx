import React, { useState } from "react";
import InputFloating from "../InputFloating";
import Button from "../Button";

function EmployeeDetails() {
  const [formData, setFormData] = useState({
    employmentType: "Salaried",
    netSalary: "",
    grossSalary: "",
    totalWorkExp: "",
    totalWorkExpInCurrent: "",
    company: "",
    officialEmail: "",
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
    console.log("Updated Employee Details:", formData);
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
        name="netSalary"
        value={formData.netSalary}
        onChange={handleInputFloatingChange("netSalary")}
        className="w-full"
        type="number"
        required
      />

      <InputFloating
        label="Gross Salary *"
        name="grossSalary"
        value={formData.grossSalary}
        onChange={handleInputFloatingChange("grossSalary")}
        className="w-full"
        type="number"
        required
      />

      <InputFloating
        label="Total Work Exp."
        name="totalWorkExp"
        value={formData.totalWorkExp}
        onChange={handleInputFloatingChange("totalWorkExp")}
        className="w-full"
      />

      <InputFloating
        label="Total Work Exp (Current)"
        name="totalWorkExpInCurrent"
        value={formData.totalWorkExpInCurrent}
        onChange={handleInputFloatingChange("totalWorkExpInCurrent")}
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
        name="officialEmail"
        value={formData.officialEmail}
        onChange={handleInputFloatingChange("officialEmail")}
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
