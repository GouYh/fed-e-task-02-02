const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        // publicPath: 'public'
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                use: 'eslint-loader',
                enforce: 'pre',
                include: [path.join(__dirname, './src')],
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, './src')],
                options: {
                    presets: [['@babel/preset-env', {"useBuiltIns": "usage", corejs: 3}]]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        limit: 10 * 1024 // 只将10kb以下的文件转换为data url，超过的还是使用                        // file-loader加载
                    },
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}
