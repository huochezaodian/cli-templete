// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    "plugin:react/recommended",
    'react-app',
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'react'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 必须加分号
    'semi': [2, 'always'],
    // 禁用reject返回错误对象
    'prefer-promise-reject-errors': 'off',
    // warning during development
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // arrow function can not return assignment
    'no-return-assign': 'off'
  }
}
