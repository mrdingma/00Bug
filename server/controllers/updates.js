const UpdatesModel = require("../models/Updates");

async function addNew(data) {
  const update = new UpdatesModel(data);
  return update.save();
}

async function getAllByUser(userId) {
  return UpdatesModel.find({ $or: [{ userId }, { assignee: userId }] });
}

module.exports = {
  addNew,
  getAllByUser
};
