const { smart } = require('webpack-merge')
const base = require('./webpack.base')

module.exports = smart(base, {
  mode: 'development',
  devServer: {
    contentBase: '../dist',
    open: true
  },
  devtool: 'inline-source-map'
})