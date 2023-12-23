const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']

        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 3003, // Set the port to 3003
      allowedHosts: ['babysnug.co', 'localhost'],
      static: {
        directory: path.join(__dirname, 'public'),
      }
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map'
  };
};
