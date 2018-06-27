var models = require('../models');

module.exports = function(app) {
    app.get('/setup-todo', function (req, res) {
        var items = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
        ];

        models.Todo.create(items, function(err, results) {
            res.send(results);
        });
    });
}