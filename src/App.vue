<script setup>
import {useStore} from 'vuex';
// import {computed} from 'vue';
const store = useStore();
// const isLoading = computed(() => store.state.wait.queue.includes("load_data"));

const loadData = () => store.dispatch("other/loadData");
import {useWait} from './store/wait';
const isLoading = useWait("load_data");
</script>

<template>
  <p>is loading: {{ isLoading }}</p>
  <button @click="loadData">load data</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
