<template>
  <div id="">
    <div class="admin-nav" @click="navShow ?  navShow = false : navShow = true"></div>
    <ul :class="`menu-list  ${navShow ? 'active': ''}`">
      <li class="">
        <router-link :to="{ path: '/admin/homebanner'}">首页banner</router-link>
      </li>
      <li class="">
        <router-link :to="{ path: '/admin/hotshop'}">
          首页热门商品
        </router-link>
      </li>
      <li class="">
        <router-link :to="{ path: '/admin/nicewhere'}">
          好的都在这里
        </router-link>
      </li>
    </ul>

    <div class="add-btn" @click="outLogin">退出登录</div>
  </div>
</template>
<script>
export default {
  name: "",
  data(){
    return{
      navShow: false,
    }
  },
  methods: {
    outLogin() {
      this.$setLS({
        user: '',
      });
      this.$router.push({
        path: '/admin/login',
      });
    },
  }
}
</script>
<style lang="scss" scoped>
</style>
