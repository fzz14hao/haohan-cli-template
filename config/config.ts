// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  history: { type: 'hash' },
  base: '/ui', // 部署目录或者 dev的路由前缀
  publicPath: process.env.NODE_ENV === 'production' ? '/ui/' : '/',
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  devServer: {
    port: 8080, // 默认8000
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
  },
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  openAPI: [
    // {
    //   //erp user api 文档
    //   requestLibPath: "import { request } from 'umi'",
    //   schemaPath: 'http://10.9.0.15:5010/user/swagger/0.8.1.00/swagger.json',
    //   mock: false,
    //   projectName: 'Users',
    // },
    // {
    //   //BasicInfo
    //   requestLibPath: "import { request } from 'umi'",
    //   schemaPath: 'http://10.9.0.15:5030/basicinfo/swagger/0.8.1.00/swagger.json',
    //   mock: false,
    //   projectName: 'Basicinfo',
    // },
    // {
    //   //mos
    //   requestLibPath: "import { request } from 'umi'",
    //   schemaPath: 'http://10.9.0.15:5046/mos/swagger/0.8.1.00/swagger.json',
    //   mock: false,
    //   projectName: 'Mos',
    // },
    // {
    //   //Fi
    //   requestLibPath: "import { request } from 'umi'",
    //   schemaPath: 'http://10.9.0.15:5059/fi/swagger/1.0.0.00/swagger.json',
    //   mock: false,
    //   projectName: 'Fi',
    // },
  ],

  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
  qiankun: {
    slave: {},
  },
});
