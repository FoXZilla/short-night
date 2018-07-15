const Path = require('path');

module.exports = {
    entry: {
        'short-night': './src/engine/index.ts',
        'themes/colors': './src/themes/colors/index.ts',
    },
    output: {
        filename: '[name].js',
        path: Path.resolve(__dirname,'./dist'),
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': Path.resolve(__dirname,'./src'),
        }
    },
};
