<template>
  <div class='Editor'>
    <textarea class='Input' v-model="input" autofocus />
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

  > * {
    flex: 1;
  }
}
</style>
