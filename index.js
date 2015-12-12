// TODO: ES6 feature-detection, so this can run without babel in environments that support it

require("babel-register");
module.exports = require('./lib.js');
