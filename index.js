const core = require("@actions/core");
const github = require("@actions/github");

const { run } = require("./db-change");

const changeLogFile = core.getInput("changelog-file");
const url = core.getInput("db-url");
const action = core.getInput("action");

run(action, url, changeLogFile).catch((err) => core.setFailed(err));
