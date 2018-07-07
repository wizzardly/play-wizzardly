const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const shared = require('./webpack.shared.js')

const DashboardPlugin = require('webpack-dashboard/plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
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
    new HtmlWebpackExternalsPlugin({
      externals: [
        ...shared.externals,
        {
          module: 'react',
          entry: {
            path: 'https://unpkg.com/react@16/umd/react.development.js',
            attributes: {
              crossorigin: 'crossorigin',
            },
          },
        },
        {
          module: 'react-dopm',
          entry: {
            path: 'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
            attributes: {
              crossorigin: 'crossorigin',
            },
          },
        },
      ]
    })
  ],
})
