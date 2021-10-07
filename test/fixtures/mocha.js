let testContext;

beforeEach(() => {
  testContext = {};
});

"use strict";

const { host } = require("@jsdevtools/host-environment");

if (host.browser) {
  mocha.setup("bdd");
  mocha.fullTrace();
  mocha.asyncOnly();
  mocha.checkLeaks();
  mocha.globals(["$0", "$1", "$2", "$3", "$4", "$5", "ga", "gaplugins", "gaGlobal", "gaData"]);
}

beforeEach(() => {
  // Most of our tests perform multiple AJAX requests,
  // so we need to increase the timeouts to allow for that
  testContext.currentTest.timeout(20000);
  testContext.currentTest.slow(10000);
});
