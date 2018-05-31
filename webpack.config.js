const { env } = process
const isProduction = env.NODE_ENV === 'production'

if (!isProduction) require('dotenv').config()

const path = require('path')
const webpack = require('webpack')
const WebpackGitHash = require('webpack-git-hash')
const SentryPlugin = require('webpack-sentry-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const { skipHash: gitHash } = new WebpackGitHash()

const plugins = []

if (!isProduction) {
  plugins.push(new DashboardPlugin(), new HtmlWebpackPlugin({ template: '../public/index.html' }))
} else {
  plugins.push(new HtmlWebpackPlugin({
    inject: true,
    template: '../public/index.html',
    filename: 'index.html',
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyURLs: true,
    },
  }))

  if (env.SENTRY_API_KEY) {
    plugins.push(new SentryPlugin({
      suppressConflictError: true,
      organization: env.SENTRY_ORGANIZATION,
      project: env.SENTRY_PROJECT,
      apiKey: env.SENTRY_API_KEY,
      release: gitHash,
    }))
  }
}

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
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV', 'API_ROOT', 'SENTRY_DSN', 'GIT_HASH']),
    ...plugins,
  ],
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./app'),
      path.resolve('./src'),
    ],
  },
}
