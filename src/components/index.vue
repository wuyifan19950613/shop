<template>
  <div id="" class="max-width">
    <!--  查询商品input start-->
    <div class="serch-commodity">
      <div>
        <input name="search" type="text" placeholder="请输入搜索文字">
      </div>
    </div>
    <!--  查询商品input end-->

    <!--  首页banner图start-->
    <swiper :options="indexBanner" class="index-banner">
      <swiper-slide v-for="(item, index) in imgUrl" :key="index">
        <img v-lazy="item" alt="">
      </swiper-slide>
      <div class="swiper-pagination index-banner-pagination" slot="pagination"></div>
    </swiper>
    <!--  首页banner图end-->

    <!--  首页广告位start-->
    <div class="advertisement md10">
      <img src="../assets/img/icon/ggw01.png" alt="">
    </div>
    <!--  首页广告位end-->

    <!--  热门商品start-->
    <div class="hot-commodity md10">
      <div class="base-title">热门品类</div>
      <ul class="commodity-list">
        <li class="" v-for="(item, index) in commodityUrl" :key="index">
          <a href="">
            <img v-lazy="item.imgUrl" :alt="item.title">
          </a>
        </li>
      </ul>
    </div>
    <!--  热门商品end-->
  </div>
</template>
<script>
export default {
  name: "index",
  data: () => ({
    imgUrl: [
      'https://img11.static.yhbimg.com/yhb-img01/2018/10/22/08/0174e468be6786ad4367c0b4a5f30c15f5.jpg?imageView2/2/w/640/h/240/q/60',
      'https://img10.static.yhbimg.com/yhb-img01/2018/10/22/08/0130dca2a5117f52a251779ce187e18cd1.jpg?imageView2/2/w/640/h/240/q/60',
      'https://img11.static.yhbimg.com/yhb-img01/2018/10/22/08/01917963f65a3d10854d0e989da9c4683b.jpg?imageView2/2/w/640/h/240/q/60',
      'https://img10.static.yhbimg.com/yhb-img01/2018/10/22/08/01cd93e72039c5f116fb28014e134200c9.jpg?imageView2/2/w/640/h/240/q/60',
      'https://img11.static.yhbimg.com/yhb-img01/2018/10/22/08/01f2018911d102f9eea279b0cb7baaf833.jpg?imageView2/2/w/640/h/240/q/60',
    ],
    commodityUrl:[
      {
        imgUrl:'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/015308423c5451e181df04930885a1251d.jpg?imageView2/2/w/140/h/140/q/60',
        title:'卫衣',
      },
      {
        imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/0174f7ad0997cff09a22a8abe4e8391bdf.jpg?imageView2/2/w/140/h/140/q/60',
        title:'夹克'
      },
      {
        imgUrl: 'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/0118ae85238b51dbe7971324f16f4808fc.jpg?imageView2/2/w/140/h/140/q/60',
        title:'衬衫'
      },
      {
        imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/01f4f98b41a56ad6b3d8b034f766529d7e.jpg?imageView2/2/w/140/h/140/q/60',
        title:'板鞋/滑板鞋'
      },
      {
        imgUrl: 'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/010d6434adb54ea77dfa3f042b1c56ef6a.jpg?imageView2/2/w/140/h/140/q/60',
        title:'休闲/运动鞋'
      },
      {
        imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/011165f18889a8c7df0760fdcdf0e4d7b0.jpg?imageView2/2/w/140/h/140/q/60',
        title:'靴子'
      },
      {
        imgUrl: 'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/01e465bc9d68949381a3b66ce54e1a64b5.jpg?imageView2/2/w/140/h/140/q/60',
        title:'牛仔裤'
      },
      {
        imgUrl: 'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/018e917b5ad8a68145637aa0b6c7688572.jpg?imageView2/2/w/140/h/140/q/60',
        title:'休闲裤'
      },
      {
        imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/019e96f189c46eb91e7733eeac39611e9e.jpg?imageView2/2/w/140/h/140/q/60',
        title:'双肩包'
      },
      {
        imgUrl: 'https://img11.static.yhbimg.com/yhb-img01/2018/10/25/09/010dcd51ee144c6b754301b3f74a1b9555.jpg?imageView2/2/w/140/h/140/q/60',
        title:'帽子'
      },
      {
        imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/01790f94446386a44c2b3d980e8783d03e.jpg?imageView2/2/w/140/h/140/q/60',
        title:'首饰'
      },
      {
        imgUrl: 'https://img10.static.yhbimg.com/yhb-img01/2018/10/25/09/011034601c43a3e2f76e048593acd7b8fa.jpg?imageView2/2/w/140/h/140/q/60',
        title:'袜子'
      },
    ],
    indexBanner: {
      speed:300,
      autoplay : {
        delay:3000
      },
      loop : true,
      pagination: {
        el: '.index-banner-pagination',
      }
    },
  }),
  mounted() {

  },

}
</script>
