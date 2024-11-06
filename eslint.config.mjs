// eslint.config.mjs
import typescriptParser from '@typescript-eslint/parser';

/** @type {import("eslint").Linter.Config} */
const config = {
  parser: typescriptParser,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
};

export default config;
