const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    // 'import/extensions': 'off',
    // 'import/no-unresolved': 'off',
  },
  globals: {
    /* Объекты окружения в браузере */
    window: true,
    browser: true,
    document: true,
    fetch: true,
    serviceworker: true,
  },
  settings: {
    // поддержка aliases
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, '/webpack.config.js'),
      },
    },
  },
};
