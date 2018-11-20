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
import { keyWords } from '@/utils/keyWords';
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
    const queryName = this.$route.query.name;
    if (queryName == '卫衣') {
      this.meta = keyWords.weiyiMate.meta;
      this.pageTitle =  keyWords.weiyiMate.title;
    } else if (queryName == '夹克') {
      this.meta = keyWords.jiakeMate.meta;
      this.pageTitle =  keyWords.jiakeMate.title;
    } else if (queryName == '衬衫') {
      this.meta = keyWords.chenshanMate.meta;
      this.pageTitle =  keyWords.chenshanMate.title;
    } else if (queryName == '板鞋') {
      this.meta = keyWords.banxieMate.meta;
      this.pageTitle =  keyWords.banxieMate.title;
    } else if (queryName == '休闲/运动鞋') {
      this.meta = keyWords.xiuxianMate.meta;
      this.pageTitle =  keyWords.xiuxianMate.title;
    } else if (queryName == '靴子') {
      this.meta = keyWords.xueziMate.meta;
      this.pageTitle =  keyWords.xueziMate.title;
    } else if (queryName == '牛仔裤') {
      this.meta = keyWords.niuzaikuMate.meta;
      this.pageTitle =  keyWords.niuzaikuMate.title;
    } else if (queryName == '休闲裤') {
      this.meta = keyWords.xiuxiankuMate.meta;
      this.pageTitle =  keyWords.xiuxiankuMate.title;
    } else if (queryName == '双肩包') {
      this.meta = keyWords.shuangjianbaoMate.meta;
      this.pageTitle =  keyWords.shuangjianbaoMate.title;
    } else if (queryName == '帽子') {
      this.meta = keyWords.maoziMate.meta;
      this.pageTitle =  keyWords.maoziMate.title;
    } else if (queryName == '首饰') {
      this.meta = keyWords.shoushiMate.meta;
      this.pageTitle =  keyWords.shoushiMate.title;
    } else if (queryName == '袜子') {
      this.meta = keyWords.waziMate.meta;
      this.pageTitle =  keyWords.waziMate.title;
    }
    const data = {
      commodityName: queryName,
      pageNum: this.pageNum,
      pageSize: this.pageSize,
    }
    this.GetTaobaoMaterialOptional({
      searchName: queryName,
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
