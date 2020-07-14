# 小程序打包脚手架

## 支持特性
- webpack4
- babel7
- scss
- iconfont
- eslint
- stylelint
- vant-weapp(小程序相关ui框架)
- npm packages import
- subPackages

## 使用

1. git clone 本项目到本地
2. npm i 安装本地依赖包
3. npm run dev 进行开发模式
4. npm run build 进行打包模式
5. config文件夹下进行变量配置，目前主要支持src下路径简写定义，以及配置全局环境变量辅助开发，通过在项目文件中`process.env.XXX`进行配置文件获取

## 目录结构
```text
|-- config                //webpack配置文件、全局变量配置
|-- dist                  // 打包生成目录
|-- src                   // 开发目录
    |-- assets             // 需要打包资源文件夹(svg-icon,iconfont, image, js-files)
    |-- components        // 公共组件目录
    |-- custom-tab-bar    // 自定义tabBar组件
    |-- pages             // 主包页面目录
    |-- store             // 全局状态文件夹
    |-- styles            // 全局样式文件夹
    |-- subPack_account   // 分包页面事例目录
    |-- subPack_community // 分包页面事例目录
    |-- utils             // 工具方法文件夹， 可自行新建
    |-- wxml              // 全局template文件夹
    |-- wxs               // 主包页面目录
    |-- app.js            // 入口文件
    |-- app.json          // 全局配置文件
    |-- app.scss          // 全局样式文件
    |-- config.js         // 配置文件
    |-- sitemap.js        // 微信配置文件
|-- static                // 非打包静态资源文件夹(iconfont, images, files)
|-- *                     // 其它工程配置文件
```


## 说明
1. 微信小程序代码打包压缩、优化、css预处理、分包、npm包引入(无需官方npm的支持)
2. 完全原汁原味的小程序开发，没有引入其他语法，只利用webapck赋能开发

## 感谢
感谢小程序webpack打包插件作者:
<a target="_blank" href="https://github.com/realywithoutname/mini-program-webpack-loader">https://github.com/realywithoutname/mini-program-webpack-loader</a>


## 注意
1. 本项目中带有部分自己试验性代码，进行部分小程序能力验证，可根据自身需求进行删减
2. 建议使用vscode，安装eslint及stylelint插件辅助开发，体验更佳
