const core = require("@actions/core");
const github = require("@actions/github");
const liquibase = require("liquibase");

const changelogFile = core.getInput("changelog-file");
const url = core.getInput("db-url");
const username = core.getInput("username");
const password = core.getInput("password");
const action = core.getInput("action");

const config = {
  changelogFile,
  url,
  username,
  password,
};

liquibase(config)
  .run(action)
  .then((result) => console.log(result))
  .catch(err => core.setFailed(err));
