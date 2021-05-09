'use strict';

module.exports = {
  ignorePatterns: ['serviceWorker.ts'],
  extends: [
    'react-app',
    'react-app/jest',
    require.resolve('./base'),
    'prettier/react',
  ],
};
