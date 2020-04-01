const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


// IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});



// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true
    }, 
    () => console.log('connected to DB')
);



app.listen(3000);