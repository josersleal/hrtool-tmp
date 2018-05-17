/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    role: {
      type: "SET('CANDIDATE','RECRUITER','HIRING MANAGER')",
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'role'
  });
};
