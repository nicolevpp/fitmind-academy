/* eslint-env node */
module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'globals': {
    'process': true,
    '__dirname': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  'plugins': [
    'react', 'react-hooks'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'linebreak-style': [
      'error',
      process.platform === 'win32'
        ? 'windows'
        : 'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'eqeqeq': 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always'
    ],
    'arrow-spacing': [
      'error', { 'before': true, 'after': true }
    ],
    'no-console': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};