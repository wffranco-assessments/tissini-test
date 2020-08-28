const path = require('path');

module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src/'),
        '~views': path.resolve(__dirname, 'src/views/'),
      },
    },
  },
};
