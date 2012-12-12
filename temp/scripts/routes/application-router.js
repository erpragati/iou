(function() {

  iou.Routers.ApplicationRouter = Backbone.Router.extend({
    routes: {
      "friends": "renderFriends"
    },
    renderFriends: function() {
      var friendsView;
      return friendsView = new iou.Views.friendsView();
    }
  });

}).call(this);
