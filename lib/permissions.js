/**
 * Created by vagrant on 6/18/14.
 */

// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}