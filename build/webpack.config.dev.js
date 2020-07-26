const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const utils = require('./utils')
const base = require('./webpack.config.base.js')
const config = require(`${process.cwd()}/config`);

module.exports = merge(base, {
  mode: 'development',
  cache: true,
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config[process.env.CONF || 'dev'].env,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
  ]
})
