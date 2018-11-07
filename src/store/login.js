import http from '@/utils/http';

export default {
  namespaced: true,
  state: {
  },
  mutations: {

  },
  actions: {
    userRegister(content, data) {
      return http.post('/api/user/register', data);
    },
    userLogin(content, data){
      return http.post('/api/user/login', data);
    }
  },
};
