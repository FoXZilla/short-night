const webpackConf = require('./webpack.config');

module.exports = {
    extends: 'airbnb-base',
    rules: {
        indent: ['error', 4],
    },
    settings: {
        'import/resolver': {
            alias: {
                map: Object.entries(webpackConf.resolve.alias),
                extensions: ['.ts', '.js', '.json'],
            }
        },
    },
};
