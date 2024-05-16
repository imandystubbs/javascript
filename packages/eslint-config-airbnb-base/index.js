const bestPractices = require('./rules/best-practices');
const errors = require('./rules/errors');
const nodeRules = require('./rules/node');
const style = require('./rules/style');
const variables = require('./rules/variables');
const es6 = require('./rules/es6');
const imports = require('./rules/imports');
const strict = require('./rules/strict');

module.exports = [
  // Include each rules configuration directly
  bestPractices,
  errors,
  nodeRules,
  style,
  variables,
  es6,
  imports,
  strict,
  {
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {},
  }
];
