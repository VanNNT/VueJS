const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname,"../src/client-entry.js")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /(\.js$)|(\.vue$)/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ],
  },
  output: {
    path: path.resolve(__dirname,"../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = config;
