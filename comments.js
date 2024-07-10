// Create web server
// 1. Create a web server
// 2. Create an array of comments
// 3. Create a route that returns all comments
// 4. Create a route that returns a single comment
// 5. Create a route that adds a new comment
// 6. Create a route that updates a comment
// 7. Create a route that deletes a comment
// 8. Create a route that returns a comment by its author
// 9. Create a route that returns a comment by its date

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comment.id = comments.length + 1;
  comments.push(comment);
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  if (comment) {
    Object.assign(comment, req.body);
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = comments.findIndex(comment => comment.id === id);
  if (index !== -1) {
    comments.splice(index, 1);
    res.send('Comment deleted');
  } else {
    res.status(404).send('Comment not found');
  }
});

app.get('/comments/author/:author', (req, res) => {
  const author = req.params.author;
  const comment = comments.find(comment => comment.author === author);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.get('/comments/date/:date', (req, res) =>