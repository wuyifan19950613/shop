<template>
  <div id="">
    <loading v-if="loading"></loading>
    <ul class="like-commdity" v-else>
        <li class="" v-for="(t, i) in vaguefind.data" :key="i">
          <router-link :to="{ path: '/commodity/details', query: { id: t._id}}">
            <div>
              <img :src="t.showPic[0]" alt="">
            </div>
            <div class="commdity-info">
              <h1 class="title">{{t.title}}</h1>
              <p class="mark"><span class="left">现价￥<b>{{t.PrePrice}}</b></span> <span>已售{{t.Sales}}件</span></p>
              <div class="coupon">
                <p class="w-jg"><b class="mx">劵后价</b><b class="money"><span class="w-fh">￥</span>{{t.voucher}}</b></p>
              </div>
            </div>
            <div class="coupon-info"><i class="coupon-icon"></i><span>{{t.couponMoney}}</span></div>
          </router-link>
        </li>
    </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "",
  data() {
    return{
      loading: true,
    }
  },
  mounted() {
    this.vaguefindCommodity({title: this.$route.query.name}).then(() => {
      this.loading = false;
    });
  },
  methods: {
    ...mapActions([
      'vaguefindCommodity',
    ])
  },
  computed: {
    ...mapState([
      'vaguefind'
    ])
  },
}
</script>
<style lang="scss" scoped>
</style>
