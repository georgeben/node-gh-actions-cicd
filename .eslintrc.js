module.exports = {
  env: {
    commonjs: true,
    es6: true,
    mocha: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    process: 'readonly',
    console: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {},
};
