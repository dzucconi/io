<template>
  <div class='Editor'>
    <textarea class='Input' v-model="input" ref='input' autofocus />
    <div class='Output'>{{ output }}</div>
  </div>
</template>

<script>
export default {
  name: 'Editor',

  props: {
    process: {
      type: Function,
      default: x => x,
    },
  },

  data() {
    return {
      input: 'a messenger that reaches out from a distant past',
    };
  },

  computed: {
    output() {
      return this.process(this.input);
    },
  },
}
</script>

<style lang='scss' scoped>
.Editor {
  display: flex;
  height: 100vh;
}

.Input,
.Output {
  flex: 1;
  font-size: 2.25rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding: 0.5em 0.75em;
}

.Input {
  border: none;
  background-color: #eee;

  &:focus {
    outline: none;
  }
}
</style>
