import { useEffect, useState } from "react";
import API from "../api/api";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.get("/employees/").then((res) => setEmployees(res.data));
  }, []);

  const remove = async (id) => {
    await API.delete(`/employees/${id}`);
    setEmployees(employees.filter((e) => e.id !== id));
  };

  return (
    <div>
      <h2>Employees</h2>

      {employees.length === 0 && <p>No employees yet</p>}

      <ul>
        {employees.map((e) => (
          <li key={e.id}>
            {e.full_name} ({e.department})
            <button className="delete-btn" onClick={() => remove(e.id)}>
  Delete
</button>

          </li>
        ))}
      </ul>
    </div>
  );
}
