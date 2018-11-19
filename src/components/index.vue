<template>
  <div id="" class="max-width">
    <div>
      <!--  查询商品input start-->
      <div class="serch-commodity">
        <div :class="`serch-content ${backActive}`" :style="`background:rgba(0,0,0,${headerOpicty})`">
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
        <a href="https://mo.m.taobao.com/optimus/jhspt2c?pid=mm_122552127_208550462_57801250099">
          <img src="../assets/img/pintuan.png" alt="">
        </a>
      </div>
      <!--  首页广告位end-->

      <!--  热门商品start-->
      <div class="hot-commodity md10">
        <div class="base-title">热门品类</div>
        <ul class="commodity-list">
          <li class="" v-for="(item, index) in commodityUrl" :key="index">
            <router-link :to="{ path: `/commodity/listGoods?name=${item.title}`}">
              <img v-lazy="item.imgUrl" :alt="item.title">
            </router-link>
          </li>
        </ul>
      </div>
      <!--  热门商品end-->

      <!--  商品列表start-->
      <div class="recommend md10">
        <div class="base-title">好劵直播实时更新</div>
        <div class="default-height" v-if="navSwiperFiexd"></div>
        <swiper :options="shop_list" :class="`nav-swiper ${navSwiperFiexd ? 'active' : ''}`" ref="navSwiper">
          <swiper-slide class="nav-slide" v-for="(item, index) in shop_nav_list" :key="index">
            <div class="nav-title" :class="{active:index === nav_active}">{{item.title}}</div>
          </swiper-slide>
        </swiper>
        <swiper :options="commoditySwiper" ref="commoditySwiper">
          <swiper-slide  v-if="typeCommodity" v-for="(time, index) in shop_nav_list" :key="index" class="commoditySwiper-slide">
            <ul class="recommend-list">
              <li v-for="(t, i ) in allList[index]" :key="i">
                <router-link :to="{ path: '/commodity/details', query:{num_iid: t.item_id, couponInfo: t.coupon_amount, url: `https:${t.coupon_click_url}`}}">
                  <div class="img-url">
                      <img class="" :src="t.pict_url" alt="">
                  </div>
                  <div class="commodity">
                    <h1 class="commodity-title">
                      {{t.title}}
                    </h1>
                    <div class="price">
                      <span class="sale-price">¥{{(t.zk_final_price - t.coupon_amount).toFixed(2)}}</span>
                      <span class="market-price">¥{{t.zk_final_price}}</span>
                    </div>
                    <div class="progress">
                      <span class="count-coupon">剩余{{t.coupon_total_count}}</span>
                      <div class="used-coupon" style="width:22%;">
                        <span class="j">劵</span>
                        <span>{{t.coupon_amount}}元</span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
              <div v-if="!allList[index]" style="height:517px;display:flex;justify-content: center;align-items: center;">
                <img src="@/assets/img/icon/loading.gif" alt="">
              </div>
            </ul>
          </swiper-slide>
        </swiper>
      </div>
      <!--  商品列表end-->
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import $ from 'jquery';
export default {
  name: "index",
  metaInfo: {
    title: '精选淘宝天猫优惠卷-小欢有劵', // set a title
    meta: [{                 // set meta
      name: 'keyWords',
      content: '小欢有劵,优惠,优惠券,淘宝内部优惠券,淘宝优惠,天猫内部优惠券,天猫优惠,小欢优惠,内部优惠,天猫超市优惠券,购物,网购,优惠直播,9.9元包邮,10元包邮,20元封顶,网购优惠',
    },{
      name: 'description',
      content: '小欢有劵-是淘宝(天猫)内部优惠券领取网站,独家优惠券直接领取,领取后可直接下单抵扣,价格超实惠。千万淘宝优惠券每天更新,上淘宝(天猫)购物先上小宝优惠,比双11更低!'
    }],
  },
  data() {
    return{
      loading: true,
      loadingScroll: false,
      notScroll: false,
      backActive: '',
      nav_active: 0,
      domeScrollTop: 0,
      navSwiperFiexd: false,
      allList: [],
      headerOpicty: '',
      listLoading: false,
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
      commoditySwiper: {
        notNextTick: true,
        loop: false,
        on: {
          slideChangeTransitionStart: ()=> {
            this.loadingScroll = false;
            const commoditySwiper = this.$refs.commoditySwiper.swiper;
            const index = commoditySwiper.activeIndex;
            this.nav_active = index;
            this.notScroll = false;
            let nowTlanslate;
           const swiper = this.$refs.navSwiper.swiper;
           const swiperWidth = swiper.$el[0].clientWidth;
           const width = swiperWidth / 2;
           const maxTranslate = swiper.maxTranslate();
           const maxWidth = -maxTranslate + width;
           const slide = swiper.slides[index];
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
           commoditySwiper.slideTo(this.nav_active, 0, false);
           this.GetOptimusMaterial({
             pageNum: this.shop_nav_list[this.nav_active].pageNum,
             pageSize: this.pageSize,
             material_id: this.shop_nav_list[this.nav_active].material_id,
           }).then(()=> {
             $('html, body').animate({scrollTop: (this.init.offsetTop + 60)});
             this.$set(this.allList, [this.nav_active], this.OptimusMaterial.msg.result_list.map_data);
             this.loadingScroll = true;
           });
          }
        },
      },
      shop_list: {
        slidesPerView : 'auto',
        notNextTick: true,
        freeMode: true,
        on:{
           tap:() => {
            this.notScroll = false;
            this.loadingScroll = false;
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
            const commoditySwiper = this.$refs.commoditySwiper.swiper;
            commoditySwiper.slideTo(this.nav_active, 20, false);
            this.GetOptimusMaterial({
              pageNum: this.shop_nav_list[this.nav_active].pageNum,
              pageSize: this.pageSize,
              material_id: this.shop_nav_list[this.nav_active].material_id,
            }).then(()=> {
              $('html, body').animate({scrollTop: (this.init.offsetTop + 60)});
              this.$set(this.allList, [this.nav_active], this.OptimusMaterial.msg.result_list.map_data);
              this.loadingScroll = true;
            });
           },
         },
      },
      shop_nav_list: [
        {
          title: '综合',
          material_id: '3786',
          pageNum: 1,
        },
        {
          title:'有好货',
          material_id: '4092',
          pageNum: 1,
        },
        {
          title:'潮流范',
          material_id: '4093',
          pageNum: 1,
        },
        {
          title:'特惠',
          material_id: '4094',
          pageNum: 1,
        },
        {
          title: '女装',
          material_id: '3788',
          pageNum: 1,
        },
        {
          title: '家居家装',
          material_id: '3792',
          pageNum: 1,
        },
        {
          title: '数码家电',
          material_id: '3793',
          pageNum: 1,
        },
        {
          title: '母婴',
          material_id: '3789',
          pageNum: 1,
        },
        {
          title: '食品',
          material_id: '3791',
          pageNum: 1,
        },
        {
          title: '鞋包配饰',
          material_id: '3796',
          pageNum: 1,
        },
        {
          title: '美妆个护',
          material_id: '3794',
          pageNum: 1,
        },
        {
          title: '男装',
          material_id: '3790',
          pageNum: 1,
        },
        {
          title: '内衣',
          material_id: '3787',
          pageNum: 1,
        },
        {
          title: '运动户外',
          material_id: '3795',
          pageNum: 1,
        },
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

      pageSize: 20,
    }
  },
  mounted() {
    this.addEvent('scroll', this.handleScroll);
    this.init.offsetTop = this.navSwiper.$el[0].offsetTop;
    this.GetOptimusMaterial({
      pageNum: this.shop_nav_list[0].pageNum,
      pageSize: this.pageSize,
      material_id: this.shop_nav_list[0].material_id,
    }).then(()=> {
      this.notScroll = true;
      this.$set(this.allList, [this.nav_active], this.OptimusMaterial.msg.result_list.map_data);
      this.loadingScroll = true;
    })
  },
  methods: {
    ...mapActions([
      'GetOptimusMaterial',
    ]),
    loadMoreCommod() {

    },
    // 监听滚动
    addEvent(obj, callback) {
      window.addEventListener(obj, callback);
    },
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.domeScrollTop = scrollTop;
       if($(document).scrollTop() + 50 >=$(document).height()-$(window).height() && this.loadingScroll){
         this.loadingScroll = false;
         let oldPageNum =  this.shop_nav_list[this.nav_active].pageNum;
         oldPageNum = oldPageNum + 1;
         this.shop_nav_list[this.nav_active].pageNum = oldPageNum;
         this.GetOptimusMaterial({
           pageNum: this.shop_nav_list[this.nav_active].pageNum,
           pageSize: this.pageSize,
           material_id: this.shop_nav_list[this.nav_active].material_id,
         }).then(()=> {
           const map_data = this.OptimusMaterial.msg.result_list.map_data;
           if (map_data) {
             for (let i = 0; i< map_data.length; i += 1) {
               this.allList[this.nav_active].push(map_data[i]);
             }
           }
           this.loadingScroll = true;
         })
       }
      const opacity = scrollTop/150;
      if(opacity<=1){
        this.headerOpicty = opacity;
      } else {
        this.headerOpicty = 1;
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
      'OptimusMaterial',
    ]),
  },
  destroyed(){
      window.removeEventListener('scroll', this.handleScroll);//监听页面滚动事件
  },

}
</script>
