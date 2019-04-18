const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/assets/scripts/app.js',
  output: { filename: 'bundle.js', path: path.resolve(__dirname, 'dist') },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.(html)$/,
  //         use: { loader: 'html-loader', options: { attrs: [ ':data-src' ] } },
  //       },
  //     ],
  //   },
  plugins: [ new HtmlWebpackPlugin() ],
};
