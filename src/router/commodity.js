const listGoods = r => require.ensure([], () => r(require('@/components/commodity/listGoods')), 'listGoods');
const search = r => require.ensure([], () => r(require('@/components/commodity/search')), 'search');

export default [
  {
    path: '',
    redirect: '/',
  },
  {
    path: 'listGoods',
    name: 'listGoods',
    component: listGoods,
    meta: {
      title: '宝贝列表',
      keepAlive: true,
    },
  },
  {
    path: 'search',
    name: 'search',
    component: search,
    meta: {
      title: '搜索宝贝',
      keepAlive: true,
    },
  },
]
