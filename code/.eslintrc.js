module.exports = {
    env: { // 运行环境
        browser: true, // 表示代码会运行在浏览器环境中
        es2020: true
    },
    extends: [ // 用于继承一些共享配置
        'standard',
        'plugin:react/recommended', // 直接继承react规范
    ],
    parserOptions: { // 设置语法解析器相关配置，控制是否允许使用某个es版本语法
        ecmaVersion: 11 // 仅仅检测语法，并不代表是否可用
    },
    parser: '@typescript-eslint/parser', // 指定ts的代码解析器
    rules: {
        'no-alert': "off", // error：报出错误，off：关闭，on：打开
        // 'react/jsx-uses-react': 2, // 开启react eslint
        // 'react/jsx-uses-vars': 2,
    },
    // plugins: [
    //     'react',
    // ],
    globals: { // 额外申明项目中可以使用的全局成员
        "jQuery": "readonly"
    }
}