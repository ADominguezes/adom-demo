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
       * set the events fired
       */
      toastEvents: {
        type: Array,
        value: function() {
          return [];
        },
        notify: true,
      },
      /**
       * set de default word for use in the id of the demos, by default is view
       */
      defaultContentId: {
        type: String,
        value: 'view'
      },
      /**
       * set the selected option in the menu
       */
      optionSelected: {
        type: Number,
        value: 0,
        observer: '_computedContent'
      },
      _event: {
        type: Object,
        value: function() {
          return {};
        },
      },
      /**
       * Array with options for show the tabs in the menu
       */
      _optionsMenu: {
        type: Array,
        value: function() {
          return [];
        },
        notify: true
      }
    },

    attached: function() {
      for(var i = 0; i < this.toastEvents.length; i++) {
        this.addEventListener(this.toastEvents[i], function(e) {
          this._showToast(e)
        })
      }
    },
    _setOptionsMenu: function(menu) {
      this._optionsMenu = menu;
    },

    _computedContent: function() {
      if (this.optionSelected > this.children.length) {
        this.optionSelected = 0
      }
      var menu=[];
      for(var i = 0; i<this.children.length; i++) {
        menu.push({
          'optionName': this.children[i].getAttribute('data-heading')
        });
      }
      this.$$('#heading').innerHTML = this.children[this.optionSelected].getAttribute('data-heading');
      this.$$('#description').innerHTML = this.children[this.optionSelected].getAttribute('data-description');
      this._setOptionsMenu(menu);
    },
    _showToast: function(e) {
      this.$$('#toast').text = e.type;
      this.$$('#toast').open();
    },

  });
}());
