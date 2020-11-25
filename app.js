require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser'); // to parse the jsonified data via the http stream
const mongoose = require('mongoose');
const quizRoutes = require('./routes/quiz');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json()); // Every http string that comes in will be jsonified
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization');
    next();
});

app.use('/', quizRoutes); // Quiz homepage

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

mongoose
  .connect(
    process.env.MONGO_URI, {useNewUrlParser: true,  useUnifiedTopology: true }
  )
  .then(result => {
    app.listen(PORT);
  })
  .catch(err => console.log(err));