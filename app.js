var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var passport = require('./strategies/user');
var session = require('express-session');

// Route includes
//var index = require('./routes/index');
var user = require('./routes/user');
var edit = require('./routes/edit');
var place = require('./routes/place');
var quote = require('./routes/quote');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Passport Session Configuration //
app.use(session({
    secret: 'secret',
    key: 'user',
    resave: 'true',
    saveUninitialized: false,
    cookie: {maxage: 60000, secure: false}
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/user', user);
app.use('/edit', edit);
app.use('/place', place);
app.use('/quote', quote);

// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/views'));
app.use(express.static('public/assets'));
app.use(express.static('public/assets/scripts'));
app.use(express.static('public/assets/styles'));
app.use(express.static('public/vendors'));

// Mongo Connection //
var mongoURI = "mongodb://localhost:27017/moon_child";

var mongoDB = mongoose.connect(mongoURI).connection;

mongoDB.on('error', function(err){
    if(err) console.log("MONGO ERROR: ", err);
});

mongoDB.once('open', function(){
    console.log("Connected to Mongo");
});

// App Set //
app.set('port', (process.env.PORT || 3000));

// Listen //
app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});