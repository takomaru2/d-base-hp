module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    // css変数名をキャメルケース適応
    'scss/dollar-variable-pattern': '^[a-z][a-zA-Z]*',
  },
};
