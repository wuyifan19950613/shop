const login = r => require.ensure([], () => r(require('@/components/admin/login')), 'login');
const register = r => require.ensure([], () => r(require('@/components/admin/register')), 'register');
const index = r => require.ensure([], () => r(require('@/components/admin/index')), 'index');
const homebanner = r => require.ensure([], () => r(require('@/components/admin/homebanner')), 'homebanner');
const hotshop = r => require.ensure([], () => r(require('@/components/admin/hotshop')), 'hotshop');
const nicewhere = r => require.ensure([], () => r(require('@/components/admin/nicewhere')), 'nicewhere');

export default [
  {
    path: '',
    redirect: 'login',
  },
  {
    path: 'login',
    name: 'login',
    component: login,
    meta: {
      title: '登录',
    },
  },
  {
    path: 'nicewhere',
    name: 'nicewhere',
    component: nicewhere,
    meta: {
      title: '好的都在这里管理',
      requireAuth: true,
    },
  },
  {
    path: 'hotshop',
    name: 'hotshop',
    component: hotshop,
    meta: {
      title: '热门商品管理',
      requireAuth: true,
    },
  },
  {
    path: 'homebanner',
    name: 'homebanner',
    component: homebanner,
    meta: {
      title: '首页banner管理',
      requireAuth: true,
    },
  },
  {
    path: 'register',
    name: 'register',
    component: register,
    meta: {
      title: '注册',
    },
  },
  {
    path: 'index',
    name: 'index',
    component: index,
    meta: {
      title: '后台管理',
      requireAuth: true,
    },
  },
]
