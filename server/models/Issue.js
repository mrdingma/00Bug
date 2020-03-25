const mongoose = require("mongoose");

const { Schema } = mongoose;

const IssueSchema = new Schema({
  userId: String,
  project: String,
  status: String,
  due_date: Date,
  summary: String,
  priority: String,
  type: String,
  picture: String,
  created_date: {
    type: Date,
    default: Date.now
  },
  description: String,
  assignee: [String],
  assigner: String,
  attachment: String,
  comments: [
    {
      userId: String,
      text: String,
      date: { type: Date, default: Date.now },
      attachment: String,
      picture: String
    }
  ]
});

module.exports = mongoose.model("Issue", IssueSchema);
