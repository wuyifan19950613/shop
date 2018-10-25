import Vue from 'vue';

import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper';

import {Toast} from 'mint-ui';

Vue.prototype.$toast = Toast;
Vue.component('swiper', swiper);
Vue.component('swiper-slide', swiperSlide);

export default Vue;
