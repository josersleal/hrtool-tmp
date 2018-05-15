// TODO: make db config work
// TODO: make envs work?

var mysql = require('mysql');
var config = require('./db-config.json');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'app',
    password: 'app',
    database: 'test-employees'
});
/* 
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'app',
    password: 'app',
    database: 'managerie'
});
conn.connect();
conn.query('SELECT * FROM pet', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

conn.end();
  */
try {
    pool.getConnection(function(err, connection) {
        // connected
        console.log('connection: ' + connection);
        // console.log('error: ' + error);
        // use the connection
        // connection.query('SELECT emp_name FROM employee where emp_id=1', function (error, results, fields) {
        connection.query('SELECT emp_name FROM employee WHERE emp_id=2;', function(
            error,
            results,
            fields
        ) {
            // done with conneciton
            connection.release();
            // handle error
            if (error) {
                throw error;
            } else {
                console.log(results);
            }
            process.exit();
        });
    });
} catch (error) {
    console.log('connection: ' + error);
}
