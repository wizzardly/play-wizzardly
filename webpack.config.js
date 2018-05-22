const path = require('path')
const webpack = require('webpack')
const WebpackGitHash = require('webpack-git-hash')
const DashboardPlugin = require('webpack-dashboard/plugin')

const { env } = process

const isProduction = env.NODE_ENV === 'production'

const { skipHash: gitHash } = new WebpackGitHash()

module.exports = {
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.js',
  },
  output: {
    filename: `[name]${isProduction ? `-${gitHash}` : ''}.js`,
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
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
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./app'),
      path.resolve('./src'),
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
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
}
