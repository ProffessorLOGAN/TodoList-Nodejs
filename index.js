const express = require("express");
const port = 8000;
const app = express();

//use express routes
app.use('/', require('./routes/route'));





app.get("/", function (req, res) {
 res.send('<h1>Hello this is express server</h1>');
});

app.listen(port, function (err) {
  if (err) {
    console.log(`error in the running the server: ${err} `);
  }

  console.log(`awesome!! My server is running in port ${port}`);
});
