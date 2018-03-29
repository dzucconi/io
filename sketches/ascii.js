import { map } from '~/sketches/utils';

export default {
  name: 'ascii',
  fn: x => map(c => c.charCodeAt(0) + ', ')(x).slice(0, -2)
};
