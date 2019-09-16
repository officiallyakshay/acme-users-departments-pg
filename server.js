const express = require('express');
const path = require('path');
const db = require('./db');
const app = express();

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/users', (req, res, next) => {

});

app.post('/api/users', (req, res, next) => {
  
});

app.get('/api/departments', (req, res, next) => {
  
});

app.post('/api/departments', (req, res, next) => {

});

db.sync()
   .then(() => app.listen(3000, () => console.log('listening on port 3000')));
