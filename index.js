const express = require("express");
const path = require("path");
const port = 8000;
const app = express();

//use express routes
app.use('/', require('./routes/route'));

//set up  and use Ejs as a view engine
app.set('view engine','ejs')
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded());
app.use(express.static("assets"));





app.get("/", function (req, res) {
 res.send('<h1>Hello this is express server</h1>');
});

app.listen(port, function (err) {
  if (err) {
    console.log(`error in the running the server: ${err} `);
  }

  console.log(`awesome!! My server is running in port ${port}`);
});
