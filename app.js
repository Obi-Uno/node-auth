const express = require('express');
const mongoose = require('mongoose');
const authRoutes= require('./routes/authRoutes');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb://0.0.0.0:27017/Node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) =>{ 
   console.log("db connected");
    app.listen(3000);
    
  })
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);