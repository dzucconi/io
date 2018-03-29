import { split } from '~/sketches/utils';

export default {
  name: 'array',
  fn: x => split(x).filter(x => x.match(/\w/)).join(',').toLowerCase()
};
