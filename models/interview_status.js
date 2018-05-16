/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interview_status', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    interview_status: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'interview_status'
  });
};
