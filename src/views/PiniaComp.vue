<template>
  <div class="pinia composition">
    <h1>pinia composition</h1>
    <h2>state count: {{ count }}</h2>
    <h2>getter: {{ countPlusOne }}</h2>
    <h2>name: {{ name }}</h2>
    <button @click="increase">increase</button>
    <button @click="decrease">decrease</button>
    <button @click="changeName">change name</button>
    <button @click="store.$reset">reset</button>
  </div>
</template>
<script setup>
import { counterStore } from "@/piniastore/counterStore";
import { storeToRefs } from "pinia";
const store = counterStore();
const { count, countPlusOne, name } = storeToRefs(store);
const increase = store.increase;
const decrease = store.decrease;
const changeName = store.changeName;
</script>
