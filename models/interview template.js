/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interview template', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    interview_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    file_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'interview template'
  });
};
