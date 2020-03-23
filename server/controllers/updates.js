const UpdatesModel = require("../models/Updates");

async function addNew(data) {
  const issue = new UpdatesModel(data);
  return issue.save();
}

async function getAllByUser(userId) {
  return UpdatesModel.find({ $or: [{ userId }, { assignee: userId }] });
}

module.exports = {
  addNew,
  getAllByUser
};
