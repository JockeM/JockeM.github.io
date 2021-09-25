<script setup lang="ts">
  import Window from './components/Window.vue';
  import ResizableWrapper from './components/ResizableWrapper.vue';
</script>

<template>
  <main>
    <ResizableWrapper class="wrapper"> </ResizableWrapper>
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
  }

  html,
  body {
    background-color: #002631;
  }
</style>
