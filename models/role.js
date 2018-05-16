/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    role: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'role'
  });
};
