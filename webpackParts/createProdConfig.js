const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.createProdConfig = () => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // when limit is exceed will use file-loader
              limit: 50000,
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
});
