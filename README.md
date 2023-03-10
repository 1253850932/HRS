<h1>HRMS人力资源管理系统</h1>

## 用法

### 安装依赖

pnpm install

### 安装一个包

pnpm add 包名

### 卸载一个包

pnpm remove 包名

## 目录结构
``` 
├── .github  # GitHub 配置文件
│   ├── ISSUE_TEMPLATE  # 问题提交参考模板
│   ├── workflows git  # 工作流
├── .husky  # 代码提交前校验配置文件
├── .vscode  # IDE 工具推荐配置文件
│   │   ├── extensions.json  # 一键安装平台推荐的 vscode 插件
│   │   ├── settings.json  # 设置扩展程序或 vscode 编辑器的一些属性
│   │   ├── vue3.0.code-snippets  # vue3.0 代码片段
│   │   └── vue3.2.code-snippets  # vue3.2 代码片段
├── build  # 构建工具
│   │   ├── cdn.ts  # 打包时采用 cdn 模式
│   │   ├── compress.ts  # 打包时启用 gzip 压缩或 brotli 压缩
│   │   ├── index.ts  # 导出环境变量、跨域代理函数
│   │   ├── info.ts  # 输出打包信息（大小、用时）
│   │   ├── optimize.ts  # vite 依赖预构建配置项
│   │   ├── plugins.ts  # vite 相关插件存放处
├── locales  # 国际化文件存放处
│   │   ├── en.yaml  # 英文配置
│   │   ├── zh-CN.yaml  # 中文配置
├── mock  # mock 模拟后台数据
│   │   ├── asyncRoutes.ts  # 模拟后台返回动态路由
│   │   ├── ...
├── node_modules  # 模块依赖
├── public  # 静态资源
│   │   ├── html  # 静态 iframe 页面
│   │   ├── favicon.ico  # favicon
│   │   ├── serverConfig.json  # 全局配置文件（打包后修改也可生效）
├── src
│   ├── api  # 接口请求统一管理
│   ├── assets  # 字体、图片等静态资源
│   ├── components  # 自定义通用组件
│   │   ├── ReAuth  # 按钮级别权限管理组件
│   │   ├── ReBarcode  # 条形码组件
│   │   ├── ReCountTo  # 数字动画组件
│   │   ├── ReCropper  # 图片裁剪组件
│   │   ├── ReFlicker  # 圆点、方形闪烁动画组件
│   │   ├── ReFlop  # 时间翻牌组件
│   │   ├── ReFlowChart  # LogicFlow 流程图组件
│   │   ├── ReIcon  # 图标组件
│   │   ├── ReImageVerify  # 图形验证码组件
│   │   ├── ReMap  # 高德地图组件
│   │   ├── ReQrcode  # 二维码组件
│   │   ├── ReSeamlessScroll  # 无缝滚动组件
│   │   ├── ReSelector  # 选择器组件
│   │   ├── ReSplitPane  # 切割面板组件
│   │   ├── ReTreeLine  # 树形连接线组件（基于element-plus）
│   │   ├── ReTypeit  # 打字机效果组件
│   ├── config  # 获取平台动态全局配置
│   ├── directives  # 自定义指令
│   │   ├── auth  # 按钮级别权限指令
│   │   ├── elResizeDetector  # 监听容器改变指令
│   ├── layout  # 主要页面布局
│   ├── plugins  # 处理一些库或插件，导出更方便的 api
│   ├── router  # 路由配置
│   ├── store  # pinia 状态管理
│   ├── style  # 全局样式
│   │   ├── dark.scss  # 暗黑模式样式适配文件
│   │   ├── element-plus.scss  # 全局覆盖 element-plus 样式文件
│   │   ├── reset.scss  # 全局重置样式文件
│   │   ├── sidebar.scss  # layout 布局样式文件
│   │   ├── tailwind.css  # tailwindcss 自定义样式配置文件
│   │   ├── ...
│   ├── utils  # 全局工具方法
│   │   ├── http  # 封装 axios 文件
│   │   ├── progress  # 封装 nprogress
│   │   └── auth.ts  # 处理用户信息和 token 相关
│   │   └── chinaArea.ts  # 汉字转区域码
│   │   └── globalPolyfills.ts  # 解决项目可能因为安装某个依赖出现 `global is not defined` 报错
│   │   └── message.ts  # 消息提示函数
│   │   ├── mitt.ts  # 触发公共事件，类似 EventBus
│   │   ├── print.ts  # 打印函数
│   │   ├── propTypes.ts  # 二次封装 vue 的 propTypes
│   │   ├── responsive.ts  # 全局响应式 storage 配置
│   │   ├── sso.ts  # 前端单点登录逻辑处理
│   │   ├── tree.ts  # 树结构相关处理函数
│   ├── views  # 存放编写业务代码页面
│   ├── App.vue  # 入口页面
│   ├── main.ts  # 入口文件
│   └── mockProdServer.ts  # mock 服务相关
├── types  # 全局 TS 类型配置
│   │   ├── global.d.ts  # 全局类型声明文件
│   │   ├── index.d.ts  # 全局类型声明文件
│   │   ├── index.ts  # 全局类型声明文件
│   │   ├── shims-tsx.d.ts  # 该文件是为了给 .tsx 文件提供类型支持，在编写时能正确识别语法
│   │   └── shims-vue.d.ts  # .vue、.scss 文件不是常规的文件类型，typescript 无法识别，所以我们需要通过下图的代码告诉 typescript 这些文件的类型，防止类型报错
├── .editorconfig  # 编辑器读取文件格式及样式定义配置 https://editorconfig.org/
├── .env  # 全局环境变量配置（当 .env 文件与 .env.development、.env.production、.env.staging 这三个文件之一存在相同的配置 key 时，.env 优先级更低）
├── .env.development  # 开发环境变量配置
├── .env.production  # 生产环境变量配置
├── .env.staging  # 预发布环境变量配置
├── .eslintignore  # eslint 语法检查忽略文件
├── .eslintrc.js  # eslint 语法检查配置
├── .gitignore  # git 提交忽略文件
├── .gitpod.yml  # gitpod 部署配置
├── .markdownlint.json  # markdown 格式检查配置
├── .npmrc  # npm 配置文件
├── .prettierrc.js  # prettier 插件配置
├── .stylelintignore  # stylelint 插件检查忽略文件
├── CHANGELOG.en_US.md  # 版本更新日志（英文版）
├── CHANGELOG.md  # 版本更新日志（英文版）
├── CHANGELOG.zh_CN.md  # 版本更新日志（中文版）
├── commitlint.config.js  # git 提交前检查配置
├── index.html  # html 主入口
├── LICENSE  # 证书
├── package.json  # 依赖包管理以及命令配置
├── pnpm-lock.yaml  # 依赖包版本锁定文件
├── postcss.config.js  # postcss 插件配置
├── README.en-US.md  # README（英文版）
├── README.md  # README
├── stylelint.config.js  # stylelint 配置
├── tailwind.config.js  # tailwindcss 配置
├── tsconfig.json  # typescript 配置
└── vite.config.ts  # vite 配置
```

## 数组循环只得到最后一个数据

``` js
    tradeType.map((item, index) => {    //tradeType是要遍历的数组
      arr.push(Object.assign({}, obj, { tradeType: item }));//arr是新数组,最后的参数是要取的遍历数组内的值，将tradType放到obj里，值是外层数组每次遍历出来的值
     });
``` 		 