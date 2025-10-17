import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">🎓 Student Grading System</h1>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add-student">Add Student</Link>
        <Link to="/add-grade">Add Grade</Link>
        <Link to="/view-grades">View Grades</Link>
      </div>
    </nav>
  );
};

export default Navbar;
