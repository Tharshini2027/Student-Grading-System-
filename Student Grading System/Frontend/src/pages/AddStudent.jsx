import { useState } from "react";
import axios from "axios";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    class: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://your-backend-url/api/students", student);
    alert("Student Added Successfully!");
    setStudent({ name: "", rollNumber: "", class: "" });
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-96">
        <input
          type="text"
          placeholder="Name"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Roll Number"
          value={student.rollNumber}
          onChange={(e) =>
            setStudent({ ...student, rollNumber: e.target.value })
          }
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Class"
          value={student.class}
          onChange={(e) => setStudent({ ...student, class: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
