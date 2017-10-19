# Vue2Test
vue 2


.
|-- build                                      // 项目构建(webpack)相关代码
|   |-- build.js                               // 生产环境构建代码
|   |-- check-version.js                 // 检查node、npm等版本
|   |-- dev-client.js                        // 热重载相关
|   |-- dev-server.js                      // 构建本地服务器
|   |-- utils.js                                 // 构建工具相关
|   |-- webpack.base.conf.js        // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js        // webpack生产环境配置
|-- config                                    // 项目开发环境配置
|   |-- dev.env.js                           // 开发环境变量
|   |-- index.js                              // 项目一些配置变量
|   |-- prod.env.js                        // 生产环境变量
|   |-- test.env.js                          // 测试环境变量
|-- src                                        // 源码目录
|   |-- components                    // vue公共组件
|    |-- app                                            //  功能开发
|   |-- store                               // vuex的状态管理
|   |-- index.ts                           // 页面入口文件
|    | -- index.tpl.html                      // 入口页面
|    | -- favicon.ico
|   |-- main.ts                           // 程序入口文件，加载各种公共组件
|-- static                                   // 静态文件，比如一些图片，json数据等
|   |-- data                               // 群聊分析得到的数据用于数据可视化
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- package.json                     // 项目基本信息
|-- tsconfig.json                     // 编译ts配置文件
.
