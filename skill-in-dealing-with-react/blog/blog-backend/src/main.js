require('dotenv').config();

// const Koa = require('koa');
// const Router = require('koa-router')
// const bodyParser = require('koa-bodyparser');
// const mongoose = require('mongoose')
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

// need react static
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

// const api = require('./api')
import api from './api'
import jwtMiddleware from './lib/jwtMiddleware'
// import createFakeData from './createFakeData'


const { PORT, MONGO_URI } = process.env;

const mongooseConfigs = {
  useNewUrlParser: true,
  useFindAndModify: false
}
mongoose
  .connect(MONGO_URI, mongooseConfigs)
  .then(() => {
    console.log(`Connected to MongoDB`)
    // createFakeData();
  })
  .catch(e => {
    console.error(e);
  })

const app = new Koa();
const router = new Router();

// app.use((ctx, next) => {
//   ctx.body = 'app use';
//   next();
// })

router.use('/api', api.routes());

// router.get('/', ctx => {
//   ctx.body = 'index'
// })

// router.get('/about/:name?', ctx => {
//   const { name } = ctx.params;
//   ctx.body = name ? `${name}의 소개` : '소개';
// })

// router.get('/posts', ctx => {
//   const { id } = ctx.query;
//   ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.'
// })

app.use(bodyParser())
app.use(jwtMiddleware)
app.use(router.routes()).use(router.allowedMethods())

// need react static
const buildDirectory = path.resolve(__dirname, '../../blog-frontend/build');
app.use(serve(buildDirectory));
app.use(async ctx => {
  if(ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    console.log('front-end')
    await send(ctx, 'index.html', { root: buildDirectory })
  }
})

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})