const express = require('express');

const { Post, Comment, Image, User } = require('../models');
const { isLoggedIn } = require('./middlewares')

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.user.id, // 로그인 했기 때문에 정보가 들어가 있다. // deserializerUser
    })

    const fullPost = await Post.findOne({
      where: { id: post.id },
      include: [{
        model: Image,
      }, {
        model: Comment
      }, {
        model: User,
        attributes: ['id', 'nickname']
      }, {
        model: User,
        as: 'Likers',
        attributes: ['id'],
      }]
    })

    return res.status(201).json(fullPost)
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:postId', isLoggedIn, async (req, res, next) => {
  try {
    await Post.destroy({
      where: { id: req.params.postId },
      UserId: req.user.id,
    });

    res.json({ PostId: parseInt(req.params.postId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => {
  // 주소에서 동적으로 바뀌는건 파라미터이다.
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId }
    })

    if(!post) {
      return res.status(403).send('존재하지 않는 게시글입니다.')
    }

    const comment = await Comment.create({
      content: req.body.content,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    })

    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [{
        model: User,
        attributes: ['id', 'nickname']
      }]
    })

    return res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/:postId/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId }})
    if(!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }

    await post.addLikers(req.user.id); // models/post #2 참조

    res.status(200).json({ PostId: post.id, UserId: req.user.id })
  } catch (error) {
    console.error(error)
    next(error)
  }
});

router.delete('/:postId/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({ where: { id: req.params.postId }})
    if(!post) {
      return res.status(403).send('게시글이 존재하지 않습니다.')
    }

    await post.removeLikers(req.user.id); // models/post #2 참조

    res.status(200).json({ PostId: post.id, UserId: req.user.id })
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router;