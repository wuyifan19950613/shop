import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('@/components/index')), 'index');
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
      name: 'homeContainers',
      component: homeContainers,
      children: [
        {
          path: '',
          name: 'index',
          component: index,
          meta: {
            title: '小白优惠商城',
            keywords: '',
            description: ''
          },
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  const thisVue = Vue.prototype;
  next();
});

export default router;
