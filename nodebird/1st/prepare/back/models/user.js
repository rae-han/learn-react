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

  User.associate = (db) => {};

  return User;
}