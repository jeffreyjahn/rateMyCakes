const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'Jeffsrandomsecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const flash = require('express-flash');
app.use(flash());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rateMyCakes');
mongoose.Promise = global.Promise;


app.use(express.static( __dirname + '/public/dist/public'));

app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(9999, ()=>{
    console.log('Local host listening on port: 9999.')
});