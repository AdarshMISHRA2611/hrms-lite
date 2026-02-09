HRMS Lite – Full Stack Application

HRMS Lite is a lightweight Human Resource Management System built as part of a full-stack coding assessment.
It allows organizations to manage employees and track daily attendance efficiently through a clean and intuitive interface.

🚀 Live Demo

Frontend (React + Vite): [Add your deployed frontend URL here]

Backend (FastAPI): [Add your deployed backend URL here]

🛠️ Tech Stack
Frontend

React (Vite)

JavaScript

Axios

CSS (Custom, responsive UI)

Backend

FastAPI (Python)

SQLAlchemy

SQLite (can be extended to PostgreSQL)

Pydantic

Uvicorn

✨ Features
Employee Management

Add new employees with ID, name, email, and department

View all employees

Delete employees

Attendance Management

Mark daily attendance (Present / Absent)

Fetch attendance records by employee ID

Color-coded status tags:

🟢 Present

🔴 Absent

UI & UX

Clean, modern card-based layout

Responsive design

Subtle hover effects

Clear visual hierarchy

📂 Project Structure
HRMS_lite/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   └── routers/
│   │       ├── employees.py
│   │       └── attendance.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md

⚙️ How to Run Locally
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/hrms-lite.git
cd hrms-lite

2️⃣ Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
# source venv/bin/activate  # macOS/Linux

pip install -r requirements.txt
uvicorn app.main:app --reload


Backend will run at:

http://127.0.0.1:8000


Swagger API Docs:

http://127.0.0.1:8000/docs

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run at:

http://localhost:5173

🔌 API Endpoints Overview
Employees

GET /employees/ – List employees

POST /employees/ – Add employee

DELETE /employees/{emp_id} – Delete employee

Attendance

POST /attendance/ – Mark attendance

GET /attendance/{employee_id} – Fetch attendance records

🧠 Assumptions & Limitations

Authentication is not implemented (out of scope for assignment)

SQLite is used for simplicity; can be replaced with PostgreSQL/MySQL

Single-user usage assumed

No role-based access control

📈 Possible Enhancements

User authentication & roles (Admin / HR)

Monthly attendance reports

Export attendance to CSV

Pagination & search

Production database support

👨‍💻 Author

Adarsh Mishra
B.Tech CSE (AI & ML)
Full-Stack & AI Developer
