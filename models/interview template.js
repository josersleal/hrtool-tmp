/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interview template', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    file_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Interview_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'interview_type',
        key: 'id'
      }
    }
  }, {
    tableName: 'interview template'
  });
};
