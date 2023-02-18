var express = require('express');
var app = express();

app.route('/name').get((req, res) => {
  const { first, last } = req.query;
  res.json({ name: `${first} ${last}` });
})





























module.exports = app;
