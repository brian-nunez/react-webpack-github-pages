const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 3000,
    compress: true,
    historyApiFallback: true,
    before: function(app, server) {
      app.disable("x-powered-by");
    }
  }
});
