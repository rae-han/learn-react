const checkLoggedIn = (ctx, next) => {
  console.log('check loggedin')
  if(!ctx.state.user) {
    ctx.status = 401;
    return;
  }
  return next();
};

export default checkLoggedIn;
