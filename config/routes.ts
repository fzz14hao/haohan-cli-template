const { NODE_ENV, MICRO } = process.env;
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
    enName: 'title-8361.default-ui.default',
  },
  {
    path: '/user',
    layout,
    hideInMenu: true, //隐藏菜单项
    name: '用户',
    routes: [
      {
        path: '/user/login',
        layout: false, //不使用 主布局页面，会隐藏导航菜单，头部状态栏
        name: '登录',
        component: './user/Login',
        enName: 'title-052f.login-ui.登录',
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
        enName: 'title-a04d.registrationResults-ui.注册结果',
      },
      {
        name: '注册',
        layout,
        icon: 'smile',
        path: '/user/register',
        component: './user/register',
        enName: 'title-360b.enroll-ui.注册',
      },
      {
        component: '404',
        layout,
      },
    ],
    enName: 'title-3a65.user-ui.用户',
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
        enName: 'title-db51.listOfExamples-ui.示例列表',
      },
    ],
    enName: 'title-32ae.example-ui.示例',
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
        enName: 'title-c9d4.listOfExamples-ui.示例列表',
      },

      {
        path: '/demo2/edit/:id?',
        layout,
        hideInMenu: true,
        name: '编辑',
        component: './demo2/edit',
        parentKeys: ['/demo2/index'],
        id: 'xxui1002',
        enName: 'title-b6b2.edit-ui.编辑',
      },
    ],
    enName: 'title-2332.example2-ui.示例2',
  },

  {
    component: '404',
  },
];
