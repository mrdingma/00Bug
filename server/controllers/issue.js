const IssueModel = require("../models/Issue");

async function addNew(data) {
  const issue = new IssueModel(data);
  return issue.save();
}

async function getOne(issueId) {
  return IssueModel.findOne({ _id: issueId });
}

async function deleteOne(issueId) {
  const result = IssueModel.remove({ _id: issueId });
  return result;
}

async function getAllByUser(userId) {
  return IssueModel.find({ $or: [{ userId }, { assignee: userId }] });
}

async function getAllByUserAndProject(userId, project) {
  return IssueModel.find({
    $or: [
      { userId, project },
      { assignee: userId, project }
    ]
  });
}

async function addComment(_id, status, comment) {
  const query = { _id };
  const update = {
    $set: { status },
    $push: { comments: comment }
  };
  return IssueModel.findOneAndUpdate(query, update);
}

async function update(issueId, data) {
  const item = await getOne(issueId);

  // if can't find item, throw error
  if (!item) throw new Error("Could not find the requested item");

  Object.keys(data).forEach(key => {
    item[key] = data[key];
  });

  return item.save();
}

module.exports = {
  addNew,
  addComment,
  getOne,
  update,
  deleteOne,
  getAllByUser,
  getAllByUserAndProject
};
