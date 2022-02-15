import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from "./auth";
import todo from "./todo";

export default new Vuex.Store({
  state: {
    isMobile: false,
  },
  mutations: {
    GET_DEVICE_TYPE(state) {
      window.innerWidth <= 944
        ? (state.isMobile = true)
        : (state.isMobile = false);
    },
  },
  actions: {
    getDeviceType() {
      this.commit("GET_DEVICE_TYPE");
    },
  },
  modules: {
    auth,
    todo,
  },
});
