/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    first_name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    access_start: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    access_end: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING(20),
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
    account_valid: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
