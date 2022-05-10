
const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    app: './src/App.jsx',
    review: './src/Review.jsx',
    reviewList: './src/ReviewList.jsx',
    newReview: './src/NewReview.jsx',
    reviewUpdate: './src/ReviewUpdate.jsx',
    search: './src/Search.jsx',
    searchList: './src/SearchList.jsx',
    searchResult: './src/SearchResult.jsx',
    usernameEntry: './src/UsernameEntry.jsx',
    index: './index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'client', 'dist')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }

        }
      }
    ]
  }
}