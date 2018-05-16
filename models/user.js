/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
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
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_valid: {
      type: DataTypes.INTEGER(4),
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
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
