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

let Candidates = require('./../../models/candidate')(
    sequelize,
    Sequelize
);

// create model
/* 
const Candidates = sequelize.define('candidates', {
    JobNumber: {
        type: Sequelize.TINYINT
    },
    LastName: {
        type: Sequelize.STRING
    },
    FirstName: {
        type: Sequelize.STRING
    },
    Recruiter: {
        type: Sequelize.STRING
    },
    ProfessionalInterview: {
        type: Sequelize.STRING
    },
    PersonalInterview: {
        type: Sequelize.STRING
    },
    FinalInterview: {
        type: Sequelize.STRING
    },
    OverallStatus: {
        type: Sequelize.STRING
    },
    Phone: {
        type: Sequelize.STRING
    },
    Email: {
        type: Sequelize.STRING
    },
    Attachment: {
        type: Sequelize.TINYINT
    }
}); */

export async function handler(event, context, callback) {
    context.callbackAwaitsForEmptyEventLoop = false;
    try {
        const result = await Candidates.findAll({
            limit: 10 
        });
        console.log(result);
        callback(null, result);
    } catch (error) {
        console.log(error);
        callback(null, error);
    }
}
