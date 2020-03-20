const mongoose = require("mongoose");

const { Schema } = mongoose;

const IssueSchema = new Schema({
  userId: String,
  project: String,
  status: String,
  due_date: Date,
  summary: String,
  priority: Number,
  type: String,
  created_date: {
    type: Date,
    default: Date.now
  },
  description: String,
  assignee: {
    type: String,
    default: ""
  },
  assigner: String,
  attachment: String
});

module.exports = mongoose.model("Issue", IssueSchema);
