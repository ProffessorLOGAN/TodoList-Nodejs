var todoList = [
  {
    description: "I Love India",
    category: "personal",
    date: "12 june 2000",
  },
  {
    description: "I Love India",
    category: "personal",
    date: "12 june 2000",
  },
  {
    description: "I Love India",
    category: "personal",
    date: "12 june 2000",
  },
];

module.exports.home = function (req, res) {
  return res.render("home", {
    title: "TODO App",
    todo_lists: todoList,
  });
};

//module.exports.actionName = function(req,res){}
