const express = require('express');
const issuesRoute = require('./issues');
const projectsRoute = require('./projects');

module.exports = () => {
  const router = express.Router();

  router.use('/projects', projectsRoute());

  router.use('/issues', issuesRoute());

  return router;
};
