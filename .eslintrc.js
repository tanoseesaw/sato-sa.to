module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  plugins: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['babel', 'react', 'react-hooks'],
};
