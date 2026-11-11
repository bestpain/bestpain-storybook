const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("node:path");

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },

      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  devServer: {
    port: 3000,
    open: true,
  },

  output: {
    filename: "[name].[contenthash].js",
    clean: true,
    path: path.resolve(__dirname, "dist"),
  },
};
