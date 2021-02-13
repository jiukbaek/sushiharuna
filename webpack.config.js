const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      components: path.resolve(process.cwd(), "./src/components"),
      images: path.resolve(process.cwd(), "./source/images"),
    },
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
