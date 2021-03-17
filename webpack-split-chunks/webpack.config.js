const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")


module.exports = {
  entry: {
    index: "./src/index.js",
    other: "./src/other.js"
  },
  output: {
    filename: "[name].bundle.js",
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Indx Page",
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      title: "Webpack Other Page",
      template: "./public/other.html",
      filename: "other.html",
      chunks: ['other']
    }),
  ],
  devServer: {
    open: true,
    port: 9000,
    proxy: {
      "/api": {
        target: "https://api.github.com",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
};
