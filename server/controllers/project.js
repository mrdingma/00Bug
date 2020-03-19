const ProjectModel = require("../models/Project");

async function addNew(data) {
  const project = new ProjectModel(data);
  return project.save();
}

async function getAllByUser(userId) {
  return ProjectModel.find({ userId });
}

module.exports = {
  addNew,
  getAllByUser
};
