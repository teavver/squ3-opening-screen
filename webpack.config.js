const path = require('path');

module.exports = {
  entry: { main:'./src/main.ts', connectToPlay: './src/connectToPlay.ts', connectToMint: './src/connectToMint.ts' },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};