const path = 'https://api.tissini.app/api/v2';

const api = (url = '', ...args) => fetch(`${path}${url}`, ...args);

export default {
  categories(options) {
    return api('/categories', options);
  },
};
