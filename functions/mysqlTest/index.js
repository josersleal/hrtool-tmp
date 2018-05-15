// TODO: implement agaisnt local db
// TODO: envs and aws
'use strict';
var mysql = require('mysql');
var config = require('./db-config.json');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'app',
  password: 'app',
  database: 'test-employees'
});

module.exports.handler = (event, context, callback) => {

  context.callbackWaitsForEmptyEventLoop = false;
  pool.getConnection(function (err, connection) {
    // connected
    console.log('connection: ' + connection);
    // console.log('error: ' + error);
    // use the connection
    // connection.query('SELECT emp_name FROM employee where emp_id=1', function (error, results, fields) {
    connection.query('SELECT emp_name FROM employee WHERE emp_id=2;', function (
      error,
      results,
      fields
    ) {
      // done with conneciton
      connection.release();
      // handle error
      if (error) {
        callback(error);
      } else {
        console.log(results);
        callback(null, results);
      }
    });
  });

  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Go Serverless v1.0! Your function executed successfully!',
  //     input: event,
  //   }),
  // };

  // callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
