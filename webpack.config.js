var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './app/index.js',
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: "bundle_[hash].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
};
