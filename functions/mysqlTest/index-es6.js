// TODO: implement agaisnt local db
// TODO: envs and aws
'use strict';
var mysql = require('mysql2');
var config = require('./db-config.json');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'app',
    password: 'app',
    database: 'test-employees'
});

export async function handler(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;
    await pool.getConnection(function(err, connection) {
        // connected
        console.log('connection: ' + connection);
        // console.log('error: ' + error);
        // use the connection
        // connection.query('SELECT emp_name FROM employee where emp_id=1', function (error, results, fields) {
        connection.query(
            'SELECT emp_name FROM employee WHERE emp_id=2;',
            function(error, results, fields) {
                // done with conneciton
                connection.release();
                // handle error
                if (error) {
                    callback(error);
                } else {
                    console.log(results);
                    callback(null, results);
                }
            }
        );
    });
}
