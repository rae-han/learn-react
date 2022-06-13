const express = require('express');

const { Post, User } = require('../models')

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      limit: 10, // 최대 10개씩 들고 와라.
      // offset: 0,  // 0번 부터 게시글을 가져와라.
      // limit offset은 실무에서 잘 안쓴다.
      // 최신 글 부터 보여줄 때, 중간에 사람이 게시글을 하나 더 쓰며ㅑㄴ 하나씩 뒤로 밀려서 중간 걸 또 불려와 겹칠수도 있다.
      // 또는 누군가 지우면 안들고 오는 게시글이 있을 수 있다.
      // 그래서 offset, lastId를 쓴다. lastId는 개발자가 구현한 것
      // where: { id: lastId },
      order: [['createAt', 'DESC']],
      include: [{
        model: User,
      }]
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;