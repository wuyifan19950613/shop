import http from '@/utils/http';

export default {
  namespaced: true,
  state: {
    CaptureData: {},
  },
  mutations: {
    setCaptureData(state, data) {
      state.CaptureData = data;
    },
  },
  actions: {
    async GrabInfo(content, data) {
      const result = await http.get('/api/grabbing/data', {
        params: data,
      });
      if (!result) {
        return;
      }
      commit('setCaptureData', result.data);
    },
  },
};
