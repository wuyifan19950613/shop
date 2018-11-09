const devBaseURL = 'http://192.168.80.16:3000';
const proBaseURL = 'http://api.xiaohuanzi.cn';

// 分享地址
const fxurl = '';

export default {
  appName: 'userObject',
  baseURL: process.env.NODE_ENV !== 'production' ? devBaseURL : proBaseURL,
  fxURL: fxurl,
};
