export default {
  namespaced: true,
  state: {
    name: "赵博",
  },
  mutations: {
    changeName (state, preload) {
      state.name = preload.name;
    }
  },
  actions: {
    FchangeName: {
      root: true,
      handler ({state, commit}, preload) {
        // state.name = preload.name;
        console.log(state);
        commit("changeName", preload);
      }
    }
  }
};
