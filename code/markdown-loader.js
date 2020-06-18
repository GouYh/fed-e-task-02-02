/**
 * 输入为加载到的资源内容，输出为处理结果,
 * 输出必须为一段标准的JavaScript代码,或者将结果交给下一个loader进行处理
 * 
 * loader负责资源文件从输入到输出的转换，
 * 对于同一个资源可以依次使用多个loader
 * 
 *  */
const marked = require('marked')
module.exports = source => {
    const html = marked(source)
    return `modules.exports = ${JSON.stringify(html)}`
}