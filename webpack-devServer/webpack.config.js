const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Plugin Simple",
      template: "./public/index.html",
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
