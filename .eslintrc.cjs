const typescript = require('typescript')
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.svelte'],
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true
  },
  ignorePatterns: ['node_modules', '*.config.js', 'public'],
  settings: {
    'svelte3/typescript': () => typescript,
    'svelte3/ignore-warnings': warning => {
      return warning.code === 'a11y-click-events-have-key-events'
    }
  },
  plugins: ['svelte3', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'no-loss-of-precision': 'error',
    'no-promise-executor-return': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    complexity: ['error', 5],
    'consistent-return': 'error',
    curly: 'error',
    'default-case': 'error',
    'default-case-last': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-constructor-return': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': ['error'],
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': [
      'error',
      {
        allowAsStatement: true
      }
    ],
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    radix: 'error',
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    yoda: ['error', 'never'],
    '@typescript-eslint/no-shadow': 'error',
    'no-undef': 'error',
    'no-use-before-define': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': 'error',
    camelcase: [
      'error',
      {
        properties: 'never'
      }
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'that'],
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': [
      'error',
      {
        position: 'above'
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error'],
    'max-depth': ['error', 4],
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 80,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-nested-callbacks': [
      'error',
      {
        max: 3
      }
    ],
    'max-params': [
      'error',
      {
        max: 3
      }
    ],
    'max-statements': [
      'error',
      {
        max: 15
      }
    ],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-tabs': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_errors']
      }
    ],
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'operator-assignment': ['error', 'always'],
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'switch-colon-spacing': 'error',
    'wrap-regex': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true
      }
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['**/impl', '!./impl', '**/*-impl', '!./*-impl']
      }
    ],
    'no-restricted-syntax': 'error',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false
      }
    ],
    'import/no-duplicates': 'error',
    '@typescript-eslint/indent': 'off'
  }
}
