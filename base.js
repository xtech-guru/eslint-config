'use strict';

module.exports = {
  ignorePatterns: [
    '**/node_modules/*',
    '**/build/*',
    '**/dist/*',
    '**/package.json',
    '.history/*',
    '.vscode/*',
  ],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
  },
};
