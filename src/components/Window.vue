<script setup lang="ts">
  import { useDraggable } from '@vueuse/core';
  import { ref } from 'vue';
  import ResizableWrapper from './ResizableWrapper.vue';

  const draggableElement = ref<HTMLElement | null>(null);
  const { position } = useDraggable(draggableElement);
</script>

<template>
  <ResizableWrapper :position="position" class="wrapper">
    <div class="terminal">
      <header class="header" ref="draggableElement">
        <div class="tabs">
          <div class="tabs-prefix-before"></div>
          <div class="tab">
            <img src="../assets/icon_temp.png" />
            <h2>PowerShell</h2>
            <button class="tab-close"><img src="../assets/close.png" /></button>
          </div>
          <div class="tabs-prefix-after"></div>
        </div>
        <div class="tab-actions">
          <button>+</button>
          <button>v</button>
        </div>
        <div class="space"></div>
        <div class="window-actions">
          <button><img src="../assets/minimize.png" /></button>
          <button><img src="../assets/maximize.png" /></button>
          <button class="close"><img src="../assets/close.png" /></button>
        </div>
      </header>
      <div class="terminal-body"></div>
    </div>
  </ResizableWrapper>
</template>

<style scoped>
  .terminal {
    border: solid 1px #1883d7;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.2);
    background-color: #1f1f1f;
    flex: 1;
    height: 100%;
    width: 100%;
  }

  .tabs {
    display: flex;
  }

  .tab {
    height: 32px;
    margin-top: 4px;
    width: 224px;
    background-color: #000000;
    border-radius: 5px 5px 0px 0px;

    padding: 0 8px;

    display: flex;
    align-items: center;
  }

  .tabs-prefix-before,
  .tabs-prefix-after {
    width: 8px;
    height: 100%;
    background-color: black;
  }

  .tabs-prefix-before::after,
  .tabs-prefix-after::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: #333333;
  }

  .tabs-prefix-after::after {
    border-bottom-left-radius: 4px;
  }

  .tabs-prefix-before::after {
    border-bottom-right-radius: 4px;
  }

  .tab > h2 {
    margin-left: 4px;
    color: white;
    font-size: 12;

    margin-right: auto;
  }

  .tab > button {
    width: 16px;
    height: 16px;
    border-radius: 3px;
  }

  .tab > button > img {
    opacity: 0.5;
  }

  .tab-actions {
    margin-left: 8px;
    margin-top: 4px;
    display: flex;
  }

  .tab-actions > button {
    width: 32px;
    color: rgb(180, 180, 180);
  }

  .tab-actions > button:first-of-type {
    border-top-left-radius: 5px;
  }

  .tab-actions > button:last-of-type {
    border-top-right-radius: 5px;
  }

  .window-actions {
    display: flex;
  }

  .space {
    flex: 1;
  }

  .header {
    height: 36px;
    background-color: #333333;

    display: flex;
  }

  button {
    border: none;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tab-actions > button:hover {
    background-color: #1f1f1f;
  }

  .window-actions > button:hover,
  .tab-close:hover {
    background-color: #5c5c5c;
  }

  .window-actions > button {
    width: 46px;
    transition: 150ms;
  }

  .window-actions > .close:hover {
    background-color: #e81123;
    transition: 0;
  }
</style>
