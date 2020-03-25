const express = require("express");
const issue_controller = require("../../controllers/issue");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary_config = require("../../config/cloudinary");
const _ = require("lodash");

// cloudinary setup
cloudinary.config({
  cloud_name: cloudinary_config.CLOUD_NAME,
  api_key: cloudinary_config.API_KEY,
  api_secret: cloudinary_config.API_SECRET
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});

const parser = multer({ storage });

module.exports = () => {
  const router = express.Router();

  // GET issues by userId
  router.get("/user/:userid", async (req, res, next) => {
    try {
      let issues;

      if (Object.keys(req.query).length > 0) {
        issues = await issue_controller.getAllByUserSorted(
          req.params.userid,
          Number(req.query.due_date)
        );
        return res.send(issues);
      }
      issues = await issue_controller.getAllByUser(req.params.userid);
      return res.send(issues);
    } catch (err) {
      return next(err);
    }
  });

  //GET issues by _id
  router.get("/", async (req, res, next) => {
    try {
      const issue = await issue_controller.getOne(req.query.id);
      return res.send(issue);
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

  router.post("/", parser.single("image"), async (req, res, next) => {
    try {
      const payload = _.assignIn(req.body, {
        attachment: req.file ? req.file.url : ""
      });
      payload.assignee = payload.assignee.split(",");

      const issue = await issue_controller.addNew(payload);
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

  // PUT add comment to an issue
  router.put(
    "/:issueid/comment",
    parser.single("image"),
    async (req, res, next) => {
      try {
        const comment = {
          userId: req.body.userId,
          text: req.body.text,
          attachment: req.file ? req.file.url : "",
          picture: req.body.picture
        };

        const updateIssue = await issue_controller.addComment(
          req.params.issueid,
          req.body.status,
          comment
        );

        const updatedIssue = await issue_controller.getOne(req.params.issueid);

        return res.send(updatedIssue);
      } catch (err) {
        return next(err);
      }
    }
  );

  return router;
};
