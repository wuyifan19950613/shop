import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/utils/http';
// 主页
import login from '@/store/login';
import admin from '@/store/admin';

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
  modules: {
    login,
    admin,
  },
});
