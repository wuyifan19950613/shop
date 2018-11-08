<template>
  <div class="details">
    <loading v-if="!SingleCommodity.data"></loading>
    <div class="main-content" v-else>
      <!--  商品主页banner start-->
      <div class="details-banner">
        <swiper :options="detailsSwiper" class="details-banner">
          <swiper-slide v-for="(item, index) in SingleCommodity.data.showPic" :key="index">
            <img v-lazy="item" alt="" class="">
          </swiper-slide>
          <div class="swiper-pagination details-banner-pagination" slot="pagination"></div>
        </swiper>
        <div class="return-page" @click="handleClose"></div>
      </div>
      <!--  商品主页banner end-->

      <!--  商品描述/价格 start-->
      <div class="commodity-content">
        <h1>
          <i class="source-icon"></i>
          <span class="title">{{SingleCommodity.data.title}}</span>
        </h1>
        <div class="sale-price">
          <div class="ib">
            <span class="icon-fu">￥</span>
            <span class="money">{{SingleCommodity.data.voucher}}</span>
          </div>
          <span class="title">劵后价</span>
        </div>
        <div class="present-price flex">
          <div class="fe">
            <span class="title">现价 :</span>
            <div class="ib">
              <span class="icon-fu">￥</span>
              <span class="money">{{SingleCommodity.data.PrePrice}}</span>
            </div>
          </div>
          <div class="sold">已售{{SingleCommodity.data.Sales}}件</div>
        </div>
      </div>
      <!--  商品描述/价格 end-->
      <!--  一键复制口令 start-->
      <div class="copy-password md10">
        <div class="">
          <div class="title" v-clipboard:copy="SingleCommodity.data.token" v-clipboard:success="onCopy" v-clipboard:error="onError"><i class="copy-icon"></i><span>一键点击复制淘口令</span></div>
          <div class="password">
            <p class="password-text">
              {{SingleCommodity.data.token}}
            </p>
            <p class="password-reamrk">复制这条信息，打开【手机淘宝】即可领劵购买</p>
          </div>
        </div>
      </div>
      <!--  一键复制口令 end-->
      <!--  猜你喜欢start-->
      <div class="guess-lick">
        <div class="base-title">猜你喜欢</div>
        <ul class="like-commdity">
          <li class="">
            <div>
              <img src="https://img.alicdn.com/bao/uploaded/i3/3461415546/O1CN011qq72oXMjD8K6MU_!!0-item_pic.jpg_300x300q90.jpg_.webp" alt="">
            </div>
            <div class="commdity-info">
              <h1 class="title">2018冬季新加绒加厚保暖高腰牛仔裤女韩版大码显瘦百搭小脚长裤子</h1>
              <p class="mark"><span class="left">现价￥<b>59.9</b></span> <span>已售10086件</span></p>
              <div class="coupon">
                <span><b class="mx">劵后价</b><b class="money">￥10.10</b></span>
              </div>
            </div>
          </li>
          <li class=""></li>
        </ul>
      </div>
      <!--  猜你喜欢end-->
      <!--  底部浮窗 start-->
      <div class="fixed-bottom flex fe-center">
        <div class="fe"></div>
        <div class="password flex fe-center"  v-clipboard:copy="SingleCommodity.data.token" v-clipboard:success="onCopy" v-clipboard:error="onError">复制口令</div>
      </div>
      <!--  底部浮窗 end-->
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "",
  data() {
    return{
      couponData: {
        code: '1231231231231'
      },
      detailsSwiper: {
        pagination: {
          el: '.details-banner-pagination',
        },
      },
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.findCommodityId({id: this.$route.query.id}).then(()=> {

    })
  },
  methods: {
    ...mapActions([
      'findCommodityId'
    ]),
    onCopy() {
      this.$toast({
        message: '复制成功',
        position: 'top',
        className: 'toast-success',
        duration: '2000',
      })
    },
    onError() {
      this.$toast({
        message: '复制失败，请重新复制或长按',
        position: 'top',
        className: 'toast-error',
        duration: '2000',
      })
    },
    handleClose() {
      this.$router.back(-1);
    },
  },
  computed: {
    ...mapState([
      'SingleCommodity'
    ])
  },
}
</script>
