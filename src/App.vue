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
    const vds = document.createElement('script')
    vds.type = 'text/javascript'
    vds.async = true;
    vds.src = (document.location.protocol === 'https:' ? 'https://' : 'http://') +
      's5.cnzz.com/z_stat.php?id=1275250107&web_id=1275250107'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(vds, s)
  },
  watch: {
    '$route' () {
      if (window._czc) {
        let location = window.location
        let contentUrl = location.pathname + location.hash
        let refererUrl = '/'
        window._czc.push(['_trackPageview', contentUrl, refererUrl])
      }
    }
  },
  methods: {

  },
}
</script>

<style lang="scss">
  @import "./scss/base";
  @import "./scss/index";
  @import "./scss/common";
  @import "./scss/animation";
</style>
