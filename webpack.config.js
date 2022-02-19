const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: "development",
  entry: {
    main: "./src/index.ts",
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};

module.exports = config;
