import Vue from 'vue';

import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper';

import {
  Toast,
  Header,
  Button
} from 'mint-ui';
import VueLazyLoad from 'vue-lazyload';
import VueClipboard from 'vue-clipboard2' // 复制到剪切板
const commonHeader = r => require.ensure([], () => r(require('@/components/global/commonHeader')), 'commonHeader');

// mint-ui 按需加载
Vue.prototype.$toast = Toast;
Vue.component('swiper', swiper);
Vue.component('swiper-slide', swiperSlide);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);

Vue.use(VueClipboard)
// 图片懒加载
Vue.use(VueLazyLoad,{
    error:'../../static/img/LazyLoaderror.png',
    loading:'../../static/img/LazyLoad.gif ',
})
// 自定义组件
Vue.component('common-header', commonHeader);


export default Vue;