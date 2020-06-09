const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  post: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date },
});

const Resume = mongoose.model("Resume", ResumeSchema);
module.exports = Resume;
