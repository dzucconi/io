import { split } from '~/sketches/utils';

export default {
  name: 'reversed',
  fn: x => split(x).reverse().join('')
};
