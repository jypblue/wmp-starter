// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  extends: [
    'alloy',
    'plugin:promise/recommended',
    'plugin:import/recommended'
  ],
  plugins: [

  ],
  // add your custom rules here
  rules: {
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    'no-param-reassign': 0,
    'no-undefined': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'import/no-absolute-path': 2,
    'import/no-extraneous-dependencies': 2,
    'import/no-mutable-exports': 2,
    'import/newline-after-import': 1,
    'import/unambiguous': 0,
    'promise/avoid-new': 0,
    'promise/no-callback-in-promise': 0,
    'promise/always-return': 0,
    'semi': [
      1,
      'always'
    ],
    'no-tabs': 0,
    'max-len': [
      1,
      {
        'code': 90,
        'tabWidth': 2,
        'ignoreComments': true,
        'ignoreStrings': true,
        'ignoreUrls': true,
        'ignoreRegExpLiterals': true
      }
    ],
    'no-unused-vars': [
      1,
      {
        'vars': 'all',
        'args': 'after-used',
        'caughtErrors': 'none',
        'ignoreRestSiblings': true
      }
    ],
    'spaced-comment': 0,
    'no-invalid-this': 0,
    'max-params': ["error", 4],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src", 'static']
      }
    }
  },
  globals: {
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    getApp: true,
    getPage: true,
    getCurrentPages: true,
    requirePlugin: true,
    '@': true,
  }
};
