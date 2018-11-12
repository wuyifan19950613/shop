<template>
  <div id="" class="max-width">
    <!--  查询商品input start-->
    <div class="serch-commodity">
      <div :class="`serch-content ${backActive}`">
        <router-link :to="{ path: '/commodity/search'}">
          <input name="search" type="text" placeholder="请输入搜索文字">
        </router-link>
      </div>
    </div>
    <!--  查询商品input end-->

    <!--  首页banner图start-->
    <swiper :options="indexBanner" class="index-banner">
      <swiper-slide v-for="(item, index) in imgUrl" :key="index">
        <img v-lazy="item" alt="" class="">
      </swiper-slide>
      <div class="swiper-pagination index-banner-pagination" slot="pagination"></div>
    </swiper>
    <!--  首页banner图end-->

    <!--  首页广告位start-->
    <div class="advertisement md10">
      <img src="../assets/img/icon/ggw01.png" alt="">
    </div>
    <!--  首页广告位end-->

    <!--  热门商品start-->
    <div class="hot-commodity md10">
      <div class="base-title">热门品类</div>
      <ul class="commodity-list">
        <li class="" v-for="(item, index) in commodityUrl" :key="index">
          <a href="">
            <img v-lazy="item.imgUrl" :alt="item.title">
          </a>
        </li>
      </ul>
    </div>
    <!--  热门商品end-->

    <!--  商品列表start-->
    <div class="recommend md10">
      <div class="base-title">好的都在这里</div>
      <div class="default-height" v-if="navSwiperFiexd"></div>
      <swiper :options="shop_list" :class="`nav-swiper ${navSwiperFiexd ? 'active' : ''}`" ref="navSwiper">
        <swiper-slide class="nav-slide" v-for="(item, index) in shop_nav_list" :key="index">
          <div class="nav-title" :class="{active:index === nav_active}">{{item}}</div>
        </swiper-slide>
      </swiper>
      <ul class="recommend-list">
        <li v-if="typeCommodity" v-for="(t, i) in allList[nav_active]" :key="i">
          <router-link :to="{ path: '/commodity/details', query: {id: t._id, Label: t.Label}}">
            <div class="img-url">
                <img class="" :src="t.showPic[0]" alt="">
            </div>
            <div class="commodity">
              <h1 class="commodity-title">
                {{t.title}}
              </h1>
              <div class="price">
                <span class="sale-price">¥{{t.voucher}}</span>
                <span class="market-price">¥{{t.PrePrice}}</span>
              </div>
              <div class="progress">
                <!-- <span class="count-coupon">剩余100000</span> -->
                <div class="used-coupon" style="width:100%;">
                  <span class="j">劵</span>
                  <span>{{t.couponMoney}}元</span>
                </div>
              </div>
            </div>
          </router-link>

        </li>
      </ul>
    </div>
    <!--  商品列表end-->
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "index",
  data() {
    return{
      backActive: '',
      nav_active: 0,
      domeScrollTop: 0,
      navSwiperFiexd: false,
      allList: [],
      init: {
        offsetTop: '',
      },
      imgUrl: [
        'https://img11.static.yhbimg.com/yhb-img01/2018/10/22/08/0174e468be6786ad4367c0b4a5f30c15f5.jpg?imageView2/2/w/640/h/240/q/60',
        'https://img10.static.yhbimg.com/yhb-img01/2018/10/22/08/0130dca2a5117f52a251779ce187e18cd1.jpg?imageView2/2/w/640/h/240/q/60',
        'https://img11.static.yhbimg.com/yhb-img01/2018/10/22/08/01917963f65a3d10854d0e989da9c4683b.jpg?imageView2/2/w/640/h/240/q/60',
        'https://img10.static.yhbimg.com/yhb-img01/2018/10/22/08/01cd93e72039c5f116fb28014e134200c9.jpg?imageView2/2/w/640/h/240/q/60',
        'https://img11.static.yhbimg.com/yhb-img01/2018/10/22/08/01f2018911d102f9eea279b0cb7baaf833.jpg?imageView2/2/w/640/h/240/q/60',
      ],
      commodityUrl:[
        {
          imgUrl:'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/015308423c5451e181df04930885a1251d.jpg?imageView2/2/w/140/h/140/q/60',
          title:'卫衣',
        },
        {
          imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/0174f7ad0997cff09a22a8abe4e8391bdf.jpg?imageView2/2/w/140/h/140/q/60',
          title:'夹克'
        },
        {
          imgUrl: 'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/0118ae85238b51dbe7971324f16f4808fc.jpg?imageView2/2/w/140/h/140/q/60',
          title:'衬衫'
        },
        {
          imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/01f4f98b41a56ad6b3d8b034f766529d7e.jpg?imageView2/2/w/140/h/140/q/60',
          title:'板鞋/滑板鞋'
        },
        {
          imgUrl: 'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/010d6434adb54ea77dfa3f042b1c56ef6a.jpg?imageView2/2/w/140/h/140/q/60',
          title:'休闲/运动鞋'
        },
        {
          imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/011165f18889a8c7df0760fdcdf0e4d7b0.jpg?imageView2/2/w/140/h/140/q/60',
          title:'靴子'
        },
        {
          imgUrl: 'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/01e465bc9d68949381a3b66ce54e1a64b5.jpg?imageView2/2/w/140/h/140/q/60',
          title:'牛仔裤'
        },
        {
          imgUrl: 'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/018e917b5ad8a68145637aa0b6c7688572.jpg?imageView2/2/w/140/h/140/q/60',
          title:'休闲裤'
        },
        {
          imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/019e96f189c46eb91e7733eeac39611e9e.jpg?imageView2/2/w/140/h/140/q/60',
          title:'双肩包'
        },
        {
          imgUrl: 'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/010dcd51ee144c6b754301b3f74a1b9555.jpg?imageView2/2/w/140/h/140/q/60',
          title:'帽子'
        },
        {
          imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/01790f94446386a44c2b3d980e8783d03e.jpg?imageView2/2/w/140/h/140/q/60',
          title:'首饰'
        },
        {
          imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/011034601c43a3e2f76e048593acd7b8fa.jpg?imageView2/2/w/140/h/140/q/60',
          title:'袜子'
        },
      ],
      shop_list: {
        slidesPerView : 'auto',
        notNextTick: true,
        freeMode: true,
        on:{
           click:() => {
             let nowTlanslate;
            const swiper = this.$refs.navSwiper.swiper;
            const swiperWidth = swiper.$el[0].clientWidth;
            const width = swiperWidth / 2;
            const maxTranslate = swiper.maxTranslate();
            const maxWidth = -maxTranslate + width;
            const clickIndex = swiper.clickedIndex;
            const slide = swiper.slides[clickIndex];
            const slideLeft = slide.offsetLeft;
            const slideWidth = slide.clientWidth;
            const halfSlideWidth = slideWidth / 2;
            const slideCenter = slideLeft + halfSlideWidth;
            const offsetTop = swiper.$el[0].offsetTop;
            swiper.setTransition(500);
            if (slideCenter < swiperWidth / 2) {
             swiper.setTranslate(0);
            } else if (slideCenter > maxWidth) {
             swiper.setTranslate(maxTranslate);
            } else {
             nowTlanslate = slideCenter - width;
             swiper.setTranslate(-nowTlanslate);
            }
            this.nav_active = clickIndex;
            this.findCommodity({type: clickIndex}).then((res)=> {
              let shoplist = [];
              for(let i = 0; i < this.typeCommodity.data.length; i += 1) {
                shoplist.push(this.typeCommodity.data[i]);
                this.$set(this.allList, [clickIndex], shoplist);
              }
            });
            // document.documentElement.scrollTop = offsetTop - 50;
            // this.navSwiperFiexd = true;
           },
         },
      },
      shop_nav_list: [
        '综合',
        '女装',
        '家居家装',
        '数码家电',
        '母婴',
        '食品',
        '鞋包配饰',
        '美妆个护',
        '男装',
        '内衣',
        '运动户外',
        '天猫国际'
      ],
      indexBanner: {
        speed:300,
        autoplay : {
          delay:3000
        },
        pagination: {
          el: '.index-banner-pagination',
        }
      },
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
    this.addEvent('scroll', this.handleScroll);
    this.init.offsetTop = this.navSwiper.$el[0].offsetTop;
    if (this.allList[this.nav_active] == undefined) {
      this.findCommodity().then((res)=> {
        let shoplist = [];
        for(let i = 0; i < this.typeCommodity.data.length; i += 1) {
          shoplist.push(this.typeCommodity.data[i]);
          this.$set(this.allList, [this.nav_active], shoplist);
        }
      });
    }
  },
  methods: {
    ...mapActions([
      'findCommodity'
    ]),
    // 监听滚动
    addEvent(obj, callback) {
      window.addEventListener(obj, callback);
    },

    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.domeScrollTop = scrollTop;
      if (scrollTop > 10 && scrollTop < 60) {
        this.backActive = 'active';
      } else if (scrollTop >= 60) {
        this.backActive = 'active1';
      } else {
        this.backActive = '';
      }
      const offsetTop = this.init.offsetTop;
      if (scrollTop > offsetTop - 50) {
        this.navSwiperFiexd = true;
      }
      if (scrollTop < offsetTop) {
        this.navSwiperFiexd = false;
      }
    },
  },
  computed: {
    navSwiper() {
       return this.$refs.navSwiper.swiper
    },
    ...mapState([
      'typeCommodity',
    ]),
  },

}
</script>
