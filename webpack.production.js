const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const webpack = require('webpack')

const WebpackGitHash = require('webpack-git-hash')
const SentryPlugin = require('webpack-sentry-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { env } = process
const { EnvironmentPlugin } = webpack
const { skipHash: gitHash } = new WebpackGitHash()

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: `[name]-${gitHash}.js`,
  },
  plugins: [
    new EnvironmentPlugin(['SENTRY_DSN', 'GIT_HASH']),
    new HtmlWebpackPlugin({
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
    }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'react',
          entry: {
            path: 'https://unpkg.com/react@16/umd/react.production.min.js',
            attributes: {
              crossorigin: 'crossorigin',
            },
          },
        },
        {
          module: 'react-dopm',
          entry: {
            path: 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
            attributes: {
              crossorigin: 'crossorigin',
            },
          },
        },
      ],
    }),
    new SentryPlugin({
      suppressConflictError: true,
      organization: env.SENTRY_ORGANIZATION,
      project: env.SENTRY_PROJECT,
      apiKey: env.SENTRY_API_KEY,
      release: gitHash,
    }),
  ],
})
