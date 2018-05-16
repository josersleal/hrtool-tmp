/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interview', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    interviewer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    interview_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    feedback_link: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    Candidate_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'candidate',
        key: 'id'
      }
    },
    Interview_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'interview_type',
        key: 'id'
      }
    },
    interview_status_id1: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'interview_status',
        key: 'id'
      }
    }
  }, {
    tableName: 'interview'
  });
};
