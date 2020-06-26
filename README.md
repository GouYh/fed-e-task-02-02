# fed-e-task-02-02
一、简答题
1.Webpack的构建流程主要有哪些环节？如果可以请尽可能详尽的描述Webpack打包的整个过程。
    答：构建流程的主要环节：
            1.推断文件依赖
            2.解析
            3.形成依赖树
            4.递归找到对应资源文件
            5.根据rules中配置进行加载
            6.合并到bundle.js

        打包过程：webpack会顺着入口文件当中的代码，根据代码中出现的import或者require之类的语句，解析推断出这个文件的资源模块，然后分别解析每个模块的依赖的资源模块，然后形成一个文件依赖树，然后递归这个依赖树找到所对应的资源文件，根据配置文件中的rules属性找到对应的loader加载，最后将加载到的结果放到bundle.js


2.Loader和Plugin有哪些不同？请描述一下开发Loader和Plugin的思路。
    答：loader负责资源文件从输入到输出的转换；plugin通过钩子机制实现，是用于增强webpack自动化的能力，
    loader专注实现资源模块加载，plugin解决除了资源加载以外的其他自动化操作。

    开发Loader：
        1.明确所开发的loader功能
        2.明确loader的输入以及输出
        3.定义方法实现从输入到输出的逻辑
        4.输出一个js代码片段或讲结果移交给下一个loader处理

    开发Plugin：
        1.明确插件的功能
        2.选择合适的webpack钩子来挂载任务
        3.定义函数实现功能

二、编程题
1.使用Webpack实现Vue项目打包任务
具体任务及说明：
    先下载任务的基础代码：https://github.com/lagoufed/fed-e-001/raw/master/tasks/02-02-base-code.zip
    这是一个使用Vue CLI创建出来的Vue项目基础结构
    有所不同的是这里我移除掉了vue-cli-service（包含webpack等工具的黑盒工具）
    这里的要求就是直接使用webpack以及你所了解的周边工具、Loader、Plugin还原这个项目的打包任务
    尽可能的使用上所有你了解到的功能和特性
    答：见
