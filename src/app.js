const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const config = require('@feathersjs/configuration');
const cors = require('cors');

const Messages = require('./controllers/MessageController');
const database = require('./database');

const app = express(feathers());

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));
app.use(cors);
app.configure(express.rest());
app.configure(config());
app.configure(database);
app.use(express.errorHandler());
// ---- Routes ----
app.use('messages', new Messages());

// app.service('/messages').create({
//   text: 'Hello from the server',
// });


module.exports = app;
