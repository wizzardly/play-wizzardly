const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const DashboardPlugin = require('webpack-dashboard/plugin')
const path = require('path')

require('dotenv').config()

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new DashboardPlugin(),
  ],
})
