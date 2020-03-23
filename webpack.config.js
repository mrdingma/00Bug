const path = require("path");
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

const SRC_DIR = path.join(__dirname, "/client/src");
const DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", `${SRC_DIR}/index.jsx`],
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  plugins: [new MomentLocalesPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
