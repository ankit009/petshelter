var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Task = require('./api/models/petShelterModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
connectURL = process.env.MONGOLAB_URI || process.env.MONGODB_URI || 'mongodb://localhost/petsinfo';
//mongoose.connect('mongodb://localhost/petsinfo'); 
mongoose.connect(connectURL); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/petShelterRoutes');
routes(app);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(port);

console.log('RESTful API server started on: ' + port);