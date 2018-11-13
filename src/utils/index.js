import Vue from "vue";
import conf from "@/config";
import http from "@/utils/http";

const thisVue = Vue.prototype;

// 判断JSON字符串
export const isJSON = v => {
  if (!v) {
    return false;
  }
  if (typeof v === "number") {
    return false;
  }
  if (v.charAt(0) !== "{") {
    return false;
  }

  try {
    JSON.parse(v);
    return true;
  } catch (e) {
    return false;
  }
};
// 优惠卷面额解析
export const CouponNum = v => {
  const index = v.indexOf('减');
  const result = parseInt(v.substr(index + 1,v.length));
  return result;
};

// // 计算用劵后的价格
// export const CouponNum = (price, ) => {
//   const index = v.indexOf('减');
//   const result = v.substr(index + 1,v.length);
//   return result;
// };
