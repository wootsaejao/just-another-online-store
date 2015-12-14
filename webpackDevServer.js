import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import baseConfig from './webpack.config'

const webpackDevHost = '0.0.0.0'

module.exports = {
  listen(serverPort) {
    const webpackDevPort = serverPort + 1

    let config = Object.create(baseConfig)

    config.entry = config.entry.concat([
      'webpack-dev-server/client?http://localhost:' + webpackDevPort,
      'webpack/hot/only-dev-server'
    ])

    config.plugins = [
      new webpack.HotModuleReplacementPlugin()
    ]

    const webpackDevServer = new WebpackDevServer(
      webpack(config),
      {
        contentBase: config.output.path,
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        stats: {colors: true}
      }
    )

    webpackDevServer.listen(
      webpackDevPort,
      webpackDevHost,
      (err, result) => {
        if (err) {
          console.log(err)
        }

        console.log('Webpack Dev Server is listening at ' + webpackDevHost + ':' + webpackDevPort)
      }
    )
  }
}
