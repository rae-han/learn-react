module.exports = (sequelize, DataTypes) => {
  const User = sequelize.difine('User', { // 이렇게 하면 mysql에서는 소문자 + 복수로 저장된다 User => users
    // id 값은 기본적으로 들어간다.
    email: {},
    nickname: {},
    password: {},
  }, { // user model 에 대한 setting
    charset: 'utf8', // 원래 mysql에서는 한글 넣으면 에러난다.
    collate: 'utf8_general_ci', // 한글 저장
  });

  User.associate = (db) => {};

  return User;
}