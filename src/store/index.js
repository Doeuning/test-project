import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from "./auth";

export default new Vuex.Store({
  state: {
    isMobile: false,
  },
  mutations: {
    GET_DEVICE_TYPE(state) {
      window.innerWidth <= 768
        ? (state.isMobile = true)
        : (state.isMobile = false);
    },
  },
  actions: {},
  modules: {
    auth,
  },
});
