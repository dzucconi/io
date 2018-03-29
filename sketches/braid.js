import { zip } from '~/sketches/utils';

export default {
  name: 'braid',
  fn: x => {
    const tokens = x.split(' ');
    const upTo = tokens.reduce((a, b) => a.length > b.length ? a : b).length;
    const normalized = tokens.map(token => token + Array(upTo - (token.length - 1)).join(' '));
    const leaves = normalized.map(token => token.split(''));
    return zip(leaves).map(token => token.join('')).join('');
  },
};

