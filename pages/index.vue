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
        {{ key(p.name) }}
      </a>
    </nav>
    <Editor :process='active.fn' ref='editor' />
  </div>
</template>

<script>
import crypto from 'crypto';

import Editor from '~/components/Editor';

import { split, map, zip } from '~/sketches/utils';

import sticky from '~/sketches/sticky';
import ascii from '~/sketches/ascii';
import xxx from '~/sketches/xxx';
import sorted from '~/sketches/sorted';
import reversed from '~/sketches/reversed';
import mirrored from '~/sketches/mirrored';
import array from '~/sketches/array';
import doubled from '~/sketches/doubled';
import braid from '~/sketches/braid';
import phonemes from '~/sketches/phonemes';

const PROCESSES = [
  sticky,
  ascii,
  xxx,
  sorted,
  reversed,
  mirrored,
  array,
  doubled,
  braid,
  phonemes,
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

    key(x) {
      const shasum = crypto.createHash('sha1');
      shasum.update(x);
      return shasum.digest('hex').slice(0, 7);
    },
  },
};
</script>

<style lang='scss'>
.Index {
  display: flex;
  margin: 2em;
}

.Nav {
  padding: 0.25em;

  &__item {
    display: block;
    padding: 0.4em 1em 0.5em 1em;
    cursor: pointer;
    font-size: 0.8125rem;
    border-radius: 0.33em;
    text-align: center;

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
