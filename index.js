const express = require("express");
const path = require("path");
const port = 8000;
const app = express();

// use MongoDB config
const db = require("./config/mongoose");
const Todo = require("./models/todo");

//set up  and use Ejs as a view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static("assets"));


app.get("/", function (req, res) {
 
  Todo.find({}, function (err, todoList) {
    if (err) {
      console.log("Error in fetching todo lists from db");
      return res.redirect("back");
    }

  return res.render("home", {
    title: "TODO App",
    todo_lists: todoList,
  });
});
});

app.post("/create-todo", function (req, res) {
  Todo.create(
    {
      description: req.body.description,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, newTodo) {
      if (err) {
        console.log("error in creating a todo list!!");
        return;
      }
      console.log("created todo", newTodo);
      return res.redirect("back");
    }
  );
});

app.get("/delete-todo/", function (req, res) {
  //get the id from query in the url
  let id = req.query.id;

  //find the contact in the databse using id and delete
  Todo.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("error in deleting an object from databse");
      return;
    }
    return res.redirect("back");
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log(`error in the running the server: ${err} `);
  }

  console.log(`awesome!! My server is running in port ${port}`);
});
