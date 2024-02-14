export default {
  state: {
    name: "asmaa",
    age: 32,
    title: "front end",
    userData: "",
    products: "",
  },
  getters: {
    getNameWithTitle(state) {
      return state.name + "(" + state.title + ")";
    },
  },
  mutations: {
    changeTitle(state) {
      state.title = "web developer";
    },
    getProducts(state, products) {
      state.products = products;
      console.log(products);
    },
  },
  actions: {
    async doGetProducts(context) {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
          context.commit("getProducts", data.products);
        });
    },
  },
};
