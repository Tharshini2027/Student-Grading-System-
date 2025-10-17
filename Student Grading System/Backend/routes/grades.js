import express from "express";
import Grade from "../models/Grade.js";
import Student from "../models/Student.js";
const router = express.Router();

// Add Grade
router.post("/", async (req, res) => {
  const grade = new Grade(req.body);
  await grade.save();
  res.json({ message: "Grade added successfully" });
});

// View Grades
router.get("/", async (req, res) => {
  const grades = await Grade.find().populate("studentId");
  res.json(grades);
});

export default router;
