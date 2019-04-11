module.exports = {
  entry: `${__dirname}/client/src/index.js`,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      },
    ]
  },
  output: {
    filename: 'app.js',
    path: `${__dirname}/client/dist`
  }
};
