<script setup lang="ts">
  import Window from './components/Window.vue';
</script>

<template>
  <main>
    <Window id="terminal"></Window>
  </main>
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

  main {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
  }

  html,
  body {
    background-color: #002631;
  }
</style>
