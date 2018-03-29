export const split = x => x.split('');

export const map = (fn, j = '') => x => split(x).map(fn).join(j);

export const zip = rows => rows[0].map((_, i) => rows.map(row => row[i]));
