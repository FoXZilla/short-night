const Path = require('path');

module.exports = {
    devtool: 'inline-source-map',//todo
    entry: {
        'engine': './src/engine/index.ts',
        'themes/colors': './src/themes/colors/index.ts',
    },
    output: {
        filename: '[name].js',
        path: Path.resolve(__dirname,'./dist'),
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.scss$/, use: ["style-loader","css-loader","sass-loader"] },
        ],
    },
    resolve: {
        extensions: ['.ts','.js'],
        alias: {
            '@': Path.resolve(__dirname,'./src'),
            '@engine': Path.resolve(__dirname,'./src/engine'),
        }
    },
};
