/**
 * 'error' ... ルール違反を見つけるとエラー
 * 'warn' ..... ルール違反を見つけると警告
 * 'off' ....... ルール違反を見つけても何もしない
 */
module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  globals: {},
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'comma-dangle': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'semi': false
      }
    ]
  }
};
