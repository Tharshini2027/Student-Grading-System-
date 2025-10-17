import { useEffect, useState } from "react";
import axios from "axios";

const ViewGrades = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      const res = await axios.get("https://your-backend-url/api/grades");
      setGrades(res.data);
    };
    fetchGrades();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">View Grades</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-2">Student Name</th>
            <th className="p-2">Subject</th>
            <th className="p-2">Marks</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((g, i) => (
            <tr key={i} className="border text-center">
              <td className="p-2">{g.studentId?.name}</td>
              <td className="p-2">{g.subject}</td>
              <td className="p-2">{g.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewGrades;
