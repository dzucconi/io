<template>
  <div class='Index'>
    <nav class='Nav'>
      <a
        class='Nav__item'
        :class='{ "Nav__item--active": active === p }'
        @mousedown='changeProcess(p)'
        v-for='p in processes'
        :key='p.name'
      >
        {{ p.name }}
      </a>
    </nav>
    <Editor :process='active.fn' ref='editor' />
  </div>
</template>

<script>
import Editor from '~/components/Editor';

const split = x => x.split('');
const map = (fn, j = '') => x => split(x).map(fn).join(j);
const zip = rows => rows[0].map((_, i) => rows.map(row => row[i]));

const PROCESSES = [
  { name: 'upcase', fn: x => x.toUpperCase() },
  { name: 'sticky', fn: map(c => c[Math.random() > 0.5 ? 'toUpperCase' : 'toLowerCase']()) },
  { name: 'ascii', fn: x => map(c => c.charCodeAt(0) + ', ')(x).slice(0, -2) },
  {
    name: 'xxx',
    fn: x => {
      if (x.length) {
        return `x${map((x => x.toUpperCase()), 'x')(x)}x`
      }

      return '';
    },
  },
  { name: 'sorted', fn: x => split(x).sort().join('') },
  { name: 'reversed', fn: x => split(x).reverse().join('') },
  {
    name: 'mirrored',
    fn: x =>
      x.split(' ').map(word =>
        `${word}${split(word).reverse().join('')}`).join(' '),
  },
  { name: 'array', fn: x => split(x) },
  { name: 'doubled', fn: x => split(x).map(x => x + x).join('') },
  {
    name: 'braid',
    fn: x => {
      const tokens = x.split(' ');
      const upTo = tokens.reduce((a, b) => a.length > b.length ? a : b).length;
      const normalized = tokens.map(token => token + Array(upTo - (token.length - 1)).join(' '));
      const leaves = normalized.map(token => token.split(''));
      return zip(leaves).map(token => token.join('')).join('');
    },
  },
];

export default {
  components: {
    Editor,
  },

  data() {
    return {
      active: PROCESSES[0],
      processes: PROCESSES,
    };
  },

  methods: {
    changeProcess(p) {
      this.active = p;
      this.$nextTick(() => this.$refs.editor.$refs.input.focus())
    },
  },
};
</script>

<style lang='scss'>
.Index {
  display: flex;
}

.Nav {
  padding: 0.25em;

  &__item {
    display: block;
    padding: 0.4em 1.5em 0.5em 0.75em;
    cursor: pointer;
    font-size: 0.8125rem;
    border-radius: 0.33em;

    &:hover {
      background-color: #eee;
    }
  }

  &__item--active {
    text-decoration: underline;
  }
}

.Editor {
  flex: 1;
}

</style>
