(function() {

  window.iou = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {}
  };

  $(document).ready(function() {
    var app;
    app = new iou.Routers.ApplicationRouter();
    return Backbone.history.start();
  });

}).call(this);
