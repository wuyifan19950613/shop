// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'swiper/dist/css/swiper.css'
import 'mint-ui/lib/style.css';
import Vue from '@/utils/VueUse';
import App from './App'
import router from '@/router/index'
import store from '@/store/index';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted () {
    document.dispatchEvent(new Event('render-event'));
  },
})
