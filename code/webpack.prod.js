const webpackCommonJS = require('./webpack.common')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = merge(webpackCommonJS, {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all' // 所有的公共模块提取到bundle中
        },
        minimizer: [
            new TerserWebpackPlugin(),
            new OptimizeCssAssetsWebpackPlugin() // 会覆盖内置的js压缩插件，需要单独再引入
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: true,
            title: 'Vue-APP-Base',
            url: './',
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'public'),
                }
            ]
        })
    ]
})