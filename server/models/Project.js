const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProjectSchema = new Schema({
  userId: String,
  name: [String]
});

module.exports = mongoose.model("Project", ProjectSchema);
