<template>
  <div id="">
    <div class="serch-box md10">
      <i class="serch-icon"></i>
      <input name="search" placeholder="Red Charcoal × Staple重磅来袭！" v-focus type="text" v-model="search_val">
      <div class="search-btn" @click="search_btn">查询</div>
    </div>
    <div class="hot-search md10">
      <div class="base-title">历史记录</div>
      <ul class="hot-list">
        <li>VANS</li>
        <li>converse</li>
        <li>卫衣</li>
        <li>工装裤</li>
        <li>PUMA</li>
        <li>中国李宁</li>
        <li>夹克</li>
        <li>袜子</li>
        <li>休闲裤</li>
      </ul>
    </div>
    <div class="hot-search md10">
      <div class="base-title">热搜</div>
      <ul class="hot-list">
        <li>VANS</li>
        <li>converse</li>
        <li>卫衣</li>
        <li>工装裤</li>
        <li>PUMA</li>
        <li>中国李宁</li>
        <li>夹克</li>
        <li>袜子</li>
        <li>休闲裤</li>
      </ul>
    </div>
    <!--  为你推荐start-->
    <div class="recommend md10">
      <div class="base-title">为你推荐</div>
      <ul class="recommend-list">
        <li>
          <div class="img-url">
            <img class="" src="http://img.alicdn.com/imgextra/i4/2578900982/TB2KhBtcOLaK1RjSZFxXXamPFXa_!!2578900982.jpg_200x200.jpg" alt="">
          </div>
          <div class="commodity">
            <h1 class="commodity-title">
              OralB/欧乐B电动牙刷D100米奇限量男女成人款软毛旋转声波小圆头
            </h1>
            <div class="price">
              <span class="sale-price">¥774.00</span>
              <span class="market-price">¥1290.00</span>
            </div>
            <div class="progress">
              <span class="count-coupon">剩余100000</span>
              <div class="used-coupon" style="width:50%;">
                <span class="j">劵</span>
                <span>35元</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="img-url">
            <img class="" src="http://img.alicdn.com/imgextra/i4/2578900982/TB2KhBtcOLaK1RjSZFxXXamPFXa_!!2578900982.jpg_200x200.jpg" alt="">
          </div>
          <div class="commodity">
            <h1 class="commodity-title">
              OralB/欧乐B电动牙刷D100米奇限量男女成人款软毛旋转声波小圆头
            </h1>
            <div class="price">
              <span class="sale-price">¥774.00</span>
              <span class="market-price">¥1290.00</span>
            </div>
            <div class="progress">
              <span class="count-coupon">剩余100000</span>
              <div class="used-coupon" style="width:50%;">
                <span class="j">劵</span>
                <span>35元</span>
              </div>
            </div>
          </div>
          <!-- <div class="receive">
            <span>立即领取</span>
          </div> -->
        </li>
      </ul>
    </div>
    <!--  为你推荐end-->
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return{
      search_val: '',
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    search_btn() {
      if (this.search_val === '') {
        this.$toast({
          message: '商品名字不能为空',
          position: 'top',
          className: 'toast-error',
          duration: '2000',
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
