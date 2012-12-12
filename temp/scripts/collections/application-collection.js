(function() {

  iou.Collections.ApplicationCollection = Backbone.Collection.extend({
    model: iou.Models.ApplicationModel
  });

  iou.Collections.FriendsCollection = Backbone.Collection.extend({
    model: iou.Models.FriendModel
  });

}).call(this);
