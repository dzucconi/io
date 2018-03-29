import { split } from '~/sketches/utils';

export default {
  name: 'sorted',
  fn: x => split(x).sort().join(''),
};
