import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import AddGrade from "./pages/AddGrade";
import ViewGrades from "./pages/ViewGrades";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/add-grade" element={<AddGrade />} />
          <Route path="/view-grades" element={<ViewGrades />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
