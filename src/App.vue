<script setup lang="ts">
  import Window from './components/Window.vue';
</script>

<template>
  <main>
    <Window></Window>
  </main>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  main {
    width: 100%;
    height: 100%;
  }

  html,
  body {
    background-color: #002631;
  }
</style>
