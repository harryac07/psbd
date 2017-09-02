require('dotenv').load();
const express    = require('express');       
const app        = express();             
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const cookieParser = require('cookie-parser');
var routesApi = require('./api/routes/index'); // api routes to be built

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api',routesApi); // all of our routes will be prefixed with /api

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(passport.initialize());

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status( err.code || 500 )
    .json({
      status: 'error',
      message: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  .json({
    status: 'error',
    message: err.message
  });
});
app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

const port = process.env.PORT || 3001; // set our port

app.listen(port,()=>{
	console.log(`express app is running in port ${port}`);
});