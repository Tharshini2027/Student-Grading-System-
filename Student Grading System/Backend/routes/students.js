import express from "express";
import Student from "../models/Student.js";
const router = express.Router();

// Add Student
router.post("/", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json({ message: "Student added successfully" });
});

// Get All Students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Update Student
router.put("/:id", async (req, res) => {
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Student updated successfully" });
});

// Delete Student
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted successfully" });
});

export default router;
