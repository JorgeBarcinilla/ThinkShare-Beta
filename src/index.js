const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();


// Setting
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/post', require('./routes/post.routes'));
app.use('/api/user', require('./routes/user.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(app.get('port'), () => {
    console.log('Server on http://localhost:'+app.get('port'));
});