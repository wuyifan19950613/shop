import Vue from 'vue';

import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper';

import {Toast} from 'mint-ui';
import VueLazyLoad from 'vue-lazyload';


Vue.prototype.$toast = Toast;
Vue.component('swiper', swiper);
Vue.component('swiper-slide', swiperSlide);

Vue.use(VueLazyLoad,{
    error:'../../static/img/LazyLoaderror.png',
    loading:'../../static/img/LazyLoad.gif ',
})

export default Vue;
