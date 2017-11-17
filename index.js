/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-airbrake',

  included: function(app) {
    this._super.included(app);

    app.import('node_modules/airbrake-js/dist/client.min.js');
  }
};
