const Todo = require("../model");

const create = (req, res, next) => {
  try {
    const { name } = req.body;
    const data = new Todo({
      name: name,
    });
    data.save();
    res.json({
      message: "todo create successful",
    });
  } catch (error) {
    next(error);
  }
};

const getTodo = async (req, res, next) => {
  try {
    const data = await Todo.find({});
    res.json({
      message: "all data get successful",
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Todo.findByIdAndDelete({ _id: id });
    res.json({
      message: "delete successful",
      data: data,
    });
    
  } catch (error) {
    next(error);
  }
};

const isComplete = async (req, res, next) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    console.log(todo);
    if (!todo) {
      return res.json({
        message: "todo is not found",
      });
    }
    todo.isComplete = !todo.isComplete;
    const updateTodo = todo.save();
    res.json({
      message: "update successful",
      data: updateTodo,
    });
  } catch (error) {
    next(error);
  }
};

const nameUpdate = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { name } = req.body; // Destructure the name from the request body
    const todo = await Todo.findById({ _id: id });
    console.log(todo.name);
    todo.name = name ?? todo.name;
    todo.save();
    res.json({
      data: todo,
    });
  } catch (error) {
    next(error);
  }
};

const updateRank = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { rank } = req.body;
    const todo = await Todo.findById({ _id: id });
    if (!todo) {
      return res.json({
        message: "todo is not found",
      });
    }
    todo.rank = rank ?? todo.rank;
    await todo.save();
    res.json({
      message: "update successful",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getTodo,
  deleteTodo,
  isComplete,
  nameUpdate,
  updateRank,
};
