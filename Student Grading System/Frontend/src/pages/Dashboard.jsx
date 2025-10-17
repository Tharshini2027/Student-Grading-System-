import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const s = await axios.get("https://your-backend-url/api/students");
      const g = await axios.get("https://your-backend-url/api/grades");
      setStudents(s.data);
      setGrades(g.data);
    };
    fetchData();
  }, []);

  const totalStudents = students.length;
  const totalGrades = grades.length;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4 text-blue-600">Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Total Students</h3>
          <p className="text-2xl">{totalStudents}</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Total Grades</h3>
          <p className="text-2xl">{totalGrades}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
