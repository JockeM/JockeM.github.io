<script setup lang="ts">
  import {
    Position,
    useEventListener,
    useMouse,
    useMouseInElement,
  } from '@vueuse/core';
  import { computed, reactive, ref, watch } from 'vue';

  const props = defineProps<{
    position: Position;
  }>();

  const left = ref(0);
  const top = ref(0);

  const dstyle = reactive({
    width: 300,
    height: 300,
    left: 100,
    top: 100,
  });

  const computedStyle = computed(() => {
    return {
      left: left.value + props.position.x,
      top: top.value + props.position.y,
      width: dstyle.width,
      height: dstyle.height,
    };
  });

  const drag = ref({
    n: false,
    e: false,
    w: false,
    s: false,
  });

  const clearDrag = () =>
    (drag.value = {
      n: false,
      e: false,
      w: false,
      s: false,
    });

  useEventListener('mouseup', clearDrag);
  useEventListener('dragend', clearDrag);

  const el = ref<HTMLElement | null>(null);
  const {
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementWidth,
    elementHeight,
  } = useMouseInElement(el);

  watch(
    [
      elementX,
      elementY,
      elementPositionX,
      elementPositionY,
      elementWidth,
      elementHeight,
    ] as const,
    ([
      elementX,
      elementY,
      elementPositionX,
      elementPositionY,
      elementWidth,
      elementHeight,
    ]) => {
      if (drag.value.w) {
      } else if (drag.value.e) {
        dstyle.width = elementX;
      }

      if (drag.value.n) {
        //up
      } else if (drag.value.s) {
        //down
        dstyle.height = elementY;
      }
    }
  );

  //watch([x, y] as const, ([x, y]) => {
  //  if (drag.value.w) {
  //    const delta = x - style.left;
  //    style.width -= delta;
  //
  //    style.left = x;
  //  } else if (drag.value.e) {
  //    style.width = x - style.left;
  //  }
  //
  //  if (drag.value.n) {
  //    const delta = y - style.top;
  //    style.height -= delta;
  //
  //    style.top = y;
  //  } else if (drag.value.s) {
  //    style.height = y - style.top;
  //  }
  //});

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
  <div ref="el" class="main" :style="computedStyle">
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
