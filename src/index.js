const express = require('express');
const hello = require('./hello');
const listener = require('./listener');

const port = 3000;
const app = express();

app.get('/', hello);
app.listen(3000, listener(console.log, port));
