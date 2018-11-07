<template>
  <div class="main-header">
    <mt-header :title="$route.meta.title">
      <mt-button icon="back" @click="handleClose" slot="left"></mt-button>
      <mt-button slot="right"><slot></slot></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: "commonHeader",
  data() {
    return {
    };
  },
  computed: {},
  components: {},
  mounted() {},
  methods: {
    handleClose() {
      this.$router.back(-1);
    },
  }
};
</script>
