/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('overall_status', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    status_name: {
      type: "SET('TYPE1','TYPE2','TYPE3')",
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'overall_status'
  });
};
