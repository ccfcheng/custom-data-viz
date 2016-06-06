const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
// Use bodyParser, this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'/dist')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, function() {
});
