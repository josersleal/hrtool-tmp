/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('overall_status', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    status_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'overall_status'
  });
};
