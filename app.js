const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// Middlewars
app.use(bodyParser.json());
app.use(cors()); /* https://www.youtube.com/watch?v=vjf774RKrLc&t=105s */



// Import Routes
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