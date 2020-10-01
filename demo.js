const path = require("path");

const { run } = require("./db-change");

const url =
  "jdbc:sqlserver://localhost;database=mydb;username=sa;password=reallyStrongPwd123;";
const changeLogFile = "demo/changelog.xml";

run("update", url, changeLogFile)
  .catch((err) => core.setFailed(err));
