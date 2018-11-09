<template>
  <div id="">
    <div class="admin register">
      <h1 class="title">小欢有劵 · 后台注册</h1>
      <div class="admin-input-box">
        <input type="text" name="username" value="" v-model="userName" placeholder="请输入账号">
        <input type="password" name="password" value="" v-model="password" placeholder="请输入密码">
      </div>
      <div class="admin-login basebtn" @click="login">注册</div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: "",
  data(){
    return{
      userName: '',
      password: '',
    }
  },
  methods: {
    ...mapActions('login', [
      'userRegister',
    ]),
    login() {
      this.userRegister({
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
          setTimeout(() => {
            this.$router.push('/admin/login');
          },2000);
        } else {
          this.$toast({
            message: res.data.message,
            position: 'top',
            className: 'toast-error',
            duration: '2000',
          })
        }
      })
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
