(function() {

  iou.Views.friendsView = Backbone.View.extend({
    el: "#friendsCollection",
    template: new EJS({
      url: 'scripts/templates/friends.ejs'
    }),
    initialize: function() {
      this.collection = new iou.Collections.FriendsCollection();
      this.collection.on("reset", this.render, this);
      return this.collection.reset([
        {
          name: "katie",
          friend_id: "3",
          balance: "40"
        }, {
          name: "dan",
          friend_id: "4",
          balance: "50"
        }
      ]);
    },
    render: function() {
      var ul, viewHTML;
      viewHTML = this.$el.html(this.template.render({
        friends: this.collection.toJSON()
      }));
      return ul = viewHTML.find('ul');
    }
  });

}).call(this);
