const router = require('express').Router();

const todos = ['buy milk'];

// GET /api/todos - get all the todos
router.get('/', (req, res) => {
  res.json(todos);
});
// GET /api/todos/:id - gets one todo
router.get('/:id', (req, res) => {
  res.json(todos[req.params.id]);
});

// POST /api/todos - creates a todo
router.post('/', (req, res) => {
  const { todo } = req.body;
  todos.push(todo);
  res.json(todos);
});
// PUT /api/todos/:id - update a todo
router.put('/:id', (req, res) => {
  todos[req.params.id] = req.body.todo;
  res.json(todos[req.params.id]);
  res.json(todos);
});

// DELETE /api/todos/:id - deletes a todo
router.delete('/:id', (req, res) => {
  todos.splice(req.params.id, 1);
  res.json(todos);
});

module.exports = router;
