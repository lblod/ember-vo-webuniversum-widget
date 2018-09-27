'use strict';

module.exports = {
  name: require('./package').name,
  included: function included(app) {
    this._super.included.apply(this, app);
    app.import('node_modules/postscribe/dist/postscribe.js', {
      using: [{ transformation: 'amd', as: 'postscribe' }]
    });
  }
};
