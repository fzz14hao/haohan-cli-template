﻿const { NODE_ENV, MICRO } = process.env;
const isDev = !MICRO ? true : false;
const layout = isDev;
const hideInMenu = !isDev;
export default [
  {
    path: '/',
    redirect: '/default',
  },
  {
    path: '/default',
    name: 'default',
    icon: 'crown',
    component: './default',
    hideInMenu: true,
    layout,
  },
  {
    path: '/user',
    layout,
    hideInMenu: true, //隐藏菜单项
    name:'用户',
    routes: [
      {
        path: '/user/login',
        layout: false, //不使用 主布局页面，会隐藏导航菜单，头部状态栏
        name: '登录',
        component: './user/Login',
      },
      {
        path: '/user',
        layout,
        redirect: '/user/login',
      },
      {
        name: '注册结果',
        layout,
        icon: 'smile',
        path: '/user/register-result',
        component: './user/register-result',
      },
      {
        name: '注册',
        layout,
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
      },
      {
        component: '404',
        layout,
      },
    ],
  },

  // demo
  {
    path: '/demo',
    name: '示例',
    icon: 'crown',
    hideInMenu,
    layout,
    routes: [
      {
        path: '/demo/index',
        name: '示例列表',
        layout,
        component: './demo/Index',
        id: 'xxui001',
      },
    ],
  },

  // demo
  {
    path: '/demo2',
    name: '示例2',
    icon: 'crown',
    hideInMenu,
    layout,
    routes: [
      {
        path: '/demo2/index',
        name: '示例列表',
        layout,
        component: './demo2/index',
        id: 'xxui1001',
      },

      {
        path: '/demo2/edit/:id?',
        layout,
        hideInMenu: true,
        name: '编辑',
        component: './demo2/edit',
        parentKeys: ['/demo2/index'],
        id: 'xxui1002',
      },
    ],
  },

  {
    component: '404',
  },
];
