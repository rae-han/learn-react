// const Router = require('koa-router');
// const postsCtrl = require('./posts.ctrl')
import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
// posts.get('/:id', postsCtrl.checkObjectId, postsCtrl.read);
// posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove);
// posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update);

const post = new Router();
posts.get('/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.patch('/:id', postsCtrl.update);
posts.use('/:id', postsCtrl.checkObjectId, post.routes());

// module.exports = posts;
export default posts;