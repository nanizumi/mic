Posts = new Meteor.Collection('posts');

Posts.allow({
  insert: function (userId, doc) {
    //only allow if logged in
    return !! userId;
  }
});