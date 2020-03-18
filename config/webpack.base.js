const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const StyleLintWebpackPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'../dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader'],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.(less|css)/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@com': path.resolve(__dirname, '../src/components'),
      '@views': path.resolve(__dirname, '../src/views'),
      '@api': path.resolve(__dirname, '../src/api'),
      '@actions': path.resolve(__dirname, '../src/store/modules')
    },
    // 配置模块扩展名
    extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dist']
    }),
    new StyleLintWebpackPlugin({
      context: "src",
      configFile: path.resolve(__dirname, '../.stylelintrc.json'), // 指定 stylelint 配置的文件 
      files: '**/*.less',
      failOnError: false,
      quiet: true,
      syntax: 'less'
    })
  ]
}