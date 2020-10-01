const liquibase = require("liquibase");
const path = require("path");

const config = {
  liquibase: path.join(__dirname, "liquibase", "liquibase"),
  changeLogFile: "demo/changelog.xml",
  url: '"jdbc:sqlserver://localhost;database=mydb;"',
  username: "sa",
  password: "reallyStrongPwd123",
  // classpath: "drivers/mssql-jdbc-jre14.jar",
};

liquibase(config)
  .run("update")
  .then((result) => console.log("Success", result))
  .catch((error) => console.error("Failed", error));
