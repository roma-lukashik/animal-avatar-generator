import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  mode: 'development',
  entry: './index.ts',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
