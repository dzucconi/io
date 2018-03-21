<template>
  <div class='Index'>
    <nav class='Nav'>
      <a
        class='Nav__item'
        :class='{ "Nav__item--active": active === p }'
        @mousedown='active = p'
        v-for='p in processes'
        :key='p.name'
      >
        {{ p.name }}
      </a>
    </nav>
    <Editor :process='active.fn' />
  </div>
</template>

<script>
import Editor from '~/components/Editor';

const split = x => x.split('');
const map = (fn, j = '') => x => split(x).map(fn).join(j);

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
};
</script>

<style lang='scss'>
.Index {
  display: flex;
}

.Nav {
  width: 10em;

  &__item {
    display: block;
    cursor: pointer;
    padding: 0.125em 0.25em 0.25em 0.25em;
  }

  &__item--active {
    background-color: black;
    color: white;
  }
}

.Editor {
  flex: 1;
}

</style>
