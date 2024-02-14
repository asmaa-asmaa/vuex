<template>
  <div class="pinia">
    <h1>pinia page</h1>
    <!--<h2>state count is {{ myCount }}</h2>-->
    <h2>state count is {{ count }}</h2>
    <h2>getter: {{ storeGetter }}</h2>
    <button @click="increase">increase</button>
    <button @click="decrease">decrease</button>
  </div>
</template>

<script>
import { counterStore } from "@/piniastore/counterStore";
import { mapState, mapActions } from "pinia";
export default {
  computed: {
    ...mapState(counterStore, ["count"]),
    //...mapState(counterStore, {
    //myCount: (state) => state.count,
    //}),
    storeGetter() {
      return counterStore().countPlusOne;
    },
  },
  mounted() {
    console.log(this.count);
    //console.log(this.myCount);
    console.log(counterStore().countPlusOne);
  },
  methods: {
    ...mapActions(counterStore, ["increase", "decrease"]),
  },
};
</script>
