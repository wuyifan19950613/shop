const login = r => require.ensure([], () => r(require('@/components/admin/login')), 'login');

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
]
