require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
// const contactsRouter = require('./controllers/contacts');
// const { userExtractor } = require('./middleware/auth');
const logoutRouter = require('./controllers/logout');
const { MONGO_URI } = require('./config');
const refreshRouter = require('./controllers/refresh');
const { userExtractor } = require('./middleware/auth');
const routinesRouter = require('./controllers/routines');
const expressStaticGzip = require('express-static-gzip');



(async() => {
    try {
       await mongoose.connect(MONGO_URI);
       console.log('Conectado a mongodb');
    } catch (error) {
        console.log(error);
    }
})();

app.use(cors());
app.use(cookieParser());
app.use(express.json());



// Rutas de backend

app.use('/api/users', usersRouter);
app.use('/api/refresh', userExtractor, refreshRouter);
app.use('/api/login', loginRouter);
app.use('/api/routines', routinesRouter);
app.use('/api/logout', logoutRouter);
// app.use('/api/contacts', userExtractor, contactsRouter);

app.use(expressStaticGzip(path.join(__dirname, 'dist')));

app.get('/*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

module.exports = app;




