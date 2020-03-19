const mongoose = require("mongoose");

const { Schema } = mongoose;

const FriendsSchema = new Schema({
  userId: String,
  friends: [String]
});

module.exports = mongoose.model("Friends", FriendsSchema);
