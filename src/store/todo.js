export default {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    ADD_TODO(state, item) {
      const obj = {
        complete: false,
        item: item,
      };
      localStorage.setItem(item, JSON.stringify(obj));
      state.list.push(obj);
    },
    DELETE_TODO(state, payload) {
      localStorage.removeItem(payload.item);
      state.list.splice(payload.index, 1);
    },
    TOGGLE_TODO(state, payload) {
      state.list[payload.index].complete = !state.list[payload.index].complete;
      localStorage.removeItem(payload.item);
      localStorage.setItem(payload.item, JSON.stringify(payload.item));
    },
    CLEAR_ALL(state) {
      localStorage.clear();
      state.list = [];
    },
  },
  actions: {},
};
