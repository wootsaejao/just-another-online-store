var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    './client/src/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      // for bootstrap.css
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?mimetype=image/svg+xml" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  }
};
