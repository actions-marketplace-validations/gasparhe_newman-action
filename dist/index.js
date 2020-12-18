module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 758:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const core = __webpack_require__(32)
const newman = __webpack_require__(204)

init()

async function init () {
  try {
    const get = core.getInput
    const required = { required: true }
    const apiBase = 'https://api.postman.com'
    const idRegex = /^[0-9]{7}-\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/

    const options = {
      apiKey: '?apikey=' + get('apiKey'),
      collection: get('collection', required),
      environment: get('environment'),
      globals: get('globals'),
      iterationCount: Number(get('iterationCount')),
      iterationData: get('iterationData'),
      folder: split(get('folder')),
      workingDir: get('workingDir'),
      insecureFileRead: safeParse(get('insecureFileRead')),
      timeout: Number(get('timeout')),
      timeoutRequest: Number(get('timeoutRequest')),
      timeoutScript: Number(get('timeoutScript')),
      delayRequest: Number(get('delayRequest')),
      ignoreRedirects: safeParse(get('ignoreRedirects')),
      insecure: safeParse(get('insecure')),
      bail: safeParse(get('bail')),
      suppressExitCode: safeParse(get('suppressExitCode')),
      reporters: split(get('reporters')),
      reporter: safeParse(get('reporter')),
      color: get('color'),
      sslClientCert: get('sslClientCert'),
      sslClientKey: get('sslClientKey'),
      sslClientPassphrase: get('sslClientPassphrase'),
      sslClientCertList: split(get('sslClientCertList')),
      sslExtraCaCerts: get('sslExtraCaCerts'),
      requestAgents: safeParse(get('requestAgents')),
      cookieJar: get('cookieJar')
    }

    if (!options.apiKey) {
      core.warning('No Postman API key provided.')
    }

    if (options.collection.match(idRegex)) {
      options.collection = `${apiBase}/collections/${options.collection}${options.apiKey}`
    }

    if (options.environment.match(idRegex)) {
      options.environment = `${apiBase}/environments/${options.environment}${options.apiKey}`
    }

    runNewman(options)
  } catch (error) {
    core.setFailed(error.message)
  }
}

function safeParse (obj) {
  if (obj) {
    try {
      return JSON.parse(obj)
    } catch (e) {
      core.warning('Bad object passed in config!')
    }
  }

  return null
}

function split (str) {
  return str.split(',')
}

function runNewman (options) {
  newman.run(options).on('done', (err, summary) => {
    if (!options.suppressExitCode && (err || summary.run.failures.length)) {
      core.setFailed('Newman run failed!' + (err || ''))
    }
  })
}


/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 204:
/***/ ((module) => {

module.exports = eval("require")("newman");


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
/******/ 	return __webpack_require__(758);
/******/ })()
;