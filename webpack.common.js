const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

const { EnvironmentPlugin } = webpack

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    index: './index.tsx',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
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
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  plugins: [
    new EnvironmentPlugin(['API_ROOT']),
    new HtmlWebpackPlugin({ template: '../public/index.html' }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'google-roboto',
          entry: {
            path: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
            type: 'css',
          },
        },
        {
          module: 'font-awesome',
          entry: {
            path: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
            type: 'css',
          },
        },
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./app'),
      path.resolve('./src'),
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}
