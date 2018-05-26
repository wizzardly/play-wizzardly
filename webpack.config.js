const { env } = process
const isProduction = env.NODE_ENV === 'production'

if (!isProduction) require('dotenv').config()

console.log('wepback')
console.log(JSON.stringify(env))

const path = require('path')
const webpack = require('webpack')
const WebpackGitHash = require('webpack-git-hash')
const DashboardPlugin = require('webpack-dashboard/plugin')
const SentryPlugin = require('webpack-sentry-plugin')

const { skipHash: gitHash } = new WebpackGitHash()

const environmentPlugins = isProduction ? [
  new SentryPlugin({
    suppressConflictError: true,
    organization: env.SENTRY_ORGANIZATION,
    project: env.SENTRY_PROJECT,
    apiKey: env.SENTRY_API_KEY,
    release: gitHash,
  }),
] : [
  new DashboardPlugin(),
]

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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
        API_ROOT: JSON.stringify(env.API_ROOT),
        SENTRY_DSN: JSON.stringify(env.SENTRY_DSN),
        GIT_HASH: JSON.stringify(gitHash),
      },
    }),
    ...environmentPlugins,
  ],
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./app'),
      path.resolve('./src'),
    ],
  },
}
