const RULES = {
  off: 'OFF',
  WARN: 'WARN',
  ERROR: 'ERROR'
}
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: RULES.off
  }
}
