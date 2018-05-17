'use strict';
import config from './db-environments.json';
import Sequelize from 'sequelize';

// TODO: magic strings to own class
const environment = process.env.SOME_ENV_FROM_GODKNOWS || 'local';
const dbConfig = require('./db-environments.json')[environment];

let db = {};

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        port: dbConfig.port,
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
    }
);
export default {
    'Sequelize': Sequelize,
    'sequelize': sequelize
};