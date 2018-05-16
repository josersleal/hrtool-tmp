/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    job_title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    recruiter_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hiring_manager_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    job_ad: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'job'
  });
};
