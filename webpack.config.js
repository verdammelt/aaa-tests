const path = require("path");

module.exports = {
  mode: "development",

  entry: {
    index: "./src/index",
    test: "./src/test"
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",

        options: {
          presets: ["env"]
        }
      }
    ]
  }
};
