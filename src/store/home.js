export default {
  namespaced: true,
  state: {
    city: "",
    num: 1
  },
  getters: {
    total (state) {
      return state.num + 1;
    }
  },
  mutations: {
    changeCity (state, preload) {
      console.log(state);
      state.city = preload.city;
    }
  },
  actions: {
    changeName ({commit, state, rootState, dispatch}, preload) {
      console.log(state);
      console.log(rootState);
      console.log(preload);
      dispatch("FchangeName", preload, {root: true});
    }
  }
};
