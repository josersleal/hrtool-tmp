/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interview_status', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    interview_status: {
      type: "SET('TYPE1','TYPE2','TYPE3')",
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'interview_status'
  });
};
