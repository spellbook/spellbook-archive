(function() {

  'use strict';

  var _ = self.Fixture = function( fixture ) {
    this.fixture = $( fixture );
    this.create();
  };

  _.prototype = {

    cleanup : function() {
      this.fixture.remove();
      this.create();
    },

    create : function() {
      this.fixture.appendTo( '#fixtures' );
    }

  }

})();
