const express = require('express')
const app = express();
const port = 3000;

app.use(express.json());

require('./database'); // Database Connection
const TasksRoute = require('./routes/task.route')

app.use('/', TasksRoute)

app.get('/', (req, res) => {
  res.send('Eight Lab - Task Manager (Gestor de Tareas)')
});

app.listen(port, () => {
  console.log(`Listening on port ~> ${port}`)
});

