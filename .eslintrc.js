module.exports = {
  plugins: ['import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  globals: {
    beforeAll: true,
    beforeEach: true,
    describe: true,
    expect: true,
    it: true,
    jest: true,
    localStorage: true,
    chrome: 'readonly',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  overrides: [
    // override 'simple-import-sort' config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'import/order': [
          'warn',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],

            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: false,
            },
            pathGroupsExcludedImportTypes: ['react'],

            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              { pattern: '@/assets/**', group: 'internal', position: 'after' },
              {
                pattern: '@/components/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@/contexts/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@/declarations/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@/elements/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@/enums/**',
                group: 'internal',
                position: 'after',
              },
              { pattern: '@/env/**', group: 'internal', position: 'after' },
              {
                pattern: '@/hooks/**',
                group: 'internal',
                position: 'after',
              },
              { pattern: '@/i18n/**', group: 'internal', position: 'after' },
              { pattern: '@/pages/**', group: 'internal', position: 'after' },
              { pattern: '@/routes/**', group: 'internal', position: 'after' },
              {
                pattern: '@/services/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@/store/**',
                group: 'internal',
                position: 'after',
              },
              {
                pattern: '@/validations/**',
                group: 'internal',
                position: 'after',
              },
              { pattern: '@/theme/**', group: 'internal', position: 'after' },
              { pattern: '@/types/**', group: 'internal', position: 'after' },
            ],
          },
        ],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.ts', '.js', '.tsx', '.json', '.json5'],
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.tsx', '.json', '.json5'],
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js', '.tsx', '.json', '.json5'],
      },
    },
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'off',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/no-named-as-default-member': 'off',
    camelcase: 0,
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'consistent-return': 0,
    quotes: [2, 'single', { avoidEscape: true }],
    'comma-dangle': ['warn', 'only-multiline'],
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
        json: 'never',
        json5: 'never',
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'warn',
    'react/jsx-props-no-spreading': [0],
    'react/jsx-sort-props': 1,
    'react/prop-types': 0,
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
