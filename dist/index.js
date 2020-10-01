module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(622);
const { exec } = __webpack_require__(129);

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


/***/ }),

/***/ 474:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const core = __webpack_require__(756);
const github = __webpack_require__(503);

const { run } = __webpack_require__(588);

const changeLogFile = core.getInput("changelog-file");
const url = core.getInput("db-url");
const action = core.getInput("action");

run(action, url, changeLogFile).catch((err) => core.setFailed(err));


/***/ }),

/***/ 756:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 503:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 129:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(474);
/******/ })()
;