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
