// This file isn't transpilled, so must use common JS and ES5

// Register bbel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
