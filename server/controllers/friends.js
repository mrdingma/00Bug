const FriendsModel = require("../models/Friends");

async function addNew(userId, email) {
  return FriendsModel.updateOne(
    { userId },
    { $addToSet: { friends: email } },
    { upsert: true }
  );
}

async function deleteOne(userId, email) {
  return FriendsModel.findOneAndUpdate(
    { userId },
    { $pull: { friends: { email } } }
  );
}

async function getAllByUser(userId) {
  return FriendsModel.find({ userId });
}

module.exports = {
  addNew,
  deleteOne,
  getAllByUser
};
