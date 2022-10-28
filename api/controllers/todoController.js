/* 
IFT 598 - Middleware Programming - Vibhor Mendhe
*/
'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.getAlltask = function(req, res){
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.createTask = function(req, res){
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
    if (err)
        res.send(err);
    res.json(task);
    });
};

exports.getTask = function(req, res){
    Task.findById(req.params.taskId, function(err, task) {
    if (err)
        res.send(err);
    res.json(task);
    });
};

exports.updateTask = function(req, res) {
    Task.findOneAndUpdate({_id:req.params.taskId}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.deleteTask = function(req, res) {
    Task.remove({_id: req.params.taskId}, function(err, task) {
            if (err)
                res.send(err);
            res.json({message: 'Task successfully deleted'});
        });
};