var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var todo = mongoose.model('Todos', todoSchema);

module.exports = todo;