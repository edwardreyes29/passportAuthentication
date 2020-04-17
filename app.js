const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();
// DB config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true }) // returns a promise
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// // EJS
app.use(expressLayouts);
app.set('view engine', 'ejs'); // set view engine to ejs

// Bodyparser
app.use(express.urlencoded({ extended: false}));

// Routes
app.use('/', require('./routes/index')); // index.js
app.use('/users', require('./routes/users')); // users.js

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));