const devBaseURL = 'http://192.168.80.16:3000';
const proBaseURL = 'https://47.99.164.234:3000';

// 分享地址
const fxurl = '';

export default {
  appName: 'userObject',
  baseURL: process.env.NODE_ENV !== 'production' ? devBaseURL : proBaseURL,
  fxURL: fxurl,
};
