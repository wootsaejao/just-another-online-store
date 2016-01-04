var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var baseConfig = require('./webpack.config')

var config = Object.create(baseConfig)

var host = process.env.HOST || 'localhost';
var port = (process.env.PORT + 1) || 9991;

config.entry = config.entry.concat([
  'webpack-dev-server/client?http://' + host + ':' + port,
  'webpack/hot/only-dev-server'
])

config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin()
)

config.devServer = {
  contentBase: config.output.path,
  publicPath: '/static',
  host: host,
  port: port,
  hot: true,
  inline: true,
  lazy: false,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {colors: true}
}

module.exports = config
