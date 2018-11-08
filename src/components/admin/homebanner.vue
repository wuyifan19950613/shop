<template>
  <div id="" class="homebanner">
    <div class="grab-box">
      <input class="input-base" type="text" v-model="grabUrl" placeholder="请输入想抓取的页面地址">
      <div class="grab-btn" @click="goGrab">抓取</div>
    </div>
    <textarea class="imgurl" v-model="bannerModel" placeholder="请输入图片链接，多张图片请用逗号隔开!"></textarea>
    <div class="show-pic">
      <div class="pic-box" v-show="picShow">
        <img :src="t" alt="" v-for="(t, i) in commInfo.showPic" :key="i">
      </div>
      <div class="up-pic" @click="picShow ? picShow = false : picShow = true">{{picShow ? '收起图片': '展开图片'}}</div>
    </div>
    <input class="input-base" v-model="commInfo.title" type="text" placeholder="请输入商品名称">
    <div class="price">
      <input class="input-base left" v-model="commInfo.PrePrice" type="number" placeholder="请输入现价">
      <input class="input-base right left" v-model="commInfo.voucher" type="number" placeholder="请输入劵后价">
      <input class="input-base right" type="number" v-model="commInfo.Sales" placeholder="请输入销量">
    </div>
    <div class="coupon">
      <input class="input-base left" type="number" v-model="commInfo.couponMoney" placeholder="请输入优惠卷面额">
      <input class="input-base right" type="number" v-model="commInfo.condition" placeholder="满好多使用">
    </div>
    <div class="coupon">
      <input class="input-base left" type="text" v-model="commInfo.singleLink" placeholder="请输入下单链接">
      <input class="input-base right" type="text" v-model="commInfo.token" placeholder="请输入淘口令">
    </div>
    <div class="coupon">
      <input class="input-base left" type="number" v-model="commInfo.type" placeholder="请输入商品类型">
    </div>
    <div class="shoptype">商品类型：0:综合,1:女装,2:家居家装,3:数码家电,4:母婴,5:食品,6:鞋包配饰,7:美妆个护,8:男装,9:内衣,10:运动户外,11:天猫国际,12:双11精选</div>
    <div class="add-btn" @click="addGoodsClick">添加</div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: "",
  data() {
    return{
      bannerModel: '',
      commInfo: {
        title: '',
        showPic: [],
        PrePrice: '',
        voucher: '',
        Sales: '',
        couponMoney: '',
        condition: '',
        singleLink: '',
        token: '',
        type: '',
      },
      grabUrl: '',
      picShow: false,
    }
  },
  mounted() {
    //do something after mounting vue instance
  },
  methods: {
    addGoodsClick() {
      this.bannerSplit();
      if (this.commInfo.title === '') {
        this.$toast({
          message: '商品名称必填',
          position: 'top',
          className: 'toast-success',
          duration: '2000',
        });
        return false;
      } else if (this.commInfo.type === '') {
        this.$toast({
          message: '商品类型必填',
          position: 'top',
          className: 'toast-success',
          duration: '2000',
        });
        return false;
      } else if (this.commInfo.token === '') {
        this.$toast({
          message: '淘口令必填',
          position: 'top',
          className: 'toast-success',
          duration: '2000',
        });
        return false;
      } else if (this.commInfo.singleLink === '') {
        this.$toast({
          message: '下单链接必填',
          position: 'top',
          className: 'toast-success',
          duration: '2000',
        });
        return false;
      } else if (this.commInfo.PrePrice === '') {
        this.$toast({
          message: '商品现价必填',
          position: 'top',
          className: 'toast-success',
          duration: '2000',
        });
        return false;
      } else if (this.commInfo.showPic.length <= 0) {
        this.$toast({
          message: '商品图片至少一张',
          position: 'top',
          className: 'toast-success',
          duration: '2000',
        });
        return false;
      }
      this.addGoods(this.commInfo).then((res) => {
        if(res.data.code === 200) {
          this.bannerModel = [];
          this.commInfo = {
            title: '',
            bannerModel: [],
            showPic: '',
            voucher: '',
            Sales: '',
            couponMoney: '',
            condition: '',
            singleLink: '',
            token: '',
            type: '',
          };
          this.$toast({
            message: res.data.message,
            position: 'top',
            className: 'toast-success',
            duration: '2000',
          });
        } else {
          this.$toast({
            message: res.data.message,
            position: 'top',
            className: 'toast-success',
            duration: '2000',
          });
        }
      })
    },
    bannerSplit() {
      const urls = this.bannerModel.split(",");
      for (let i = 0; i < urls.length; i += 1) {
        this.commInfo.showPic.push(urls[i]);
      }
    },
    goGrab() {
      if (this.grabUrl === '') {
        this.$toast({
          message: '请填写抓取地址',
          position: 'top',
          className: 'toast-success',
          duration: '2000',
        });
        return false;
      }
      this.GrabInfo({url: this.grabUrl});
    },
    ...mapActions('admin', [
      'GrabInfo',
      'addGoods',
    ])
  }

}
</script>
<style lang="scss" scoped>
</style>
