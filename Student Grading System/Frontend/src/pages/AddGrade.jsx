import { useState } from "react";
import axios from "axios";

const AddGrade = () => {
  const [grade, setGrade] = useState({
    studentId: "",
    subject: "",
    marks: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://your-backend-url/api/grades", grade);
    alert("Grade Added Successfully!");
    setGrade({ studentId: "", subject: "", marks: "" });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Add Grade</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-96">
        <input
          type="text"
          placeholder="Student ID"
          value={grade.studentId}
          onChange={(e) => setGrade({ ...grade, studentId: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Subject"
          value={grade.subject}
          onChange={(e) => setGrade({ ...grade, subject: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Marks"
          value={grade.marks}
          onChange={(e) => setGrade({ ...grade, marks: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Grade
        </button>
      </form>
    </div>
  );
};

export default AddGrade;
