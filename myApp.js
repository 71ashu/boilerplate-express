var express = require('express');
var app = express();

app.get('/', (req, res) => {
  const absolutePath = __dirname + '/public';
  app.use("/public", express.static(absolutePath));
  // res.sendFile(absolutePath);
});




































 module.exports = app;
