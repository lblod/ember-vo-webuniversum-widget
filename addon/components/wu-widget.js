import Component from '@ember/component';
import postscribe from 'postscribe';
import { computed } from '@ember/object';

export default Component.extend({
  src: null,
  script: computed('src', function() {
    return `<script type="text/javascript" src="${this.src}"></script>`;
  }),
  didInsertElement() {
    this._super(...arguments);
    postscribe('#' + this.elementId, this.script);
  }
});
