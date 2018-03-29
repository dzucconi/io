import { map } from '~/sketches/utils';

export default {
  name: 'sticky',
  fn: map(c => c[Math.random() > 0.5 ? 'toUpperCase' : 'toLowerCase']()),
};
