module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import', 'sonarjs', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'react-app',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/warnings',
    'plugin:import/errors',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'all',
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        printWidth: 80,
      },
    ],

    'no-plusplus': 0,
    'no-param-reassign': [2, { props: false }],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-unneeded-ternary': 'error',
    'no-fallthrough': 0,
    'no-unused-vars': 1,
    'no-lonely-if': 'error',
    complexity: ['warn', 30],
    'prefer-arrow-callback': ['error'],
    camelcase: [0, { properties: 'never' }],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],

    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/click-events-have-key-events': 0,

    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',

    'react/prop-types': 0,
    'react/no-unstable-nested-components': 1,
    'react/boolean-prop-naming': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    'sonarjs/cognitive-complexity': 0,
    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/no-collapsible-if': 'warn',

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-anonymous-default-export': 0,
    'import/prefer-default-export': 0,
    'import/newline-after-import': 'error',
    'import/no-cycle': 0,
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
  },
};
