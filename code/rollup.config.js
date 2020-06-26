// 通过rollup --config 指定配置文件路径
/**
 * Rollup 同样支持插件，插件是其唯一扩展途径，
 * 默认只能按照文件路径的方式加载本地模块，
 * 可以使用rollup-plugin-node-resolve加载第三方npm模块,
 * 可以使用rollup-plugin-commonjs使rollup可以打包commonjs
 */

import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

/**
 * 对于amd输出文件格式，不能直接引用，必须实现amd标准
 */

export default {
    // input: 'src/index.js', // 打包入口文件
    input: { // 多入口打包
        foo: 'src/index.js',
        bar: 'src/albumjs',
    }
    // input: ['src/index.js, 'src/albumjs'], // 多入口打包也支持数组形式指定
    output: {
        // file: 'dist/bundle.js', // 输出文件名
        // format: 'iife', // 输出文件格式 iife ----立即执行函数
        dir: 'dist', // 通过dir属性指定代码拆分时多文件输出路径
        format: 'amd'
    },
    plugins: [
        json(),
        resolve(),
        commonjs()
    ]
}