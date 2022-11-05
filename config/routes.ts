const routes = [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: '登录',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  // {
  //   name: '首页',
  //   path: '/home',
  //   icon: 'ProfileFilled',
  //   component: './home',
  // },
  {
    name: '任务管理',
    path: '/taskManagement',
    icon: 'ProfileFilled',
    component: './taskManagement',
  },
  {
    name: '模板管理',
    icon: 'ProfileFilled',
    path: '/templateManagement',
    routes: [
      {
        path: '/templateManagement/info',
        name: '模板信息',
        icon: 'ProfileFilled',
        component: './templateManagement/info',
      },
      {
        path: '/templateManagement/templateFile',
        name: '模板文件管理',
        icon: 'ProfileFilled',
        component: './templateManagement/templateFile',
      },
      {
        path: '/templateManagement',
        redirect: '/templateManagement/info',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: '设备管理',
    path: '/deviceManagement',
    icon: 'ProfileFilled',
    component: './deviceManagement/index',
  },
  {
    name: '系统监视',
    icon: 'ProfileFilled',
    path: '/systemManagement',
    routes: [
      {
        path: '/systemManagement/running',
        name: '运行中任务',
        component: './/systemManagement/running',
      },
      {
        path: '/systemManagement/interface',
        name: '接口汇总',
        component: './/systemManagement/interface',
      },
      {
        path: '/systemManagement/collectionLog',
        name: '采集日志',
        component: './/systemManagement/collectionlog',
      },
      {
        path: '/systemManagement',
        redirect: '/systemManagement/interface',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/',
    redirect: './taskManagement',
  },
  {
    component: './404',
  },
];

export default routes;
