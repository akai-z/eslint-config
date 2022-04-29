module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  plugins: [
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
};
