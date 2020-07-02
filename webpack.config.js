const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  console.log(argv.mode === 'production' ? 'https://jeremy1015.github.io/brigandine-helper' : 'smeg');
  return {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  entry: ['@babel/polyfill', './src/index.jsx'],
  mode: 'dev',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: ['url-loader'],
      },
      {
        test: /favicon\.ico$/,
        use: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      inject: false,
      production: argv.mode === 'production',
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
      favicon: 'src/img/favicon.ico',
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
};