const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};

module.exports = config;
