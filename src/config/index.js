// const devBaseURL = 'http://192.168.80.16:3000'; // 公司ip
const devBaseURL = 'http://192.168.0.102:3000'; // 家ip
const proBaseURL = 'http://api.xiaohuanzi.cn';

// 分享地址
const fxurl = '';

export default {
  appName: 'userObject',
  baseURL: process.env.NODE_ENV !== 'production' ? devBaseURL : proBaseURL,
  fxURL: fxurl,
};
