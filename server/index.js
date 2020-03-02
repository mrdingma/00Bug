const express = require('express');
const path = require('path');
const routeHandler = require('./routes');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('/favicon.ico', (req, res) => {
  res.status(204);
});
app.get('/robots.txt', (req, res) => {
  res.status(204);
});

app.use('/', routeHandler());

app.listen(PORT, () => console.log('Listening on port: ' + PORT));