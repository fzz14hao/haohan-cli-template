# HH（浩汉智能）

基于 [Ant Design Pro](https://pro.ant.design) 和 [UMI](https://umijs.org/) 的企业级中后台前端模板，为浩汉智能业务系统提供开箱即用的开发脚手架。

## 技术栈

| 类别 | 技术 | 说明 |
|------|------|------|
| 核心框架 | React 17 | 页面渲染 |
| 脚手架 | UMI 3 | 路由、构建、插件体系 |
| UI 组件库 | Ant Design 4.24 | 基础组件 |
| 布局 | @ant-design/pro-layout | 中后台布局 |
| 业务组件 | @haohan/ui | 浩汉内部组件库 |
| 工具函数 | @haohan/utils | 浩汉通用工具 |
| Hooks | @haohan/hooks | 浩汉通用 Hooks |
| 插件工具 | @haohan/plugs | 脚手架脚本、代码生成 |
| 表格 | ali-react-table | 阿里大数据表格 |
| 图表 | BizCharts / AntV | 数据可视化 |
| 国际化 | react-i18next | 多语言支持 |
| 微前端 | @umijs/plugin-qiankun | qiankun 微前端支持 |
| 语言 | TypeScript 4 | 类型安全 |

## 环境要求

- **Node.js** >= 10.0.0（建议 14.x 或 16.x）
- **npm** 或 **yarn**
- 建议的网络环境（需访问内部私有 npm 仓库）

## 安装

```bash
# 安装依赖
npm install
# 或
yarn
```

> **注意：** 本项目依赖浩汉私有包（`@haohan/ui`、`@haohan/utils`、`@haohan/hooks`、`@haohan/plugs` 等），安装时需指定私有 registry：
>
> ```bash
> # yarn
> yarn add <package-name> --save --registry=http://120.76.194.61:4000
>
> # npm
> npm i <package-name> --save --registry=http://120.76.194.61:4000
> ```

## 开发命令

### 启动开发服务器

```bash
# 默认启动（含 Mock 数据）
npm start

# 连接开发环境 API（无 Mock）
npm run start:dev

# 连接测试环境 API
npm run start:test

# 连接预发布环境 API
npm run start:pre

# 不使用 Mock 启动
npm run start:no-mock
```

### 构建

```bash
# 标准构建
npm run build

# 微前端子应用构建
npm run build:micro
```


### 路由与国际化

```bash
# 编辑路由配置
npm run editRouter

# 获取页面 ID
npm run getPageId

# 国际化相关
npm run editI18next
npm run editI18nextComponents
npm run findi18next
npm run addRouterEnName

# 推送路由到服务器
npm run pushRouteServer

# 一键执行国际化流程
npm run hhI18next
```

### 组件命名

```bash
# 为组件添加随机名称（避免冲突）
npm run addRandomNameToComponents
npm run addRandomNameToComponentsForm
npm run addRandomNameToHhForm
npm run addRandomNameToHhTable
```

## 项目结构

```
├── config/                 # 配置文件
│   ├── config.ts           # UMI 主配置
│   ├── config.dev.ts       # 开发环境配置
│   ├── defaultSettings.ts  # 默认布局设置
│   ├── proxy.ts            # 代理配置
│   ├── routes.ts           # 路由配置
│   └── oneapi.json         # OpenAPI 配置
├── src/
│   ├── components/         # 公共组件（Header、Footer、NoticeIcon 等）
│   ├── locales/            # 国际化文件（zh-CN / en-US）
│   ├── models/             # 数据模型（UMI Model）
│   ├── pages/              # 页面
│   │   ├── default/        # 默认首页
│   │   ├── user/           # 用户相关（登录、注册）
│   │   ├── demo/           # 示例页
│   │   └── demo2/          # 示例页 2（含编辑页）
│   ├── services/           # 后端接口服务层
│   │   ├── BasicInfo/      # 基础信息模块接口
│   │   ├── Fi/             # 财务模块接口
│   │   ├── Mos/            # 生产模块接口
│   │   └── Global/         # 全局接口
│   ├── access.ts           # 权限定义
│   ├── app.tsx             # 应用入口配置
│   └── global.tsx          # 全局脚本
├── mock/                   # Mock 数据
├── tests/                  # 测试文件
├── package.json
└── tsconfig.json
```

## 路由说明

项目使用约定式路由，配置文件位于 [config/routes.ts](config/routes.ts)。

| 路由 | 说明 | 备注 |
|------|------|------|
| `/` | 重定向到 `/default` | - |
| `/default` | 默认首页 | 默认隐藏菜单 |
| `/user/login` | 登录页 | 无主布局 |
| `/demo/index` | 示例列表 | 微前端模式下隐藏 |
| `/demo2/index` | 示例2列表 | 微前端模式下隐藏 |
| `/demo2/edit/:id?` | 示例2编辑页 | 隐藏菜单，支持新增/编辑 |

> **提示：** 路由中 `layout: false` 表示不使用主布局（隐藏导航菜单和顶部状态栏），`hideInMenu: true` 表示在菜单中隐藏该项。

## 微前端支持

项目集成了 `@umijs/plugin-qiankun`，支持作为微前端子应用接入：

```bash
# 构建微前端子应用产物
npm run build:micro
```

在 `config/config.ts` 中已包含 `qiankun` 配置，可按需修改 `master` / `slave` 选项。

## 相关资源

| 资源 | 地址 |
|------|------|
| Ant Design 组件库 | https://ant.design/index-cn |
| Ant Design Pro 文档 | https://pro.ant.design |
| UMI 脚手架 | https://umijs.org/ |
| 阿里表格（ali-react-table） | https://ali-react-table.js.org/ |
| 内部组件库（@haohan/ui） | http://10.9.0.15:6500/compui |

## 常见问题

### 私有包安装失败

请确认网络可以访问 `http://120.76.194.61:4000`，或在项目根目录创建 `.npmrc` 文件：

```ini
registry=http://120.76.194.61:4000
```


### 环境切换

通过 `REACT_APP_ENV` 环境变量切换后端 API 环境，详见 [config/proxy.ts](config/proxy.ts)。

## 更多

- 完整 Ant Design Pro 文档：https://pro.ant.design
- 问题反馈：https://github.com/ant-design/ant-design-pro
