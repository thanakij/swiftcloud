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
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-len': ['error', { code: 120, tabWidth: 2 }],
      '@stylistic/no-trailing-spaces': ['error'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'consistent-as-needed'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/space-infix-ops': ['error'],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-shadow': ['warn'],
      '@typescript-eslint/no-unused-vars': ['warn'],
      'indent': ['error', 2],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'perfectionist/sort-imports': ['error', { type: 'natural', tsconfigRootDir: '.' }],
    },
  },
]
