const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const shared = require('./webpack.shared.js')

const webpack = require('webpack')

const WebpackGitHash = require('webpack-git-hash')
const SentryPlugin = require('webpack-sentry-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

const { env } = process
const { EnvironmentPlugin } = webpack
const { skipHash: gitHash } = new WebpackGitHash()

const plugins = []

if (env.SENTRY_API_KEY) {
  plugins.push(new SentryPlugin({
    suppressConflictError: true,
    organization: env.SENTRY_ORGANIZATION,
    project: env.SENTRY_PROJECT,
    apiKey: env.SENTRY_API_KEY,
    release: gitHash,
  }))
}

module.exports = merge.smart(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: `[name]-${gitHash}.js`,
  },
  plugins: [
    ...plugins,
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
        ...shared.externals,
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
        {
          module: 'raven',
          entry: {
            path: 'https://cdn.ravenjs.com/3.25.2/raven.min.js',
            attributes: {
              crossorigin: 'anonymous',
            },
          },
          global: 'Raven'
        },
      ],
    }),
  ],
})
