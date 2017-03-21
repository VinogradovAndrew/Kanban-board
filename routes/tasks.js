const express = require('express');
const router = express.Router();
const Task = require('../db/task');
router.get('/', function (req, res, next) {
    Task.find({}).then(
        (tasks) => res.send({data: {tasks}}),
        (err) => res.send({message: "error"}))
});

router.post('/', function (req, res, next) {
    let task = new Task(req.body);

    task.save().then(
        (task) => {res.send({task: task.toObject()})},
        (err) => {res.send({message: 'error'})
    })
});

router.put('/:id', function (req, res, next) {
    const id = req.params.id;
    const {prop,val} = req.body.task;
    Task.findOneAndUpdate({id}, {[prop]:val}, {new:true}).then(
        (doc) => res.send(doc.toObject()),
        (err) => res.send({message: "error"}))
});

router.delete('/:id', function (req, res, next) {
    const id = req.params.id;
    Task.remove({id}).then(
        () => res.send({data: {id: id}}),
        (err) => res.send({message: "error"}))
});

module.exports = router;
