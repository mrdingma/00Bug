const express = require("express");
const issuesRoute = require("./issues");
const projectsRoute = require("./projects");
const friendsRoute = require("./friends");
const updatesRoute = require("./updates");

module.exports = () => {
  const router = express.Router();

  router.use("/projects", projectsRoute());

  router.use("/issues", issuesRoute());

  router.use("/friends", friendsRoute());

  router.use("/updates", updatesRoute());

  return router;
};
