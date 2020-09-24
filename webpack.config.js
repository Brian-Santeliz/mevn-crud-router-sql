const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/Client/",
  output: {
    path: path.join(__dirname, "/src/Server/public"),
    filename: "js/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
       {
         test: /\.css$/i,
         use: [
           { loader: MiniCssExtractPlugin.loader },
           { loader: "css-loader" },
         ],
       },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: "./src/Client/public/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
        new VueLoaderPlugin(),
  ],
};
