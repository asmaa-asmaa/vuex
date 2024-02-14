<template>
  <div class="about">
    <h1>This is a profile page</h1>
    <h2>your name is {{ this.$store.state.name }}</h2>
    <h2>your age is {{ this.$store.state.age }}</h2>
    <h3>username: {{ this.$store.getters.getNameWithTitle }}</h3>
    <h3>username: {{ getNameWithTitle }}</h3>
    <button @click="changeTitle">fire mutation</button>
    <ul>
      <!--<li
        v-for="product in this.$store.state.ProductsModule.products"
        :key="product.id"
      >
        {{ product.title }}
      </li>-->
      <li v-for="product in ProductsModule.products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
    <h4>maprevision name is {{ this.$store.state.MapRevision.name }}</h4>
    <h4>maprevision brief name is {{ MapRevision.name }}</h4>
    <h4>mapuser brief is {{ addTitle }}</h4>
    <button @click="this.$store.commit('changeName')">change name</button>
    <button @click="changeName">change name brief</button>
    <button @click="this.$store.dispatch('doChangeTitle')">change title</button>
    <button @click="doChangeTitle">change title brief</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["ProductsModule", "MapRevision"]),
    ...mapGetters(["getNameWithTitle", "addTitle"]),
  },
  methods: {
    changeTitle() {
      this.$store.commit("changeTitle");
    },
    ...mapMutations(["changeName"]),
    ...mapActions(["doChangeTitle"]),
  },
};
</script>
