<script setup lang="ts">
  import { useEventListener, useMouse } from '@vueuse/core';
  import { reactive, ref, watch } from 'vue';

  const props = defineProps<{
    dragging: boolean;
  }>();

  const style = reactive({
    left: 125,
    top: 125,
    width: 800,
    height: 500,
  });

  const drag = ref({
    n: false,
    e: false,
    w: false,
    s: false,
  });

  const clearDrag = () => {
    return (drag.value = {
      n: false,
      e: false,
      w: false,
      s: false,
    });
  };

  useEventListener('mouseup', clearDrag);
  useEventListener('dragend', clearDrag);

  const { x, y } = useMouse();

  watch([x, y] as const, ([x, y], [prev_x, prev_y]) => {
    if (props.dragging === true) {
      style.left += x - prev_x;
      style.top += y - prev_y;
      clearDrag();
    }

    if (drag.value.w) {
      // TODO: this will start to move body if the element cant shrink

      const delta = x - style.left;
      style.width -= delta;

      style.left = x;
    } else if (drag.value.e) {
      style.width = x - style.left;
    }

    if (drag.value.n) {
      const delta = y - style.top;
      style.height -= delta;

      style.top = y;
    } else if (drag.value.s) {
      style.height = y - style.top;
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
  <div class="main" :style="style">
    <div @mousedown="click({ n: true, w: true })" class="nw"></div>
    <div @mousedown="click({ n: true })" class="n"></div>
    <div @mousedown="click({ n: true, e: true })" class="ne"></div>
    <div @mousedown="click({ w: true })" class="w"></div>
    <slot></slot>
    <div @mousedown="click({ e: true })" class="e"></div>
    <div @mousedown="click({ s: true, w: true })" class="sw"></div>
    <div @mousedown="click({ s: true })" class="s"></div>
    <div @mousedown="click({ s: true, e: true })" class="se"></div>
  </div>
</template>

<style scoped>
  .main {
    display: grid;
    position: absolute;
    grid-template-columns: 6px 1fr 6px;
    grid-template-rows: 6px 1fr 6px;
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
