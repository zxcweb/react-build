module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    'semi': 0,
    'linebreak-style': 'off',
    'import/no-self-import': 'off',
    'import/no-unresolved': 'off',
    'comma-dangle': 'off',
    'react/prop-types': 0,
    'no-console': 'off'
  }
}
