const path = require("path");
const { exec } = require("child_process");

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
        "mssql-jdbc-7.4.1.jre8.jar"
      )}" --changeLogFile="${changeLogFile}" --url="${url}" --logLevel=info ${action}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        console.error(stderr);
        console.log(stdout);
        resolve();
      }
    );
  });
}

module.exports = {
    run
}
