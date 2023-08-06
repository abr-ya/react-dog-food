const HTMLWebpackPlugins = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { resolve } = require("path"); // alt ??
const webpack = require("webpack");
require("dotenv").config({ path: path.resolve(process.env.PWD, ".env") });

const production = process.env.NODE_ENV === "production";

module.exports = {
  entry: path.resolve(__dirname, "../..", "./src/index.tsx"), //точка входа в наше приложение содержит абсолютный путь к index.ts
  output: {
    path: path.resolve(__dirname, "../..", "./dist"), //путь куда будет собираться наш проект
    filename: production ? "static/scripts/[name].[contenthash].js" : "static/scripts/[name].js", // имя нашего бандла
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        type: "asset/resource",
        generator: {
          filename: "static/images/[hash][ext][query]",
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack", "url-loader"],
      },
    ],
  },
  resolve: {
    modules: [resolve(__dirname, "../../src"), "node_modules"],
    extensions: [".js", ".jsx", ".tsx", ".ts", ".json"], //указываем файлы с которыми будет работать webpack
  },
  plugins: [
    new HTMLWebpackPlugins({
      template: path.resolve(__dirname, "../..", "./public/index.html"),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: production ? "static/styles/[name].[contenthash].css" : "static/styles/[name].css",
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // значение по умолчанию 'development' если переменная process.env.NODE_ENV не передана
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
