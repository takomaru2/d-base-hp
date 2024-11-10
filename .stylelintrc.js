module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'scss/dollar-variable-pattern': '^[a-z][a-zA-Z]*',
  },
};
