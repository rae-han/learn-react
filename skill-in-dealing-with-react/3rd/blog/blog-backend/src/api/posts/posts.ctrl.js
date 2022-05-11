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

export  const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if(!ObjectId.isValid(id)) {
    ctx.status = 400; // bad request
    return;
  }

  try {
    const post = await Post.findById(id);
    if(!post) {
      ctx.status = 404; // not found
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);  
  }
}

export const checkOwnPost = (ctx, next) => {
  console.log('checkOwnPost')
  const { user, post } = ctx.state;
  if(post.user._id.toString() !== user._id) {
    ctx.status = 403;
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
    title, body, tags,
    user: ctx.state.user,
  });

  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// list
export const list = async ctx => {
  const page = parseInt(ctx.query.page || '1', 10);
  const { tag, username } = ctx.query;

  if(page < 1) {
    ctx.status = 400;
    return;
  }

  const query = {
    ...(username ? { 'user.username': username } : {}),
    ...(tag ? { tags: tag } : {}),
  };

  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .lean()
      .skip((page -1)*10)
      .exec();

    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10))
    ctx.body = posts
      // .map(post => post.toJSON()) // === lean()
      .map(post => ({
        ...post,
        body: post.body.length < 2 ? post.body : `${post.body.slice(0, 2)}...`,
      }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async ctx => {
  // const { id } = ctx.params;

  // try {
  //   const post = await Post.findById(id).exec();
  //   if(!post) {
  //     ctx.status = 404;
  //     return;
  //   }
  //   ctx.body = post;
  // } catch (e) {
  //   ctx.throw(500, e)
  // } // postById 로 인한 생략
  ctx.body = ctx.state.post;
};

export const remove = async ctx => {
  console.log('post remove')
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