const mongoose = require("mongoose");

const { Schema } = mongoose;

const UpdatesSchema = new Schema({
  userId: String,
  type: String,
  text: String,
  attachment: {
    type: String,
    default: ""
  },
  project: {
    type: String,
    default: ""
  },
  assignee: [String],
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Update", UpdatesSchema);
