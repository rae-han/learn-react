module.exports = (sequelize, DataTypes) => {
  const User = sequelize.difine('User', { // 이렇게 하면 mysql에서는 소문자 + 복수로 저장된다 User => users
    // id 값은 기본적으로 들어간다.
    email: {
      type: DataTypes.STRING(30),
      allowNull: false, // 필수
      unique: true // 고유한 값
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, { // user model 에 대한 setting
    charset: 'utf8', // 원래 mysql에서는 한글 넣으면 에러난다.
    collate: 'utf8_general_ci', // 한글 저장
  });

  User.associate = (db) => {
    db.User.hasMany(db.Post); // 사람이 포스트를 여러개 가지고 있다.
    // 이거 다음에 Post에 db.Post.belongsTo(db.User);유
    db.User.hasMany(db.Comment);
    // Comment 파일에 적은대로 hasMany보다 belongsTo가 더 중요한 이유는 여기에 만약 id값이 들어오면 여러개의 정보가 들어오는데
    // sql할때 엑셀 구조 짤때 원칙이 한칸에는 하나의 정보만.
    // 다대다는 포스트에
    // 일대일은 hasOne
  };

  return User;
}