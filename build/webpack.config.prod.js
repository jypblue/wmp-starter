const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const base = require('./webpack.config.base.js')
const utils = require('./utils');
const config = require(`${process.cwd()}/config`);
// process.env.GENERATE_SOURCEMAP !== 'false' ? 'source-map' : 'none',
module.exports = merge(base,
  {
    mode: 'production',
    devtool: 'none',
    performance: {
      hints: 'warning'
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({
          assetNameRegExp: /\.(scss | wxss)\.*(?!.*map)/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', {
              discardComments: { removeAll: true },
              calc: false
            }]
          },
          canPrint: true
        })
      ]
    },
    plugins: [
      // production模式下，清空dist目录
      new CleanWebpackPlugin({
        dry: false
      }),
      new webpack.DefinePlugin({
        'process.env': config[process.env.CONF || 'build'].env
      }),
    ]
  }
)
