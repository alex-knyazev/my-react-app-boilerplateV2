const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 3000;

module.exports = {
  devtool: IS_PRODUCTION ? '' : 'cheap-module-eval-source-map',

  devServer: {
    // wull available in LAN
    host: HOST,
    // port on host where application runs
    port: PORT,
    // browser will open at localhost
    public: `localhost:${PORT}`,
    // allow gzip compressing
    compress: true,
    // allow to take files from public folder
    contentBase: path.join(__dirname, 'public'),
    // watch for files at public folder
    watchContentBase: true,
    // open info about arror at browser when error
    overlay: {
      errors: true,
    },
    // hide webpack logs
    // noInfo: true,
    stats: 'minimal',
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            quiet: true,
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: !IS_PRODUCTION ? 'style-loader' : MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]--[hash:base64:4]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanTerminalPlugin({
      message: `dev server is running at http://${HOST}:${PORT}`,
    }),
    new HtmlWebPackPlugin({
      template: './src/public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
