import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

UserSchema.methods.setPassword = async function(password) { // 비밀번호를 파라미터로 받아 계정의 hashedPassword 값을 설정
  console.log('#### setPassword')
  console.log(password);
  const hash = await bcrypt.hash(password, 10);
  console.log(hash)
  this.hashedPassword = hash;
}

UserSchema.methods.checkPassword = async function(password) { // 비밀번호가 해당 계정의 비밀번호와 일치하는지 검증
  console.log('#### checkPassword')
  const result = await bcrypt.compare(password, this.hashedPassword);
  return  result;
}

UserSchema.statics.findByUsername = function(username) {
  return this.findOne({ username });
}

UserSchema.methods.serialize = function() {
  console.log('#### serialize')
  console.log(this);
  const data = this.toJSON();
  console.log(data)
  delete data.hashedPassword;
  return data;
}

UserSchema.methods.generateToken = function() {
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
      // expiresIn: '3d',
    },
  );

  return token;
}

const User = mongoose.model('User', UserSchema);
export default User;