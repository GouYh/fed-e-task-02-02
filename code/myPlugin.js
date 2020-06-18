class MyPlugin {
    apply (compiler) {
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            // compilation => 可以理解为此次打包的上下文
            for (const name in compilation.assets) {
                console.log(name)
                console,log(compilation.assets[name].source())
                if (name.endsWith('.js')) {
                    const contents = compilation.assets[name].source()
                    const withoutComments = contents.replace(/\/\*\*+\*\//g, '')
                    compilation.assets[name] = {
                        // webpack 要求的必须的两个方法
                        source: () => withoutComments,
                        size: () => withoutComments.length
                    }
                }
            }
        })
    }
}