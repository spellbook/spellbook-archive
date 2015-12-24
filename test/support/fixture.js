(function() {

  'use strict';

  var _ = self.Fixture = function( fixture ) {
    this.fixture = $( '<div>' + fixture + '</div>' );
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
