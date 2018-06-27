var mongoose = require('mongoose');
var mongoConfig = require('../config/mongo');
mongoose.connect(mongoConfig.getDbConnectionString());
var todoModel = require('./todoModel');

module.exports = {
    Todo: todoModel
};