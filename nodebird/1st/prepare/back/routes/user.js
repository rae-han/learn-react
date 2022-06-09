const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const { User } = require('../models'); // db.User에 접근

router.post('/', async (req, res, next) => {
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


module.exports = router;