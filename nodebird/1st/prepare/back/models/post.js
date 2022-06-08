module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci', // 이모티콘 저장
  });

  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    // 해시태그가 골치 아픈게 하나의 해시태그에 게시글이 여러개 있을수도
    // 게시글에 해시태그가 여러개 있을수도 있다.
    db.Hashtag.belongsToMany(db.Post);
  };
  return Post;
}