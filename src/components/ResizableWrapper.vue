<script setup lang="ts">
  import { useEventListener, useMouseInElement } from '@vueuse/core';
  import { reactive, ref, watch } from 'vue';

  const style = reactive({
    width: 300,
    height: 300,
    'margin-left': 100,
    'margin-top': 100,
  });

  const drag = ref({
    n: false,
    e: false,
    w: false,
    s: false,
  });

  useEventListener('mouseup', (ev) => {
    drag.value = {
      n: false,
      e: false,
      w: false,
      s: false,
    };
  });

  const el = ref<HTMLElement | null>(null);
  const { x, y } = useMouseInElement(el);

  watch([x, y] as const, ([x, y]) => {
    if (drag.value.w) {
      const delta = x - style['margin-left'];
      style.width -= delta;

      style['margin-left'] = x;
    } else if (drag.value.e) {
      style.width = x - style['margin-left'];
    }

    if (drag.value.n) {
      const delta = y - style['margin-top'];
      style.height -= delta;

      style['margin-top'] = y;
    } else if (drag.value.s) {
      style.height = y - style['margin-top'];
    }
  });

  const click = ({ n = false, w = false, e = false, s = false }) => {
    if (n) {
      drag.value.n = true;
    } else if (s) {
      drag.value.s = true;
    }

    if (w) {
      drag.value.w = true;
    } else if (e) {
      drag.value.e = true;
    }
  };
</script>

<template>
  <div ref="el" class="main" :style="style">
    <div @mousedown="click({ n: true, w: true })" class="b nw"></div>
    <div @mousedown="click({ n: true })" class="b n"></div>
    <div @mousedown="click({ n: true, e: true })" class="b ne"></div>
    <div @mousedown="click({ w: true })" class="b w"></div>
    <div class="center"><slot></slot></div>
    <div @mousedown="click({ e: true })" class="b e"></div>
    <div @mousedown="click({ s: true, w: true })" class="b sw"></div>
    <div @mousedown="click({ s: true })" class="b s"></div>
    <div @mousedown="click({ s: true, e: true })" class="b se"></div>
  </div>
</template>

<style scoped>
  .main {
    --size: 6px;
    display: grid;
    position: absolute;
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
