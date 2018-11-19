import Vue from 'vue';

import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper';
import MetaInfo from 'vue-meta-info'
import {
  Toast,
  Header,
  Button,
  Indicator,
  InfiniteScroll,
} from 'mint-ui';
import VueLazyLoad from 'vue-lazyload';
import VueClipboard from 'vue-clipboard2' // 复制到剪切板
import ls from '@/utils/localStorage';

const commonHeader = r => require.ensure([], () => r(require('@/components/global/commonHeader')), 'commonHeader');
const loading = r => require.ensure([], () => r(require('@/components/modules/loading')), 'loading');
const toEnd = r => require.ensure([], () => r(require('@/components/modules/toEnd')), 'toEnd');

// mint-ui 按需加载
Vue.prototype.$toast = Toast;
Vue.prototype.$Indicator = Indicator;
Vue.component('swiper', swiper);
Vue.component('swiper-slide', swiperSlide);
Vue.component('loading', loading);
Vue.component('toEnd', toEnd);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
// 本地localStorage储存
Vue.use(ls);
Vue.use(VueClipboard);
Vue.use(InfiniteScroll);
Vue.use(MetaInfo);
// 图片懒加载
Vue.use(VueLazyLoad,{
    error:'../../static/img/LazyLoaderror.png',
    loading:'../../static/img/LazyLoad.gif ',
})
// 自定义组件
Vue.component('common-header', commonHeader);


export default Vue;
