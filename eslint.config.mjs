import pluginJs from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'
import globals from 'globals'
import tseslint from 'typescript-eslint'


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
      perfectionist,
    },
    rules: {
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-len': ['error', { 'code': 120, 'tabWidth': 2 }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-shadow': ['warn'],
      '@typescript-eslint/no-unused-vars': ['warn'],
      'indent': ['error', 2],
      'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
      'perfectionist/sort-imports': ['error', { 'type': 'natural' }],
      'perfectionist/sort-objects': ['error', { 'type': 'natural' }],
    },
  },
]
