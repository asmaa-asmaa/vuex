import { createStore } from "vuex";
import ProductsModule from "@/store/products/getProducts";
import MapRevision from "@/store/products/mapp";
import MapTwo from "@/store/products/mapTwo";

export default createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    ProductsModule,
    MapRevision,
    MapTwo,
  },
});
