const express = require('express');
const cors = require('cors')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');


const app = express();

const userRouter = require('./routes/user');
const postRouter = require('./routes/post')

const db = require('./models');
const passportConfig = require('./passport')

db.sequelize.sync()
    .then(() => {
      console.log('db 연결 성공')
    })
    .catch(console.error)
passportConfig();
dotenv.config();

// use는 express서버에 뭔가를 장착한다는 뜻.
app.use(express.json()); // 이건 프론트에서 json형식으로 데이터를 보냈을때 req.body에 넣겠다.
app.use(express.urlencoded({ extended: true })); // 폼서브밋으로 데이터를 보내면 urlencoded로 오는데 이걸 처리해서 req.body안에 넣어준다.
app.use(cors({
  // origin: '*',
  origin: true, // 위는 모든 주소, 이건 보낸 곳의 주소가 자동으로 들어간다.
  credentials: false,
  secret: process.env.COOKIE_SECRET, // 서버에서 특정 정보에 해당하는 id를 암호화된 문자열로 바꿔서 클라이언트에 보내준다고 했는데 그때 암호화할 때 사용된다. 그래서 잘 숨겨야한다.
}))

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  saveUninitialized: false,
  resave: false,
}));
app.use(passport.initialize())
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/api', (req, res) => {
  res.send('hello api');
});

app.use('/user', userRouter);
// app.use(postRouter); // post를 프리픽스 해주고 싶다면
app.use('/post', postRouter);

app.listen(3080, () => {
  console.log('running server');
})