<script setup lang="ts">
  import Terminal from './components/Terminal.vue';
</script>

<template>
  <main>
    <Terminal />
  </main>
</template>

<style>
  #app {
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
