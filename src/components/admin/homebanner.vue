<template>
  <div id="" class="homebanner">
    <div class="grab-box">
      <input class="input-base" type="text" v-model="grabUrl" placeholder="请输入想抓取的页面地址">
      <div class="grab-btn" @click="goGrab">抓取</div>
    </div>
    <textarea class="imgurl" v-model="bannerModel" placeholder="请输入图片链接，多张图片请用逗号隔开!"></textarea>
    <div class="show-pic">
      <div class="pic-box" v-show="picShow">
        <img :src="t" alt="" v-for="(t, i) in showPic" :key="i">
      </div>
      <div class="up-pic" @click="picShow ? picShow = false : picShow = true">{{picShow ? '收起图片': '展开图片'}}</div>
    </div>
    <input class="input-base" type="text" placeholder="请输入商品名称">
    <div class="price">
      <input class="input-base left" type="number" placeholder="请输入现价">
      <input class="input-base right left" type="number" placeholder="请输入劵后价">
      <input class="input-base right" type="number" placeholder="请输入销量">
    </div>
    <div class="coupon">
      <input class="input-base left" type="number" placeholder="请输入优惠卷面额">
      <input class="input-base right" type="number" placeholder="满好多使用">
    </div>
    <div class="add-btn">添加</div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: "",
  data() {
    return{
      grabUrl: '',
      bannerModel:'',
      showPic: [],
      picShow: false,
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.bannerSplit();
  },
  methods: {
    bannerSplit() {
      const urls = this.bannerModel.split(",");
      for (let i = 0; i < urls.length; i += 1) {
        this.showPic.push(urls[i]);
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
      this.GrabInfo({url: this.grabUrl}).then((res) => {
        console.log(res);
      });
    },
    ...mapActions('admin', [
      'GrabInfo',
    ])
  }

}
</script>
<style lang="scss" scoped>
</style>
