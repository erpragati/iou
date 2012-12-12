
window.iou =
  Models: {},
  Collections: {},
  Views: {},
  Routers: {}


$(document).ready ->
  app         = new iou.Routers.ApplicationRouter()
  Backbone.history.start()
