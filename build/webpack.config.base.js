
const path = require('path');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniPlugin = require('mini-program-webpack-loader').plugin
// const Dotenv = require('dotenv-webpack')
const utils = require('./utils')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: [
    path.resolve(__dirname, utils.resolve('src/app.json'))
  ],
  output: {
    path: path.resolve(process.cwd(), 'dist')
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
    alias: utils.parseAlias(),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, utils.resolve('src')),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true // cacheDirectory用于缓存babel的编译结果,加快重新编译的速度
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              formatter: require('eslint-friendly-formatter')
            }
          }
        ],
      },
      {
        test: /.wxs$/,
        include: path.resolve(__dirname, utils.resolve('src')),
        exclude: /node_modules/,
        use: [
          utils.fileLoader('[path][name].[ext]'),
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true // cacheDirectory用于缓存babel的编译结果,加快重新编译的速度
            }
          },
          'mini-program-webpack-loader'
        ]
      },
      {
        test: /.wxml/,
        use: [
          utils.fileLoader('[path][name].[ext]'),
          'mini-program-webpack-loader'
        ]
      },
      {
        test: /\.json/,
        type: 'javascript/auto',
        use: [
          utils.fileLoader('[path][name].[ext]'),
          'mini-program-webpack-loader'
        ]
      },
      {
        test: /\.wxss$/,
        use: [
          utils.fileLoader('[path][name].[ext]'),
          'mini-program-webpack-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          utils.fileLoader('[path][name].wxss'),
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|png|gif|jpeg|jpg)\??.*$/,
        loader: 'url-loader',
        query: {
          limit: 50000
        }
      }
    ]
  },
  plugins: [
    new MiniPlugin({
      // extfile: true,
      // setSubPackageCacheGroup
    }),
    new CopyWebpackPlugin(
      utils.copyPatterns,
      { context: utils.srcDir }
    ),
    new StylelintWebpackPlugin()
  ],
  stats: {
    colors: true,
    hash: true,
    cached: true
  },
  watchOptions: {
    ignored: [/node_modules/, /dist/]
  }
}
