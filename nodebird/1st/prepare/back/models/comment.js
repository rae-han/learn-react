module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {},
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 저장
  });

  Comment.associate = (db) => {};
  return Comment;
}