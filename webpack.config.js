const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
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
