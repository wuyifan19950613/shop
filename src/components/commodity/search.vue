<template>
  <div id="fatherbox">
    <div class="serch-box md10">
      <i class="serch-icon"></i>
      <input name="search" placeholder="Red Charcoal × Staple重磅来袭！" v-focus type="text" v-model="search_val">
      <div class="search-btn" @click="search_btn">查询</div>
    </div>
    <div class="hot-search md10" v-if="history != ''">
      <div class="base-title">
        历史记录
        <div class="clear-hist" @click="clearHisty">清除历史记录</div>
      </div>
      <ul class="hot-list">
        <li v-for="(t, i ) in history" :key="i" @click="searchCommd(t)">{{t}}</li>
      </ul>
    </div>
    <!-- <div class="hot-search md10">
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
    </div> -->
    <!--  为你推荐start-->
    <div class="recommend md10">
      <div class="base-title">为你推荐</div>
      <ul class="recommend-list">
        <li v-for="(t, i) in typeCommodity.data" :key="i">
          <router-link :to="{ path: '/commodity/details', query: { id: t._id, Label: t.Label}}">
            <div class="img-url">
              <img class="" :src="t.showPic[0]" alt="">
            </div>
            <div class="commodity">
              <h1 class="commodity-title">
                {{t.title}}
              </h1>
              <div class="price">
                <span class="sale-price">¥{{t.voucher}}</span>
                <span class="market-price">¥{{t.PrePrice}}</span>
              </div>
              <div class="progress">
                <!-- <span class="count-coupon">剩余100000</span> -->
                <div class="used-coupon" style="width:100%;">
                  <span class="j">劵</span>
                  <span>{{t.couponMoney}}元</span>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!--  为你推荐end-->
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "",
  data() {
    return{
      search_val: '',
      history: '',
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  mounted() {
    //do something after mounting vue instance
    const history = this.$getLS('HistoricalRecords').split('|');
    this.history = history;
    this.findCommodity().then((res)=> {
      console.log(this.typeCommodity);
    });
  },
  methods: {
    ...mapActions([
      'findCommodity',
    ]),
    search_btn() {
      if (this.search_val === '') {
        this.$toast({
          message: '商品名字不能为空',
          position: 'top',
          className: 'toast-error',
          duration: '2000',
        })
        return false;
      }
      this.setHistoryItems(this.search_val);
      this.$router.push(`/commodity/listGoods?name=${this.search_val}`)
    },
    clearHisty() {
      this.$setLS({
        HistoricalRecords: ''
      });
      this.history = '';
    },
    searchCommd(name){
      this.$router.push(`/commodity/listGoods?name=${name}`)
    },
    setHistoryItems(keyword){
      keyword = keyword.trim();
      let historyItems = this.$getLS('HistoricalRecords');
      if (historyItems === undefined || historyItems == ''){
        this.$setLS({
          HistoricalRecords: keyword
        })
      } else {
        const maxNum = 5;
        let onlyItem = historyItems.split('|').filter(e => e != keyword);
        if (onlyItem.length >= 5){
          onlyItem = onlyItem.splice(0, maxNum - 1);
        }
        if (onlyItem.length > 0) historyItems = keyword + '|' + onlyItem.join('|');
        this.$setLS({
          HistoricalRecords: historyItems
        });
      }
    },
  },
  computed: {
    ...mapState([
      'typeCommodity',
    ]),
  },
}
</script>
<style lang="scss" scoped>
</style>
