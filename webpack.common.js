const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
