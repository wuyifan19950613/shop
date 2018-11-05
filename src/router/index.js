import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('@/components/index')), 'index');
const search = r => require.ensure([], () => r(require('@/components/search/search')), 'search');
const details = r => require.ensure([], () => r(require('@/components/details/details')), 'details');
const homeContainers = r => require.ensure([], () => r(require('@/components/containers/homeContainers')), 'homeContainers');

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/index',
    },
    // 首页
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '小欢优惠劵',
        keywords: '',
        description: ''
      },
    },
    // 搜索页
    {
      path: '/search',
      name: 'homeContainers',
      component: homeContainers,
      children: [
        {
          path: '',
          name: 'search',
          component: search,
          meta: {
            title: '搜索宝贝',
            keywords: '',
            description: ''
          },
        },
      ],
    },
    // 搜索页
    {
      path: '/details',
      name: 'details',
      component: details,
      meta: {
        title: '商品详情',
        keywords: '',
        description: ''
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  const thisVue = Vue.prototype;
  next();
});

export default router;
