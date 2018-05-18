'use strict';
let db = require('./../../db/db').default;
let Users = require('./../../models/user')(db.sequelize, db.Sequelize);
let Roles = require('./../../models/role')(db.sequelize, db.Sequelize);
let UsersRoles = require('./../../models/user_has_role')(
  db.sequelize,
  db.Sequelize
);

Users.belongsToMany(Roles, { through: UsersRoles });
Roles.belongsToMany(Users, { through: UsersRoles });

export async function handler(event, context, callback) {
  context.callbackAwaitsForEmptyEventLoop = false;
  try {

    const result = '';//await Users.create({email:, first_name, last_name, access_start, access_end, phone_number, attachment_link, Overall_status_id, account_valid
    // });
    /* const result = await db.sequelize.query(
        "SELECT * FROM hrrt.user u JOIN hrrt.user_has_role uhr ON u.id = uhr.User_id JOIN hrrt.role r  ON r.id = uhr.Role_id	where r.role = 'Candidate'",
        { type: db.sequelize.QueryTypes.SELECT }
    ); */
    console.log(result);
    callback(null, result);
  } catch (error) {
    console.log(error);
    callback(null, error);
  }
}
