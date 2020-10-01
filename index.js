const core = require("@actions/core");
const github = require("@actions/github");
const liquibase = require("liquibase");
const path = require('path')

const changeLogFile = core.getInput("changelog-file");
const url = core.getInput("db-url");
const username = core.getInput("username");
const password = core.getInput("password");
const action = core.getInput("action");

const config = {
  liquibase: path.join(__dirname, 'liquibase', 'liquibase'),
  changeLogFile,
  url: `"${url}"`,
  username: `"${username}"`,
  password: `"${password}"`,
};

liquibase(config)
  .run(action)
  .then((result) => console.log(result))
  .catch(err => core.setFailed(err));
