var path = require('path')
var webpack = require('webpack')

process.noDeprecation = true;//see: https://github.com/webpack/loader-utils/issues/56

module.exports = {
  entry: path.join(__dirname, './main.js'),
  output: {
    path: path.resolve(__dirname, './dev-dist'),
    publicPath: '/dev-dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
      },
      {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase :__dirname,
    //todo: it dose work, must use --hot options in CLI
    //hot: true,
    historyApiFallback: false,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
