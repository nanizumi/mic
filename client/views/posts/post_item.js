Template.postItem.helpers ({
  ownPost: function () {
    if (!Meteor.userId ())
      return false;

    return this.userId == Meteor.userId ();
  },
  domain: function () {
    var a = document.createElement ('a');
    a.href = this.url;
    return a.hostname;
  }
});