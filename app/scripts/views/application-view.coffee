iou.Views.friendsView = Backbone.View.extend
  el: "#friendsCollection"
  template: new EJS({url: 'scripts/templates/friends.ejs'})
  # friendTemplate: new EJS({url: 'scripts/templates/friend.ejs'})

  initialize: ->
    @collection = new iou.Collections.FriendsCollection()
    @collection.on("reset", @render, this)
    # reset would be replaced with the fetch
    # @collection.fetch()
    @collection.reset([{name: "katie", friend_id: "3", balance: "40"}, {name: "dan", friend_id: "4", balance: "50"}])


  render: ->
    # on add of two items seems to cause render to happen twice.  Each time Each is run over the entire collection.
    # duplicating the li's models each time.

    viewHTML = @$el.html(@template.render({friends: @collection.toJSON()}))
    ul       = viewHTML.find('ul')

    # the above bypasses the need for a separate friend template.
    # _(@collection.models).each (friend) =>
    #   ul.append(@friendTemplate.render(friend.toJSON()))

