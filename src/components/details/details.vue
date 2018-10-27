<template>
  <div class="details">
    <!--  商品主页banner start-->
    <div class="details-banner">
      <swiper :options="detailsSwiper" class="details-banner">
        <swiper-slide v-for="(item, index) in imgUrl" :key="index">
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
        <span class="title">儿童保温杯 带吸管316防摔水杯两用宝宝男女小学生便携不锈钢水壶</span>
      </h1>
      <div class="sale-price">
        <div class="ib">
          <span class="icon-fu">￥</span>
          <span class="money">39.90</span>
        </div>
        <span class="title">劵后价</span>
      </div>
      <div class="present-price flex">
        <div class="fe">
          <span class="title">现价 :</span>
          <div class="ib">
            <span class="icon-fu">￥</span>
            <span class="money">39.90</span>
          </div>
        </div>
        <div class="sold">已售8.10万件</div>
      </div>
    </div>
    <!--  商品描述/价格 end-->
    <!--  一键复制口令 start-->
    <div class="copy-password md10">
      <div class="">
        <div class="title" v-clipboard:copy="couponData.code" v-clipboard:success="onCopy" v-clipboard:error="onError"><i class="copy-icon"></i><span>一键点击复制淘口令</span></div>
        <div class="password">
          <p class="password-text">
            ￥AbMwbSrYEgQ￥
          </p>
          <p class="password-reamrk">复制这条信息，打开【手机淘宝】即可领劵购买</p>
        </div>
      </div>
    </div>
    <!--  一键复制口令 end-->

    <!--  底部浮窗 start-->
    <div class="fixed-bottom flex fe-center">
      <div class="fe"></div>
      <div class="password flex fe-center"  v-clipboard:copy="couponData.code" v-clipboard:success="onCopy" v-clipboard:error="onError">复制口令</div>
    </div>
    <!--  底部浮窗 end-->
  </div>
</template>
<script>
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
      imgUrl: [
        'https://img.alicdn.com/imgextra/i3/3042933729/TB25uPYdhnaK1RjSZFtXXbC2VXa_!!3042933729.jpg_1152x1920Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/3042933729/O1CN011dPvOdBuX5YM0ed_!!3042933729.jpg_1152x1920Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i3/3042933729/O1CN011dPvOdCXbAtr4AO_!!3042933729.jpg_1152x1920Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i2/3042933729/TB2F86auLImBKNjSZFlXXc43FXa_!!3042933729.jpg_1152x1920Q50s50.jpg_.webp',
        'https://img.alicdn.com/imgextra/i4/3042933729/O1CN011dPvOVK9R6oV4YB_!!3042933729.jpg_1152x1920Q50s50.jpg_.webp',
      ],
    }
  },
  methods: {
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
  }
}
</script>
