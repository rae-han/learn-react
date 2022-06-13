const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');

const { User, Post } = require('../models'); // db.User에 접근
const { isLoggedIn, isNotLoggedIn } = require('./middlewares')

router.post('/', isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: { // where가 조건
        email: req.body.email,
      }
    });

    if(exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
      // return 을 안붙이면 위 아래 다 보내가 되고
      // 헤더는 한번 밖에 보낼수 없다는 can't set headers already sent 에러가 뜬다.
      // status로 헤더를 보낼 수 있따.
      // 요청 / 응답 은
      // 헤더 (상태, 용량, 시간, 쿠키)와
      // 바디(데이터)로 구성돼 있다.
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10); // salt로 보통 10~13을 넣는다. 해쉬화. 1초정도 걸리는 걸로 맞춘다고 한다.
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword
    });

    res.status(200).json('ok');
  } catch (e) {
    console.error(e);
    next(e); // 여기서 에러 나면 500 뜬다.
  }
});

// router.post('/login', (req, res, next) => {})
// router.post('/login', passport.authenticate('local', (err, user, info) => { // 차례대로 서버에러, 성곡객체, 인포
//   if(err) { // 첫 번째는 서버 에러
//     console.error(err);
//     // next(err); // 여기는 next, res 가 없다.
//   }
// })); // ㅇㅣ렇게 하면 로컬 전략이 실행된다.
router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => { // 차례대로 서버에러, 성곡객체, 클라이언트 에러
    if(err) { // 첫 번째는 서버 에러
      console.error(err);
    }
    if(info) {
      console.error(info)
      return res.status(401).send(info.reason);
    }

    return req.login(user, async (loginErr) => { // 이게 진짜 로그인, passport에서 로그인 할수 있게 허락해준 것, 우리 서비스 로그인 다 끝나고 패스포트 한번 더
      if(loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }

      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        // attributes: [], // attributes 프로퍼티를 통해 받을 것을 정해줄수 있다.
        attributes: { // exclude라는 특별한 키워드를 통해 뺄 것을 정해줄 수 있다.
          exclude: ['password'],
        },
        include: [{
          // associate에 적힌 그대로 적으면 된다.
          model: Post, //  hasMany라 model: Post가 복수형이 되어 me.Posts가 된다.
        }, { // as가 있는 것들은 as에 담겨있는 값을 적으면 된다.
          model: User,
          as: 'Followings',
        }, {
          model: User,
          as: 'Followers',
        }]
      })

      // 내부적으로 res.setHeader('Cookie', 'asdfg') 이런거 보내준다.
      return res.status(200).json(fullUserWithoutPassword);
    })
  })(req, res, next); // 이렇게 하면 미들웨어가 확장된다.
});

router.post('/logout', isLoggedIn, (req, res, next) => {
  console.log('/user/logout')
  req.logout();
  req.session.destroy();
  res.status(200).send('ok');
})

module.exports = router;