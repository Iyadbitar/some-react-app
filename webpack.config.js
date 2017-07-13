var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, 'client/dist');
var SRC_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module : {

    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query:{
          presets: [ 'es2015', 'react', 'stage-2' ]
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html'
    })
  ]
};

module.exports = config;
