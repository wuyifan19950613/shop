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
  namespaced: true,
  // 根状态（全局状态）
  state: {
    typeCommodity: {}, // 商品类型列表存放
    SingleCommodity:{}, // 单个商品存放
    vaguefind:{},
  },
  // mutations,
  mutations: {
    setfindCommodity(state, data) {
      state.typeCommodity = data;
    },
    setSingleCommodity(state, data) {
      state.SingleCommodity = data;
    },
    setvaguefindCommodity(state, data) {
      state.vaguefind = data;
    },
  },
  // actions,
  actions: {
    async findCommodity({ commit }, data) {
      const result = await http.get('/api/find/typeCommodity', {
        params: data,
      });
      if (!result) {
        return;
      }
      commit('setfindCommodity', result.data);
    },
    async findCommodityId({ commit }, data) {
      const result = await http.get('/api/find/CommodityId', {
        params: data,
      });
      if (!result) {
        return;
      }
      commit('setSingleCommodity', result.data);
    },
    async vaguefindCommodity({ commit }, data) {
      const result = await http.get('/api/vaguefind/Commodity', {
        params: data,
      });
      if (!result) {
        return;
      }
      commit('setvaguefindCommodity', result.data);
    },

  },
  // plugins,
  plugins: [],
  // modules
  modules: {
    login,
    admin,
  },
});
