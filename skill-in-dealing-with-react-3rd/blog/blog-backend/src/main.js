require('dotenv').config();
// const Koa = require('koa');
// const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');
// const mongoose = require('mongoose');
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

const { PORT, MONGO_URI } = process.env;
const port = PORT || 4000;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
  })

const app = new Koa();
const router = new Router();

// const api = require('./api')
import api from './api';

router.use('/api', api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log('Listening to port %d', port);
});