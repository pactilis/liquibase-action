const core = require("@actions/core");
const github = require("@actions/github");
const liquibase = require("liquibase");
const path = require("path");
const { exec } = require("child_process");

const changeLogFile = core.getInput("changelog-file");
const url = core.getInput("db-url");
const username = core.getInput("username");
const password = core.getInput("password");
const action = core.getInput("action");

function run(action, url, changeLogFile) {
  return new Promise((resolve, reject) => {
    exec(
      `${path.join(
        __dirname,
        "liquibase",
        "liquibase"
      )} --classpath="${path.join(
        __dirname,
        "drivers",
        "mssql-jdbc-jre14.jar"
      )}" --changeLogFile="${changeLogFile}" --url="${url}" --logLevel=info ${action}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        console.error(stderr);
        console.log(stdout);
        resolve()
      }
    );
  });
}

// const config = {
//   liquibase: path.join(__dirname, "liquibase", "liquibase"),
//   changeLogFile,
//   url: `"${url}"`,
//   username: `"${username}"`,
//   password: `"${password}"`,
// };

// liquibase(config)
run(action, url, changeLogFile)
  .then((result) => console.log(result))
  .catch((err) => core.setFailed(err));
