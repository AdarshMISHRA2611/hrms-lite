import { useState } from "react";
import API from "../api/api";

export default function AttendanceList() {
  const [empId, setEmpId] = useState("");
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const res = await API.get(`/attendance/${empId}`);
    setRecords(res.data);
  };

  return (
    <div>
      <h2>Attendance Records</h2>

      <input
        placeholder="Employee ID (numeric)"
        onChange={(e) => setEmpId(e.target.value)}
      />

      <button onClick={fetchRecords}>Fetch</button>

      <ul>
        {records.map((r) => (
          <li key={r.id}>
  {r.date}
  <span
    className={`status ${
      r.status === "Present" ? "status-present" : "status-absent"
    }`}
  >
    {r.status}
  </span>
</li>

        ))}
      </ul>
    </div>
  );
}
