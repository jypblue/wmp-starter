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

## 说明
1. 微信小程序代码打包压缩、优化、css预处理、分包、npm包引入(无需官方npm的支持)
2. 完全原汁原味的小程序开发，没有引入其他语法，只利用webapck赋能开发

## 感谢
感谢小程序webpack打包插件作者:
<a target="_blank" href="https://github.com/realywithoutname/mini-program-webpack-loader">https://github.com/realywithoutname/mini-program-webpack-loader</a>


## 注意
本项目中带有部分自己试验性代码，进行部分小程序能力验证，可根据自身需求进行删减
