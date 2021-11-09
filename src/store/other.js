export const other = {
  namespaced: true,
  state() {
    return {};
  },
  actions: {
    async loadData({commit}) {
        commit("wait/start", "load_data", { root: true });
        setTimeout(() => {
            commit("wait/end", "load_data", { root: true });
        }, 2000);
    },
  },
};
