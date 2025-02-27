// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // entry point of your script
  output: {
    filename: 'bundle.js', // the bundled output file
    path: path.resolve(__dirname, 'dist'), // output folder
    library: 'ReactModalUtils', // name of the global variable
    libraryTarget: 'umd', // format that works for both Node and browser
    clean: true, // clear dist folder before each build
  },
  stats: {
    children: true,  // Include more detailed information about child compilations
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpile JS/JSX
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // create an index.html for testing locally
    }),
  ],
  devServer: {
    contentBase: './dist',
    port: 3000,
  },
  mode: 'production',
};
