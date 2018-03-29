import { map } from '~/sketches/utils';

export default {
  name: 'xxx',
  fn: x => {
    if (x.length) {
      return `x${map((x => x.toUpperCase()), 'x')(x)}x`
    }

    return '';
  },
};
