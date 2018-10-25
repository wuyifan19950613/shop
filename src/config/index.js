const devBaseURL = 'http://192.168.60.9:10010';
const proBaseURL = 'https://www.cqmaiji.cn';

// 分享地址
const fxurl = '';

export default {
  appName: 'userObject',
  baseURL: process.env.NODE_ENV !== 'production' ? devBaseURL : proBaseURL,
  fxURL: fxurl,
};
