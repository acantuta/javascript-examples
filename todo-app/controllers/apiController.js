var bodyParser = require("body-parser");
var models = require("../models");

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/users/:username/todos', function(req, res) {
        models.Todo.find({username: req.params.username}, function(err, items) {
            if (err) throw err;

            res.json({data: items});
        });
    });

    app.get('/api/todos/:id', function(req, res) {
        models.Todo.findById(req.params.id, function(err, item) {
            if (err) throw err;

            res.json({data: item});
        });
    });

    app.get('/api/todos', function(req, res) {
        models.Todo.find(function(err, items) {
            if (err) throw err;

            res.json({data: items});
        })
    });

    app.put('/api/todos/:id', function(req, res) {

        models.Todo.findById(req.params.id, function(err, item) {
            if (err) throw err;

            if('username' in req.body) item.username = req.body.username;
            if('todo' in req.body) item.todo = req.body.todo;
            if('isDone' in req.body) item.isDone = req.body.isDone;
            if('hasAttachment' in req.body) item.hasAttachment = req.body.hasAttachment;
            
            console.log(req.body);
            item.save(function(err) {
                if (err) throw err;

                res.json({message: 'Item updated successfully'});
            });
        });
    });

    app.delete('/api/todos/:id', function(req, res) {
        models.Todo.findByIdAndRemove(req.params.id, function(err) {
            if (err) throw err;

            res.json({message: 'Item deleted successfully'})
        })
    })

    app.delete('/api/todos/:id', function(req, res) {

    });
}