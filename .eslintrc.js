const webpackConf = require('./webpack.config');

module.exports = {
    extends: 'airbnb-base',
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['off'],
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
