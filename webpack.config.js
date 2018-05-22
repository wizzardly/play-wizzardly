require('dotenv').config()

const path = require('path')
const webpack = require('webpack')
const WebpackGitHash = require('webpack-git-hash')
const DashboardPlugin = require('webpack-dashboard/plugin')

const { env } = process

const isProduction = env.NODE_ENV === 'production'

const { skipHash: gitHash } = new WebpackGitHash()

module.exports = {
  context: path.resolve(__dirname, './src'),
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
  },
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  entry: {
    index: './index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }],
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  output: {
    filename: `[name]${isProduction ? `-${gitHash}` : ''}.js`,
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
        API_ROOT: JSON.stringify(env.API_ROOT),
      },
    }),
  ],
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./app'),
      path.resolve('./src'),
    ],
  },
}
