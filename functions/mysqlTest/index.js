'use strict';
import config from './db-config.json';
import Sequelize from 'sequelize';

const sequelize = new Sequelize('hrrt', 'app', 'app', {
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

let Users = require('./../../models/user')(
    sequelize,
    Sequelize
);



export async function handler(event, context, callback) {
    context.callbackAwaitsForEmptyEventLoop = false;
    try {
        const result = await Users.findAll({
            limit: 10 
        });
        console.log(result);
        callback(null, result);
    } catch (error) {
        console.log(error);
        callback(null, error);
    }
}
