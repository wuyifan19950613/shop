<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import {myfun} from '../test/js/Wuyifan-font.js' //注意路径
export default {
  name: 'App',
  mounted() {
  },
  methods: {
    methodName() {

    }
  },
}
</script>

<style lang="scss">
  @import "./scss/base";
  @import "./scss/index";
  @import "./scss/common"
</style>
