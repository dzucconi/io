<template>
  <div>
    {{ ellipsis }}
  </div>
</template>

<script>
export default {
  name: 'Spinner',

  data() {
    return {
      ellipsis: '.',
    };
  },

  methods: {
    tick() {
      this.ellipsis = {
        '.': '..',
        '..': '...',
        '...': '.',
      }[this.ellipsis];
    },
  },

  mounted() {
    this.interval = setInterval(() =>
      this.tick(), 100);
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
