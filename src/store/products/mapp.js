export default {
  state: {
    name: "ahmed elmasry",
    title: "map developer",
  },
  getters: {
    addTitle(state) {
      return `${state.name} (${state.title})`;
    },
  },
  mutations: {
    changeName(state) {
      state.name = "mohamed adel";
    },
    changeTitle(state, newTitle) {
      state.title = newTitle;
    },
  },
  actions: {
    doChangeTitle(context) {
      context.commit("changeTitle", "computer specialized");
    },
  },
};
