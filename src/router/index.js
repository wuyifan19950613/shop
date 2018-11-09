import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('@/components/index')), 'index');
const details = r => require.ensure([], () => r(require('@/components/commodity/details')), 'details');
const homeContainers = r => require.ensure([], () => r(require('@/components/containers/homeContainers')), 'homeContainers');
// 登录
import admin from '@/router/admin';
import commodity from '@/router/commodity';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/index',
    },
    {
      path: '/admin',
      name: 'admin',
      component: homeContainers,
      children: admin,
    },
    // 首页
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '精选淘宝天猫优惠卷-小欢有劵',
        keywords: '',
        description: ''
      },
    },
    // 宝贝详情
    {
      path: '/commodity/details',
      name: 'details',
      component: details,
      meta: {
        title: '精选淘宝天猫优惠卷-小欢有劵',
        keywords: '',
        description: ''
      },
    },
    // 商品
    {
      path: '/commodity',
      name: 'commodity',
      component: homeContainers,
      children: commodity,
    },
  ],
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  const thisVue = Vue.prototype;
  if (to.meta.requireAuth) {
    const userInfo = thisVue.$getLS('user');
    if (!userInfo && userInfo.token) {
      next({
        path: '/admin/login',
      });
    } else {
      next();
    }
  } else {
    next();
  }


});

export default router;
