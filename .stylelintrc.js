module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'order/properties-alphabetical-order': true,
    'prettier/prettier': true,
  },
};
