/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interview_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    interview_type: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    tableName: 'interview_type'
  });
};