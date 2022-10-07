const express = require("express");
const port = 8000;
const app = express();

app.get("/", function (req, res) {
 res.send('<h1>Hello this is express server</h1>');
});

app.listen(port, function (err) {
  if (err) {
    console.log("error in the running the server ");
  }

  console.log(`awesome!! My server is running in port ${port}`);
});
