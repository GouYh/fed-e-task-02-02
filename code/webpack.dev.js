const webpackCommonJS = require('./webpack.common')
const merge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackCommonJS, {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        host: 'localhost',
        port: 8080,
        contentBase: './public',
    },
    devtool: 'cheap-module-eval-source-map', // 开启sourceMap
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 开发模式下开启模块热替换
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: 'Vue-APP-Base',
            url: './',
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
            }
        }),
    ]
})
