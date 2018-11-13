<template>
  <div id="fatherbox">
    <loading v-if="loading"></loading>
    <ul class="like-commdity" v-else   v-infinite-scroll="loadMore" infinite-scroll-disabled="loadingScroll" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
        <li class="" v-for="(t, i) in commodityList" :key="i">
          <router-link :to="{ path: '/commodity/details', query: { num_iid: t.num_iid, couponInfo: CouponNum(t.coupon_info), url: t.coupon_click_url}}">
            <div>
              <img :src="t.pict_url" alt="">
            </div>
            <div class="commdity-info">
              <h1 class="title">{{t.title}}</h1>
              <p class="mark"><span class="left">现价￥<b>{{t.zk_final_price}}</b></span> <span>已售{{t.volume}}件</span></p>
              <div class="coupon">
                <p class="w-jg"><b class="mx">劵后价</b><b class="money"><span class="w-fh">￥</span>{{(t.zk_final_price - CouponNum(t.coupon_info)).toFixed(2)}}</b></p>
              </div>
            </div>
            <div class="coupon-info"><i class="coupon-icon"></i><span>{{CouponNum(t.coupon_info)}}</span></div>
          </router-link>
        </li>
    </ul>
    <toEnd v-if="toEnd"></toEnd>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { CouponNum } from '@/utils';

export default {
  name: "",
  data() {
    this.CouponNum = v => CouponNum(v);
    return{
      loading: true,
      loadingScroll: false,
      commodityList: [],
      pageNum: 1,
      pageSize: 100,
      total_results: 0,
      toEnd: false,

    }
  },
  mounted() {
    const data = {
      commodityName: this.$route.query.name,
      pageNum: this.pageNum,
      pageSize: this.pageSize,
    }
    this.GetTaobaoCommodityFind(data).then(()=> {
      this.loading = false;
      this.commodityList = this.taobaoCommodityList.msg.results.tbk_coupon;
      this.total_results = this.taobaoCommodityList.msg.total_results;
    });
  },
  methods: {
    ...mapActions([
      'vaguefindCommodity',
      'GetTaobaoCommodityFind',
    ]),
    loadMore(){
      this.loading = false;
      setTimeout(() => {
        if (this.commodityList.length >= this.total_results) {
          this.toEnd = true;
          return false;
        }
        this.pageNum = this.pageNum + 1;
        const data = {
          commodityName: this.$route.query.name,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        }
        this.GetTaobaoCommodityFind(data).then(()=> {
          this.$Indicator.open('加载中...');
          this.loading = false;
          var comArray =  this.taobaoCommodityList.msg.results.tbk_coupon;
          for (let i = 0; i < comArray.length; i += 1) {
            this.commodityList.push(comArray[i]);
          }
          this.loadingScroll = false;
          this.$Indicator.close();
        });
      }, 500);
    }
  },
  computed: {
    ...mapState([
      'vaguefind',
      'taobaoCommodityList',
    ])
  },
}
</script>
<style lang="scss" scoped>
</style>
