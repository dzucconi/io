import { split } from '~/sketches/utils';

export default {
  name: 'mirrored',
  fn: x =>
    x.split(' ').map(word =>
      `${word}${split(word).reverse().join('')}`).join(' '),
};
