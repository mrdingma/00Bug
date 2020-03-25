const ProjectModel = require("../models/Project");

async function addNew(userId, project) {
  return ProjectModel.updateOne(
    { userId },
    { $addToSet: { name: project } },
    { upsert: true }
  );
}

async function deleteOne(userId, project) {
  return ProjectModel.findOneAndUpdate(
    { userId },
    { $pull: { name: { project } } }
  );
}

async function getAllByUser(userId) {
  return ProjectModel.find({ userId });
}

module.exports = {
  addNew,
  deleteOne,
  getAllByUser
};
