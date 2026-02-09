import { useState } from "react";
import API from "../api/api";

export default function EmployeeForm() {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const submit = async () => {
    try {
      const cleanedForm = {
        employee_id: form.employee_id.trim(),
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        department: form.department.trim(),
      };

      if (
        !cleanedForm.employee_id ||
        !cleanedForm.full_name ||
        !cleanedForm.email ||
        !cleanedForm.department
      ) {
        alert("All fields are required");
        return;
      }

      await API.post("/employees/", cleanedForm);
      alert("Employee added successfully");
      window.location.reload();
    } catch (err) {
      console.error(err.response?.data);
      alert("Invalid input. Please check fields.");
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <input
        placeholder="Employee ID"
        value={form.employee_id}
        onChange={(e) => setForm({ ...form, employee_id: e.target.value })}
      />

      <input
        placeholder="Full Name"
        value={form.full_name}
        onChange={(e) => setForm({ ...form, full_name: e.target.value })}
      />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        placeholder="Department"
        value={form.department}
        onChange={(e) => setForm({ ...form, department: e.target.value })}
      />

      <br />
      <button onClick={submit}>Add</button>
    </div>
  );
}
