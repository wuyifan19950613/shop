import conf from '@/config';
import { isJSON } from '@/utils';

// 获取全局localStorage
const localStorage = window.localStorage;

const initObj = {
  remember: false,
  user: '',
  beforeLoginUrl: '',
  wx: '',
  wxVerification: true,
  wxVeriQuite: false,
  region: '',
  expiryTime: 0,
  expiryTimeWx: 0,
};

// 初始化缓存数据 与 存取缓存数据
export default {
  install: (vm) => {
    const Vue = vm;
    const appName = conf.appName;

    Vue.prototype.$setLS = (...args) => {
      const len = args.length;
      let appObj = localStorage.getItem(appName);

      if (len < 1 || len > 2) {
        return;
      }

      if (!appObj || !isJSON(appObj)) {
        // 初始化
        localStorage.setItem(appName, JSON.stringify(initObj));

        appObj = localStorage.getItem(appName);
      }

      if (len === 1 && typeof args[0] === 'object') {
        localStorage.setItem(appName, JSON.stringify({
          ...JSON.parse(appObj),
          ...args[0],
        }));
        return;
      }

      let newValue = args[1];

      if (typeof newValue === 'object') {
        newValue = JSON.stringify(newValue);
      }

      appObj = JSON.parse(appObj);
      appObj[args[0]] = newValue;
      localStorage.setItem(appName, JSON.stringify(appObj));
    };

    Vue.prototype.$getLS = (key) => {
      let appObj = localStorage.getItem(appName);

      if (!appObj || !isJSON(appObj)) {
        // 初始化
        localStorage.setItem(appName, JSON.stringify(initObj));

        appObj = localStorage.getItem(appName);
      }

      // console.log(appObj);
      appObj = JSON.parse(appObj);
      return appObj[key];
    };

    Vue.prototype.$removeLS = () => {
      localStorage.removeItem(appName);
    };

    Vue.prototype.$removeLSingle = (key) => {
      let appObj = localStorage.getItem(appName);

      if (!appObj || !isJSON(appObj)) {
        // 初始化
        localStorage.setItem(appName, JSON.stringify(initObj));

        appObj = localStorage.getItem(appName);
      }

      appObj = JSON.parse(appObj);
      delete appObj[key];

      localStorage.setItem(appName, JSON.stringify(appObj));
    };
  },
};
