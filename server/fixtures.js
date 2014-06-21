if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  //create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman'}
  });
  var tom = Meteor.users.findOne(tomId);

  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif'}
  });
  var sacha = Meteor.users.findOne(sachaId);

//  var testId = Meteor.users.insert({
//    profile: { name: 'test'}
//  });
  Accounts.createUser({
    'username'  : 'John Doe',
    'email'     : 'john@doe.com',
    'password'  : 'abc123' //encrypted automatically
  });

  Accounts.createUser({
    'username'  : 'test',
    'email'     : 'test@home.com',
    'password'  : '123123' //encrypted automatically
  });

  Accounts.createUser({
    'username'  : 'test2',
    'email'     : 'test2@home.com',
    'password'  : '123123' //encrypted automatically
  });

  //Accounts.setPassword(testId, '123123');

  //var test_usr = Meteor.users.findOne(testId);


  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    id: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: "Interesting project Sacha..."
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: "You sure can"
  });

  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://meteor.com',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0
  });
  
  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0
  });

  for (var i = 0; i < 100; i++) {
    Posts.insert({
      title: 'Test post ' + i,
      id: sacha._id,
      author: sacha.profile.name,
      url: 'http://google.com/?q=test-' + i,
      submitted: now - i * 3600 * 1000,
      commentsCount: 0
    });
  }
}