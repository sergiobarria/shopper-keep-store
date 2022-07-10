module.exports = {
  ...require('eslint-config-custom/eslint-config-client'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
