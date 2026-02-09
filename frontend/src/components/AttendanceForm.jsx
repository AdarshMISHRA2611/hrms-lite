import { useState } from "react";
import API from "../api/api";

export default function AttendanceForm() {
  const [data, setData] = useState({
    employee_id: "",
    date: "",
    status: "Present",
  });

  const submit = async () => {
  try {
    if (!data.employee_id || !data.date) {
      alert("Employee ID and Date are required");
      return;
    }

    const payload = {
      employee_id: Number(data.employee_id),
      date: data.date,
      status: data.status,
    };

    if (isNaN(payload.employee_id) || payload.employee_id <= 0) {
      alert("Employee ID must be a valid number");
      return;
    }

    await API.post("/attendance/", payload);

    alert("Attendance marked successfully");
  } catch (err) {
    console.error("Attendance error:", err.response?.data);
    alert(
      err.response?.data?.detail
        ? JSON.stringify(err.response.data.detail)
        : "Error marking attendance"
    );
  }
};


  return (
    <div>
      <h2>Mark Attendance</h2>

      <input
        placeholder="Employee ID (numeric)"
        onChange={(e) => setData({ ...data, employee_id: e.target.value })}
      />

      <input
        type="date"
        onChange={(e) => setData({ ...data, date: e.target.value })}
      />

      <select onChange={(e) => setData({ ...data, status: e.target.value })}>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <button onClick={submit}>Mark</button>
    </div>
  );
}
