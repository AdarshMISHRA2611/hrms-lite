import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";

export default function App() {
  return (
    <div className="page">
      <div className="container">
        <h1>HRMS Lite</h1>

        <div className="section">
          <EmployeeForm />
        </div>

        <div className="section">
          <EmployeeList />
        </div>

        <hr />

        <div className="section">
          <AttendanceForm />
        </div>

        <div className="section">
          <AttendanceList />
        </div>
      </div>
    </div>
  );
}
