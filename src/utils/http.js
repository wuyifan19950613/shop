import Vue from 'vue';
import axios from 'axios';
import router from '@/router';
import config from '@/config';

// 创建 axios 实例
const http = axios.create({
  baseURL: config.baseURL,
  timeout: 0,
  headers:{
	   'Content-Type':'application/json'
	}
});

export default http;
