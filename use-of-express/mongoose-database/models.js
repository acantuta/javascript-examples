var mongo = require('./mongo-connection');

var PostSchema = {
    title: String,
    content: String
};

var Post = mongo.model('Post', PostSchema);
// it's a comment.
module.exports = {
    Post: Post
};