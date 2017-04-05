(function () {
  'use strict';
  Polymer({

    is: 'adom-demo',

    properties: {
      /**
       * If true, hide the menu in top of page.
       */
      hideMenu: {
        type: Boolean,
        value: false
      },
      /**
       * Array with options menu for show in the menu
       */
      optionsMenu: {
        type: Array,
        notify: true
      },
      /**
       * If showMenu is true, this will check the selected option in the menu
       */
      optionSelected: {
        type: Number
      }
    },
    attached: function () {
      if (this.optionSelected > this.optionsMenu.length) {
        this.optionSelected = 0
      }
    }

  });
}());
