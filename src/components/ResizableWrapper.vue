<script setup lang="ts">
  import { useEventListener, useMouseInElement } from '@vueuse/core';
  import { reactive, ref, watch } from 'vue';

  const el = ref<HTMLElement | null>(null);
  const { x, y } = useMouseInElement(el);

  const style = reactive({
    width: 300,
    height: 300,
    'margin-left': 100,
  });

  const dragging = ref(false);
  useEventListener('mouseup', (ev) => {
    dragging.value = false;
  });

  const startDrag = () => {
    dragging.value = true;
  };

  watch([x, y] as const, ([x, y]) => {
    if (dragging.value) {
      const width = style.width;
      const delta = x - style['margin-left'];

      style['margin-left'] = x;
      style.width = width - delta;
    }
  });

  //const zones = ['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se'];
</script>

<template>
  <div ref="el" class="main" :style="style">
    <div class="b nw"></div>
    <div class="b n"></div>
    <div class="b ne"></div>
    <div @mousedown="startDrag" class="b w"></div>
    <div class="center"><slot></slot></div>
    <div class="b e"></div>
    <div class="b sw"></div>
    <div class="b s"></div>
    <div class="b se"></div>
  </div>
</template>

<style scoped>
  .main {
    --size: 6px;
    border: 1px red solid;
    display: grid;
    position: fixed;
    grid-template-columns: 1fr 100fr 1fr;
    grid-template-rows: 1fr 100fr 1fr;
  }

  .center {
    flex: 1;
  }

  .main .b {
    flex: 0;
    min-width: var(--size);
    min-height: var(--size);
    background-color: rgba(0, 255, 150, 0.5);
  }

  .e {
    cursor: e-resize;
  }

  .n {
    cursor: n-resize;
  }

  .s {
    cursor: s-resize;
  }
  .w {
    cursor: w-resize;
  }

  .ne {
    cursor: ne-resize;
  }

  .nw {
    cursor: nw-resize;
  }

  .se {
    cursor: se-resize;
  }

  .sw {
    cursor: sw-resize;
  }
</style>
