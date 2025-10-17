import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  class: String
});

export default mongoose.model("Student", studentSchema);
