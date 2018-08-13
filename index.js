'use strict';

module.exports = {
  name: '@lblod/ember-vo-webuniversum-widget',
  included: function included(app) {
    this._super.included.apply(this, app);
    app.import('node_modules/postscribe/dist/postscribe.js', {
      using: [{ transformation: 'amd', as: 'postscribe' }]
    });
  }
};
