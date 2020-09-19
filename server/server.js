const express = require('express')
const app = express()
const port = 8800
const todo = require('./modules/todoModule');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });


app.use(express.static('public'));
  
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.post('/add', (req, res) => {
    todo.addTodoToDatabase(req,res);
  })

  app.post('/update', (req, res) => {
    todo.updateTodo(req,res);
  })

  app.get('/list', (req, res) => {
    todo.getAllTodos(req,res);
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})