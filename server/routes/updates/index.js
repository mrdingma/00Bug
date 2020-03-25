const express = require("express");
const updates_controller = require("../../controllers/updates");

module.exports = () => {
  const router = express.Router();

  router.get("/user/:userid", async (req, res, next) => {
    try {
      const updates = await updates_controller.getAllByUser(req.params.userid);
      return res.send(updates);
    } catch (err) {
      return next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const update = await updates_controller.addNew(req.body);
      return res.send(update);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
