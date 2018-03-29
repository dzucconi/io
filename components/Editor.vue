<template>
  <div class='Editor'>
    <Spinner class='Spinner' v-show='isLoading' />

    <textarea
      class='Input'
      v-model="input"
      ref='input'
      autofocus
    />

    <div class='Output' v-html='output' />
  </div>
</template>

<script>
import Spinner from '~/components/Spinner';

export default {
  name: 'Editor',

  components: {
    Spinner,
  },

  props: {
    process: {
      type: Function,
      default: x => x,
    },
  },

  data() {
    return {
      input: 'a messenger that reaches out from a distant past',
      isLoading: false,
    };
  },

  asyncComputed: {
    output() {
      const value = this.process(this.input);

      this.isLoading = true;

      return Promise.resolve(value)
        .then((x) => {
          this.isLoading = false;
          return x;
        });
    },
  },
}
</script>

<style lang='scss' scoped>
.Editor {
  position: relative;
  display: flex;
  height: 100vh;
}

.Input,
.Output {
  flex: 1;
  flex-basis: 50%;
  font-size: 1.5rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
}

.Input {
  border: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  &:focus {
    outline: none;
  }
}

.Output {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: subpixel-antialiased;
}

.Spinner {
  position: fixed;
  top: 0;
  left: 0;
  font-size: 2rem;
  line-height: 1;
  line-height: 0;
}
</style>
