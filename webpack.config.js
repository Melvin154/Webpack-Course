//Importing Require Path
const path = require("path");

//Importing Html Webpack Plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*To bundle Files*/
module.exports = {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "src/index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    /*Cleaning Up Hash files*/
    clean: true,
  },
  /*Source Maps*/
  devtool: "source-map",

  /*Setting the Dev Server*/
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8800,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  //Loaders
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"],
          },
        },
      },
    ],
  },
  /*Html Webpack Plugin*/
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
