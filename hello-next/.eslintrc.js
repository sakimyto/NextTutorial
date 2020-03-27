module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  // plugins: ['prettier', 'react'],
  plugins: ['prettier'],
  parserOptions: {
    version: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:react/recommended', 'prettier/react'],
  rules: {
    'prettier/prettier': 'error',
  },
}
