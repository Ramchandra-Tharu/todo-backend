const express = require("express");
const Todo = require("../models/Todo");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create Todo
router.post("/", auth, async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    user: req.userId
  });
  await todo.save();
  res.json(todo);
});

// Get Todos
router.get("/", auth, async (req, res) => {
  const todos = await Todo.find({ user: req.userId });
  res.json(todos);
});
//Get todo by id 

    router.get("/:id", auth, async (req, res) =>{
    const todo= await Todo.findById(req.params.id);
        res.json({todo})
})

// Delete Todo
router.delete("/:id", auth, async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
