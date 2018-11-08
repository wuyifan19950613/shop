<template>
  <div id="">
    <div class="admin">
      <h1 class="title">小欢有劵 · 后台登录</h1>
      <div class="admin-input-box">
        <input type="text" name="username" value="" v-model="userName" placeholder="请输入账号">
        <input type="password" name="password" value="" v-model="password" placeholder="请输入密码">
      </div>
      <div class="admin-login basebtn" @click="login">登录</div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: "",
  data(){
    return{
      userName: '502397665@qq.com',
      password: 'wuyifan1995',
    }
  },
  methods: {
    ...mapActions('login', [
      'userLogin',
    ]),
    login() {
      this.userLogin({
        userName: this.userName,
        password: this.password,
      }).then((res)=> {
        if (res.data.code === 200) {
          this.$toast({
            message: res.data.message,
            position: 'top',
            className: 'toast-success',
            duration: '2000',
          });
          this.$setLS({
            user: res.data.userInfo,
          });
          setTimeout(() => {
            this.$router.push('/admin/index');
          },2000)
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
  },
}
</script>
<style lang="scss" scoped>
</style>
