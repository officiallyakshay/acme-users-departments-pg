const express = require('express');
const path = require('path');
const db = require('./db');
const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/users', async (req, res, next) => {
  try {
    res.send(await db.findAllUsers());
  }
  catch(ex) {
    next(ex);
  }
});

app.get('/api/departments', async (req, res, next) => {
  try {
    res.send(await db.findAllDepartments());
  }
  catch(ex) {
    next(ex);
  }
});

db.sync()
   .then(() => app.listen(3000, () => console.log('listening on port 3000')));
