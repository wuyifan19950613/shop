<template>
  <div>
    <common-header></common-header>
    <router-view class=""/>
  </div>
</template>

<script>
export default {
  name: 'homeContainers',
  data() {
    return {
      title: '',
    };
  },
  computed: {},
  components: {},
  mounted() {
  },
  methods: {},
};
</script>
