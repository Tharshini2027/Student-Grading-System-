import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  subject: String,
  marks: Number
});

export default mongoose.model("Grade", gradeSchema);
