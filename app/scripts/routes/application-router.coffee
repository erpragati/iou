iou.Routers.ApplicationRouter = Backbone.Router.extend
  routes:
    # "friend" : "renderFriend"
    "friends" : "renderFriends"


  # renderFriend: ->
  #   friendView  = new iou.Views.friendView()

  renderFriends: ->
    friendsView = new iou.Views.friendsView()