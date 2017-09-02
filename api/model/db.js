var promise = require('bluebird');
var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')();
var connectionString = 'postgres://localhost:5432/psdf';
var db = pgp(connectionString);
db.connect()
    .then(obj => {
        console.log('connecting to database psdf successfully!');
    })
    .catch(error => {
        console.log('ERROR:', error.message || error);
    });
module.exports = db;
