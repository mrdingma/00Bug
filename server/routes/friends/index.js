const express = require("express");
const friends_controller = require("../../controllers/friends");

module.exports = () => {
  const router = express.Router();

  // GET friends by userId
  router.get("/user/:userid", async (req, res, next) => {
    try {
      const friends = await friends_controller.getAllByUser(req.params.userid);
      return res.send(friends);
    } catch (err) {
      return next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const friend = await friends_controller.addNew(
        req.body.userId,
        req.body.email
      );
      return res.send(friend);
    } catch (err) {
      return next(err);
    }
  });

  router.delete("/user/:userid", async (req, res, next) => {
    try {
      const deleteFriend = await friends_controller.deleteOne(
        req.params.userid,
        req.query.email
      );
      return res.sendStatus(200);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
