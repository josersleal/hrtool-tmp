'use strict';
/* let db = require('./../../db/db').default;
let Users = require('./../../models/user')(db.sequelize, db.Sequelize);
let Roles = require('./../../models/role')(db.sequelize, db.Sequelize);
let UsersRoles = require('./../../models/user_has_role')(db.sequelize, db.Sequelize);

Users.belongsToMany(Roles, { through: UsersRoles });
Roles.belongsToMany(Users, { through: UsersRoles }); */
// import { mysql } from 'mysql2';
const mysql = require('mysql2');
console.log('--------------------------------------------------------------------');
console.log(mysql);
console.log('--------------------------------------------------------------------');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'app',
    password: 'app',
    database: 'hrrt'
});

export async function handler(event, context, callback) {
    context.callbackAwaitsForEmptyEventLoop = false;
    await pool.getConnection(function(err, connection) {
        // connected
        console.log('connection: ' + connection);

        connection.query(
            "SELECT * FROM hrrt.user u JOIN hrrt.user_has_role uhr ON u.id = uhr.User_id JOIN hrrt.role r  ON r.id = uhr.Role_id	where r.role = 'Candidate' limit 10",
            function(error, result, fields) {
                // done with conneciton
                connection.release();
                // handle error
                if (error) {
                    console.log(error);
                    callback(null, error);
                } else {
                    console.log(result);
                    callback(null, result);
                }
            }
        );
    });
}
