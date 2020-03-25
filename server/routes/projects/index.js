const express = require("express");
const project_controller = require("../../controllers/project");

module.exports = () => {
  const router = express.Router();

  router.get("/user/:userid", async (req, res, next) => {
    try {
      const projects = await project_controller.getAllByUser(req.params.userid);
      return res.send(projects);
    } catch (err) {
      return next(err);
    }
  });

  router.post("/user/:userid", async (req, res, next) => {
    try {
      const project = await project_controller.addNew(
        req.params.userid,
        req.body.project
      );
      return res.send(project);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
