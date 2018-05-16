/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('candidate', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: true,
      unique: true
    },
    status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attachment_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Overall_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'overall_status',
        key: 'id'
      }
    },
    Job_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'job',
        key: 'id'
      }
    }
  }, {
    tableName: 'candidate'
  });
};
