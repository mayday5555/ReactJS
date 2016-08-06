(function($, R, RD) {
  "use strict";

  var CommentBox = R.createClass({
    displayName: "CommentBox",
    render: function() {
      return R.createElement('h1', {
        className: "title",
        id: "Hello"
      }, "Hello World!");
    }
  });

  RD.render(R.createElement(CommentBox, null), $('.container')[1]);
})(jQuery, React, ReactDOM);
