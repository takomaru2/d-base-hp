const lowerCamel = '^[a-z][a-zA-Z]*';

module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    // css変数名をキャメルケース適応
    'scss/dollar-variable-pattern': lowerCamel,
    'selector-class-pattern': lowerCamel,
    'scss/at-mixin-pattern': lowerCamel,
  },
};
