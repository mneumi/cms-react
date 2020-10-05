import { IMenuItem } from '../types';

export const MenuList: Array<IMenuItem> = [
  {
    title: '首页',
    key: '/admin/home'
  },
  {
    title: 'UI',
    key: '/admin/ui',
    children: [
      {
        title: '按钮',
        key: '/admin/ui/buttons'
      },
      {
        title: '弹框',
        key: '/admin/ui/modals'
      },
      {
        title: 'Loading',
        key: '/admin/ui/loadings'
      },
      {
        title: '通知提醒',
        key: '/admin/ui/notification'
      },
      {
        title: '全局Message',
        key: '/admin/ui/messages'
      },
      {
        title: 'Tab页签',
        key: '/admin/ui/tabs'
      },
      {
        title: '图片画廊',
        key: '/admin/ui/gallery'
      },
      {
        title: '轮播图',
        key: '/admin/ui/carousel'
      }
    ]
  },
  {
    title: '表单',
    key: '/admin/form',
    children: [
      {
        title: '登录',
        key: '/admin/form/signin'
      },
      {
        title: '注册',
        key: '/admin/form/signup'
      }
    ]
  },
  {
    title: '表格',
    key: '/admin/table',
    children: [
      {
        title: '基础表格',
        key: '/admin/table/basic'
      },
      {
        title: '高级表格',
        key: '/admin/table/advance'
      }
    ]
  },
  {
    title: '富文本',
    key: '/admin/richtext'
  },
  {
    title: '城市管理',
    key: '/admin/citymanager'
  },
  {
    title: '订单管理',
    key: '/admin/ordermanager'
  },
  {
    title: '员工管理',
    key: '/admin/usermanager'
  },
  {
    title: '车辆地图',
    key: '/admin/bikemap'
  },
  {
    title: '图标',
    key: '/admin/charts'
  },
  {
    title: '权限管理',
    key: '/admin/permission'
  },
];