import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // 严格模式（开启后所有状态必须走mutations）
  strict: process.env.NODE_ENV !== 'production',
  // 根状态（全局状态）
  state: {},
  // mutations,
  mutations: {},
  // actions,
  actions: {},
  // plugins,
  plugins: [],
  // modules
  modules: {},
});
