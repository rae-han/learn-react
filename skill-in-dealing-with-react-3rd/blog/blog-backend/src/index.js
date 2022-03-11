const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const api = require('./api')

router.get('/', ctx => {
  ctx.body = '홈';
});

router.get('/about', ctx => {
  ctx.body = '소개';
});

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});