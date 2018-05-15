'use strict';
import config from './db-config.json';
import Sequelize from 'sequelize';

const sequelize = new Sequelize('test-employees', 'app', 'app', {
    host: 'localhost',
    port: 3306,
    logging: true, // Disable the logging. It is consuming the time on lambda function.
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 20000,
        idle: 10000
    }
});

// create model
const Employee = sequelize.define(
    'employee',
    {
        name: {
            type: Sequelize.STRING,
            field: 'emp_name'
        }
    },
    {
        freezeTableName: true
    }
);

export async function handler(event, context, callback) {
    context.callbackAwaitsForEmptyEventLoop = false;
    try {
        const result = await Employee.findAll({
            where:{id:2}
        });
        console.log(result);
        callback(null, result);
    } catch (error) {
        console.log(error);
        callback(null, error);
    }
}

/*
export async function handler(event, context, callback) {
    context.callbackAwaitsForEmptyEventLoop = false;
    try {
        const result = await sequelize.authenticate();
        console.log(result);
        callback(null, result);
    } catch (error) {
        console.log(error);
        callback(null, error);
    }
} */
/* 
import { createPool } from "mysql2";

var pool = createPool({
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
 */
