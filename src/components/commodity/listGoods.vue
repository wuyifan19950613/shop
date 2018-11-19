<template>
  <div id="fatherbox">
    <loading v-if="loading"></loading>
    <ul class="like-commdity" v-else   v-infinite-scroll="loadMore" infinite-scroll-disabled="loadingScroll" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
        <li class="" v-for="(t, i) in commodityList" :key="i">
          <router-link :to="{ path: '/commodity/details', query: { num_iid: t.num_iid, couponInfo: CouponNum(t.coupon_info), url:`https:${t.coupon_share_url}`}}">
            <div>
              <img v-lazy="t.pict_url" alt="">
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
  metaInfo () {
    return {
      title: this.pageTitle,
      meta: this.meta,
    }
  },
  data() {
    this.CouponNum = v => CouponNum(v);
    return{
      loading: true,
      loadingScroll: false,
      commodityList: [],
      pageNum: 1,
      pageTitle: '精选淘宝天猫优惠卷-小欢有劵',
      meta: [],
      pageSize: 30,
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
    this.GetTaobaoMaterialOptional({
      searchName: this.$route.query.name,
      pageNum: this.pageNum,
      pageSize: this.pageSize,
    }).then(() => {
      this.loading = false;
      this.total_results = this.MaterialOptional.msg.total_results;
      this.commodityList = this.MaterialOptional.msg.result_list.map_data;
    })
  },
  methods: {
    ...mapActions([
      'vaguefindCommodity',
      'GetTaobaoCommodityFind',
      'GetTaobaoMaterialOptional',
    ]),
    loadMore(){
      this.loading = false;
      this.loadingScroll = true;
      if (this.commodityList.length >= this.total_results) {
        this.toEnd = true;
        return false;
      }
      this.pageNum = this.pageNum + 1;
      const data = {
        searchName: this.$route.query.name,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      }
      this.GetTaobaoMaterialOptional(data).then(() => {
        const listArray = this.MaterialOptional.msg.result_list.map_data;
        for (let t in listArray) {
          this.commodityList.push(listArray[t]);
        }
        this.loadingScroll = false;
      })
    }
  },
  computed: {
    ...mapState([
      'vaguefind',
      'taobaoCommodityList',
      'MaterialOptional',
    ])
  },
}
</script>
<style lang="scss" scoped>
</style>
