const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill','./index.js','./index.html'],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    compress: true,
    port: 9000,
    clientLogLevel: "none",
    quiet: true
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=8192&name=images/[name][hash:8].[ext]'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.HotModuleReplacementPlugin(),
	  new HtmlWebpackPlugin({
	    filename: 'index.html',
	    template: 'index.html',
	    inject: true
	  })
    ]
  };
