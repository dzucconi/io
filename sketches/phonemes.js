import axios from 'axios';
import debounce from 'debounce-promise';

export default {
  name: 'phonemes',
  fn: debounce(text => {
    return axios.post('https://api.corrasable.com/conversion/phonemes', { text })
      .then(({ data: lines }) => {
        return lines.map(words => {
          return words.map(phonemes => {
            return `
              <span style='margin-right: 0.75em;'>
                ${phonemes.join('&nbsp;')}
              </span>
            `;
          }).join(' ');
        }).join('<br>');
      });
  }, 250),
};
