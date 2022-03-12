import Post from "../../models/post";
import mongoose from 'mongoose';
import joi from 'joi'

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if(!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
}

export const write = async ctx => {
  const schema = joi.object().keys({
    title: joi.string().required(),
    body: joi.string().required(),
    tags: joi.array().items(joi.string()).required(),
  })
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;

  const post = new Post({
    title, body, tags
  });

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async ctx => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (error) {
    ctx.throw(500, e);
  }
};

export const read = async ctx => {
  const { id } = ctx.params;

  try {
    const post = await Post.findById(id).exec();
    if(!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e)
  }
};

export const remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const update = async ctx => {
  const { id } = ctx.params;

  const schema = joi.object().keys({
    title: joi.string(),
    body: joi.string(),
    tags: joi.array().items(joi.string()),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 업데이트 된 데이터를 반환, false일 경우 업데이트 전 데이터를 반환.
    }).exec();

    if(!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// export const replace = ctx => {};