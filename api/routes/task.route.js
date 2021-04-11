const express = require('express');

const router = express.Router();

// Models
const Task = require('../models/task.js');

// [POST] New Task
router.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  task.save().then(() => res.status(201).send())
    .catch((e) => res.status(500).send({ err: e.message }));
});

// [GET] All Tasks
router.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
});

// [GET] Task by _id
router.get('/tasks/:id', async (req, res) => {
  await Task.find({ id: req.params.id })
    .then(task => res.status(200).send(task))
    .catch((e) => res.status(404).send({ err: e.message }));
});

// [DELETE] Task
router.delete('/tasks/:id', async (req, res) => {
  await Task.deleteOne({ _id: req.params.id })
    .then(() => res.send())
    .catch((e) => res.status(404).send(e.message));
});

// [PUT] Task
router.put('/tasks/:id', async (req, res) => {
  await Task.updateOne({ _id: req.params.id }, req.body)
    .then(() => res.send())
    .catch((e) => res.status(404).send(e.message));
});

module.exports = router;
