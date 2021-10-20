<script lang="ts" setup></script>

<template>
  <div class="content">
    <p class="red">This is just a random project :)</p>
  </div>
</template>

<style scoped>
  .content {
    --background: #1f1f1f;
    --black: #1f1f1f;
    --blue: #6699df;
    --brightBlack: #75715e;
    --brightBlue: #66d9ef;
    --brightCyan: #e69f66;
    --brightGreen: #a6e22e;
    --brightPurple: #ae81ff;
    --brightRed: #f92672;
    --brightWhite: #f8f8f2;
    --brightYellow: #e6db74;
    --cursorColor: #ffffff;
    --cyan: #e69f66;
    --foreground: #f8f8f8;
    --green: #a6e22e;
    --purple: #ae81ff;
    --red: #f92672;
    --selectionBackground: #ffffff;
    --white: #f8f8f2;
    --yellow: #e6db74;

    --terminal-blue: #1883d7;
    --terminal-header: #333333;
    --terminal-button-selected: #5c5c5c;
  }

  @font-face {
    font-family: Caskaydia;
    src: url('../assets/Caskaydia Cove Nerd Font Complete.ttf');
  }

  .content {
    font-family: Caskaydia, monospace;
    font-size: 16;
    padding: 0.5rem;
    text-align: left;
    color: #f8f8f2;

    --forground: var(--white);
  }

  span {
    color: var(--background);
    background-color: var(--forground);
  }

  .red {
    color: var(--red);
    --forground: var(--red);
  }

  .blue {
    color: var(--brightBlue);
    --forground: var(--brightBlue);
  }

  .green {
    color: var(--green);
  }

  .purple {
    color: var(--purple);
  }

  .b {
    font-weight: 600;
  }
</style>
