/*
 * @Author: shichaoxin
 * @Date: 2020-05-23 13:23:51
 * @Last Modified by: shichaoxin
 * @Last Modified time: 2020-05-23 22:33:50
 */


/**
 * 路由配置信息
 */
export const RouterMenu = [
  {
    path: '/a',
    id: 1,
    routerName: '体育',
    children: [
      {
        path:'/b',
        id: 1-1,
        routerName: '篮球'
      },
      {
        path:'/c',
        id: 3,
        routerName: '排球'
      }
    ]
  },
  {
    path: '/bb',
    id: 2,
    routerName: '语文',
  },
  {
    path: '/dd',
    id: 3,
    routerName: '数学',
  }
]



