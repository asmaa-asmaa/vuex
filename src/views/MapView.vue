<template>
  <div class="map">
    <h1>hello map position api</h1>
    <h2>counter is : {{ MapTwo.counter }}</h2>
    <h2>getter is : {{ getters.multiplyCntr }}</h2>
    <button @click="store.commit('inc')">increase</button>
    <button @click="store.commit('dec')">decrease</button>
    <button @click="store.dispatch('increase')">increase actions</button>
    <button @click="store.dispatch('decreament')">decrease actions</button>
    <input type="number" v-model="MapTwo.counter" />
  </div>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
const MapTwo = store.state.MapTwo;
console.log(MapTwo);
//console.log(useStore());
console.log(store.getters);
const getters = store.getters;
</script>
