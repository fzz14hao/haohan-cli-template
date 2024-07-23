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
      },

      {
        path: '/demo2/edit/:id?',
        layout,
        hideInMenu: true,
        name: '编辑',
        component: './demo2/edit',
        parentKeys: ['/demo2/index'],
      },
    ],
  },
  // demo
  {
    path: '/demo3',
    name: '示例3',
    icon: 'crown',
    hideInMenu,
    layout,
    routes: [
      {
        path: '/demo3/index',
        name: '示例列表',
        layout,
        component: './demo3/Index',
      },
      {
        path: '/demo3/edit/:id?',
        layout,
        hideInMenu: true,
        name: '编辑',
        component: './demo3/edit',
        parentKeys: ['/demo3/index'],
      },
    ],
  },
   // demo4
   {
    path: '/demo4',
    name: '示例4',
    icon: 'crown',
    hideInMenu,
    layout,
    routes: [
      {
        path: '/demo4/index',
        name: '示例列表',
        layout,
        component: './demo4/Index',
      },
      {
        path: '/demo4/edit/:id?',
        layout,
        hideInMenu: true,
        name: '编辑',
        component: './demo4/edit',
        parentKeys: ['/demo4/index'],
      },
    ],
  },
  // demoTest0
  {
    path: '/demoTest0',
    name: 'demoTest0',
    icon: 'crown',
    hideInMenu,
    layout,
    routes: [
      {
        path: '/demoTest0/index',
        name: '示例列表',
        layout,
        component: './demoTest0/Index',
      },
      {
        path: '/demoTest0/edit/:id?',
        layout,
        hideInMenu: true,
        name: '编辑',
        component: './demoTest0/edit',
        parentKeys: ['/demoTest0/index'],
      },
    ],
  },
    // demoTest1
    {
      path: '/demoTest1',
      name: 'demoTest1',
      icon: 'crown',
      hideInMenu,
      layout,
      routes: [
        {
          path: '/demoTest1/index',
          name: '示例列表',
          layout,
          component: './demoTest1/Index',
        },
      ],
    },
    // demoTest2
    {
      path: '/demoTest2',
      name: 'demoTest2',
      icon: 'crown',
      hideInMenu,
      layout,
      routes: [
        {
          path: '/demoTest2/index',
          name: '示例列表',
          layout,
          component: './demoTest2/Index',
        },
      ],
    },
   // demoTest3
   {
    path: '/demoTest3',
    name: 'demoTest3',
    icon: 'crown',
    hideInMenu,
    layout,
    routes: [
      {
        path: '/demoTest3/index',
        name: '示例列表',
        layout,
        component: './demoTest3/Index',
      },
      {
        path: '/demoTest3/edit/:id?',
        layout,
        hideInMenu: true,
        name: '编辑',
        component: './demoTest3/edit',
        parentKeys: ['/demoTest3/index'],
      },
    ],
  },
   // demoTest4
   {
    path: '/demoTest4',
    name: 'demoTest4',
    icon: 'crown',
    hideInMenu,
    layout,
    routes: [
      {
        path: '/demoTest4/index',
        name: '示例列表',
        layout,
        component: './demoTest4/Index',
      },
      {
        path: '/demoTest4/edit/:id?',
        layout,
        hideInMenu: true,
        name: '编辑',
        component: './demoTest4/edit',
        parentKeys: ['/demoTest4/index'],
      },
    ],
  },
  {
    component: '404',
  },
];
