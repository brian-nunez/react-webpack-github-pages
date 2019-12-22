const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',
  devServer: {
    contentBase: "./dist",
    hot: false,
    port: 3000,
    compress: true,
    historyApiFallback: true,
    before: function(app, server) {
      app.disable("x-powered-by");
    }
  }
});
