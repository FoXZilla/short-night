const Path = require('path');

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? 'none' : 'inline-source-map',
    entry: {
        colors: './docs/colors.ts',
    },
    output: {
        filename: '[name].js',
        path: Path.resolve(__dirname, './docs'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: true,
                    },
                },
            }, {
                test: /\.ts$/,
                enforce: 'pre',
                use: 'tslint-loader',
            },
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@root': Path.resolve(__dirname),
            '@': Path.resolve(__dirname, './src'),
            '@engine': Path.resolve(__dirname, './src/engine'),
        },
    },
};
