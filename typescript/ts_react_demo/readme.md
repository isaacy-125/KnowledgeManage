1.类型定义文件(*.d.ts)就是能够让编辑器或者插件来检测到第三方库中js的静态类型，这个文件是以.d.ts结尾。

2.在typescript2.0中，是使用@type来进行类型定义，当我们使用@type进行类型定义，typescript会默认查看./node_modules/@types文件夹

3.react相关依赖
- react // react的核心文件
- @types/react // 声明文件
- react-dom // react dom的操作包
- @types/react-dom 
- react-router-dom // react路由包
- @types/react-router-dom
- react-redux
- @types/react-redux
- redux-thunk  // 中间件
- @types/redux-logger
- redux-logger // 中间件
- connected-react-router

4.webpack相关依赖
- webpack // webpack的核心包
- webpack-cli // webapck的工具包
- webpack-dev-server // webpack的开发服务
- html-webpack-plugin // webpack的插件，可以生成index.html文件

5.typescript相关依赖
- typescript // ts的核心包
- ts-loader // 把ts编译成指定语法比如es5 es6等的工具，有了它，基本不需要babel了，因为它会把我们的代码编译成es5
- source-map-loader // 用于开发环境中调试ts代码

4.基本都是模块和声明文件都是一对对出现的，有一些不是一对对出现，就是因为都集成到一起去了。

  
