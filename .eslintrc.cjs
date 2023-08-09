module.exports = {
  extends: ['ts-prefixer', 'plugin:jsx-a11y/recommended'],
  globals: {},
  plugins: ['react-hooks', 'jsx-a11y'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {},
}
