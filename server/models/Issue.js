const mongoose = require('mongoose');

const { Schema } = mongoose;

const IssueSchema = new Schema({
  userId: Number,
  project: String,
  status: String,
  due_date: Date,
  summary: String,
  priority: Number,
  type: String,
  created_date: {
    type: Date,
    default: Date.now,
  },
  description: String,
  assignee: {
    name: String,
    default: '',
  },
  assigner: {
    name: String,
  },
  attachments: {
    type: Array,
  },
});

module.exports = mongoose.model('Issue', IssueSchema);
