const express = require("express");
const issue_controller = require("../../controllers/issue");

module.exports = () => {
  const router = express.Router();

  // GET issues by userId
  router.get("/user/:userid", async (req, res, next) => {
    try {
      const issues = await issue_controller.getAllByUser(req.params.userid);
      return res.send(issues);
    } catch (err) {
      return next(err);
    }
  });

  // GET issues by userId and projectId
  router.get("/user/:userid/project/:projectName", async (req, res, next) => {
    try {
      const issues = await issue_controller.getAllByUserAndProject(
        req.params.userid,
        req.params.projectName
      );
      return res.send(issues);
    } catch (err) {
      return next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
      const issue = await issue_controller.addNew(req.body);
      return res.send(issue);
    } catch (err) {
      return next(err);
    }
  });

  router.delete("/:issueid", async (req, res, next) => {
    try {
      const deleteIssue = await issue_controller.deleteOne(req.params.issueid);
      return res.sendStatus(200);
    } catch (err) {
      return next(err);
    }
  });

  router.put("/:issueid", async (req, res, next) => {
    try {
      const updateIssue = await issue_controller.update(req.body);
      return res.send(200);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
