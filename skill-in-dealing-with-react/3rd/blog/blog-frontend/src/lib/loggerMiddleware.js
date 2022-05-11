const loggerMiddleware = store => next => action => {
  console.groupCollapsed(action && action.type);
  console.log('store.getState()', store.getState());
  console.log('action', action);
  next(action);
  console.log('store.getState()', store.getState());
  console.groupEnd()
}

export default loggerMiddleware;