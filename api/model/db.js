var promise = require('bluebird');
var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')();
var connectionString = '' // connection string here;
var db = pgp(connectionString);

module.exports = db;