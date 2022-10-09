const mongoose = require("mongoose");

//connect to the database

mongoose.connect("mongodb://localhost/todo_list_db");

//acquire the connection (to check if it is successful)

const db = mongoose.connection;

// Error

db.on("error", console.error.bind(console, "error connecting to database"));

//when connection is successful then print the message

db.once("open", function () {
  console.log("successfully connected to the database");
});
