export default {
  state: {
    counter: 0,
  },
  getters: {
    multiplyCntr(state) {
      return state.counter * 2;
    },
  },
  mutations: {
    inc(state) {
      state.counter++;
    },
    dec(state) {
      state.counter--;
    },
  },
  actions: {
    increase(context) {
      context.commit("inc");
    },
    decreament(context) {
      context.commit("dec");
    },
  },
};
