(function() {

  window.iou = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      return console.log('Hello from Backbone!');
    }
  };

  $(document).ready(function() {
    return iou.init();
  });

}).call(this);
