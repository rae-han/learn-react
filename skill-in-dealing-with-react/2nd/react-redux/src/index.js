import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';

// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* 

  <Provider stroe={store}>  <= 오타
  ×
TypeError: Cannot read property 'getState' of undefined
(anonymous function)
node_modules/react-redux/es/components/Provider.js:20
  17 |   };
  18 | }, [store]);
  19 | var previousState = useMemo(function () {
> 20 |   return store.getState();
     | ^  21 | }, [store]);
  22 | useIsomorphicLayoutEffect(function () {
  23 |   var subscription = contextValue.subscription;
View compiled
mountMemo
node_modules/react-dom/cjs/react-dom.development.js:15846
  15843 | function mountMemo(nextCreate, deps) {
  15844 |   var hook = mountWorkInProgressHook();
  15845 |   var nextDeps = deps === undefined ? null : deps;
> 15846 |   var nextValue = nextCreate();
  15847 |   hook.memoizedState = [nextValue, nextDeps];
  15848 |   return nextValue;
  15849 | }
View compiled
useMemo
node_modules/react-dom/cjs/react-dom.development.js:16219
  16216 | ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
  16217 | 
  16218 | try {
> 16219 |   return mountMemo(create, deps);
        | ^  16220 | } finally {
  16221 |   ReactCurrentDispatcher$1.current = prevDispatcher;
  16222 | }
View compiled
useMemo
node_modules/react/cjs/react.development.js:1532
  1529 | }
  1530 | function useMemo(create, deps) {
  1531 |   var dispatcher = resolveDispatcher();
> 1532 |   return dispatcher.useMemo(create, deps);
  1533 | }
  1534 | function useImperativeHandle(ref, create, deps) {
  1535 |   var dispatcher = resolveDispatcher();
View compiled
Provider
node_modules/react-redux/es/components/Provider.js:19
  16 |     subscription: subscription
  17 |   };
  18 | }, [store]);
> 19 | var previousState = useMemo(function () {
     | ^  20 |   return store.getState();
  21 | }, [store]);
  22 | useIsomorphicLayoutEffect(function () {
View compiled
renderWithHooks
node_modules/react-dom/cjs/react-dom.development.js:14985
  14982 |   }
  14983 | }
  14984 | 
> 14985 | var children = Component(props, secondArg); // Check if there was a render phase update
        | ^  14986 | 
  14987 | if (didScheduleRenderPhaseUpdateDuringThisPass) {
  14988 |   // Keep rendering in a loop for as long as render phase updates continue to
View compiled
mountIndeterminateComponent
node_modules/react-dom/cjs/react-dom.development.js:17811
  17808 | 
  17809 |   setIsRendering(true);
  17810 |   ReactCurrentOwner$1.current = workInProgress;
> 17811 |   value = renderWithHooks(null, workInProgress, Component, props, context, renderLanes);
        | ^  17812 |   setIsRendering(false);
  17813 | } // React DevTools reads this flag.
  17814 | 
View compiled
beginWork
node_modules/react-dom/cjs/react-dom.development.js:19049
  19046 | switch (workInProgress.tag) {
  19047 |   case IndeterminateComponent:
  19048 |     {
> 19049 |       return mountIndeterminateComponent(current, workInProgress, workInProgress.type, renderLanes);
        | ^  19050 |     }
  19051 | 
  19052 |   case LazyComponent:
View compiled
HTMLUnknownElement.callCallback
node_modules/react-dom/cjs/react-dom.development.js:3945
  3942 | function callCallback() {
  3943 |   didCall = true;
  3944 |   restoreAfterDispatch();
> 3945 |   func.apply(context, funcArgs);
       | ^  3946 |   didError = false;
  3947 | } // Create a global error event handler. We use this to capture the value
  3948 | // that was thrown. It's possible that this error handler will fire more
View compiled
invokeGuardedCallbackDev
node_modules/react-dom/cjs/react-dom.development.js:3994
  3991 | // errors, it will trigger our global error handler.
  3992 | 
  3993 | evt.initEvent(evtType, false, false);
> 3994 | fakeNode.dispatchEvent(evt);
       | ^  3995 | 
  3996 | if (windowEventDescriptor) {
  3997 |   Object.defineProperty(window, 'event', windowEventDescriptor);
View compiled
invokeGuardedCallback
node_modules/react-dom/cjs/react-dom.development.js:4056
  4053 | function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
  4054 |   hasError = false;
  4055 |   caughtError = null;
> 4056 |   invokeGuardedCallbackImpl$1.apply(reporter, arguments);
  4057 | }
  4058 | /**
  4059 |  * Same as invokeGuardedCallback, but instead of returning an error, it stores
View compiled
beginWork$1
node_modules/react-dom/cjs/react-dom.development.js:23964
  23961 | } // Run beginWork again.
  23962 | 
  23963 | 
> 23964 | invokeGuardedCallback(null, beginWork, null, current, unitOfWork, lanes);
        | ^  23965 | 
  23966 | if (hasCaughtError()) {
  23967 |   var replayError = clearCaughtError(); // `invokeGuardedCallback` sometimes sets an expando `_suppressLogging`.
View compiled
performUnitOfWork
node_modules/react-dom/cjs/react-dom.development.js:22776
  22773 | 
  22774 | if ( (unitOfWork.mode & ProfileMode) !== NoMode) {
  22775 |   startProfilerTimer(unitOfWork);
> 22776 |   next = beginWork$1(current, unitOfWork, subtreeRenderLanes);
        | ^  22777 |   stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
  22778 | } else {
  22779 |   next = beginWork$1(current, unitOfWork, subtreeRenderLanes);
View compiled
workLoopSync
node_modules/react-dom/cjs/react-dom.development.js:22707
  22704 | function workLoopSync() {
  22705 |   // Already timed out, so perform work without checking if we need to yield.
  22706 |   while (workInProgress !== null) {
> 22707 |     performUnitOfWork(workInProgress);
  22708 |   }
  22709 | }
  22710 | 
View compiled
renderRootSync
node_modules/react-dom/cjs/react-dom.development.js:22670
  22667 | 
  22668 | do {
  22669 |   try {
> 22670 |     workLoopSync();
        | ^  22671 |     break;
  22672 |   } catch (thrownValue) {
  22673 |     handleError(root, thrownValue);
View compiled
performSyncWorkOnRoot
node_modules/react-dom/cjs/react-dom.development.js:22293
  22290 |   }
  22291 | } else {
  22292 |   lanes = getNextLanes(root, NoLanes);
> 22293 |   exitStatus = renderRootSync(root, lanes);
        | ^  22294 | }
  22295 | 
  22296 | if (root.tag !== LegacyRoot && exitStatus === RootErrored) {
View compiled
scheduleUpdateOnFiber
node_modules/react-dom/cjs/react-dom.development.js:21881
  21878 |   // root inside of batchedUpdates should be synchronous, but layout updates
  21879 |   // should be deferred until the end of the batch.
  21880 | 
> 21881 |   performSyncWorkOnRoot(root);
        | ^  21882 | } else {
  21883 |   ensureRootIsScheduled(root, eventTime);
  21884 |   schedulePendingInteractions(root, lane);
View compiled
updateContainer
node_modules/react-dom/cjs/react-dom.development.js:25482
  25479 |   }
  25480 | 
  25481 |   enqueueUpdate(current$1, update);
> 25482 |   scheduleUpdateOnFiber(current$1, lane, eventTime);
  25483 |   return lane;
  25484 | }
  25485 | function getPublicRootInstance(container) {
View compiled
(anonymous function)
node_modules/react-dom/cjs/react-dom.development.js:26021
  26018 | 
  26019 | 
  26020 |   unbatchedUpdates(function () {
> 26021 |     updateContainer(children, fiberRoot, parentComponent, callback);
        | ^  26022 |   });
  26023 | } else {
  26024 |   fiberRoot = root._internalRoot;
View compiled
unbatchedUpdates
node_modules/react-dom/cjs/react-dom.development.js:22431
  22428 | executionContext |= LegacyUnbatchedContext;
  22429 | 
  22430 | try {
> 22431 |   return fn(a);
        | ^  22432 | } finally {
  22433 |   executionContext = prevExecutionContext;
  22434 | 
View compiled
legacyRenderSubtreeIntoContainer
node_modules/react-dom/cjs/react-dom.development.js:26020
  26017 |   } // Initial mount should not be batched.
  26018 | 
  26019 | 
> 26020 |   unbatchedUpdates(function () {
        | ^  26021 |     updateContainer(children, fiberRoot, parentComponent, callback);
  26022 |   });
  26023 | } else {
View compiled
render
node_modules/react-dom/cjs/react-dom.development.js:26103
  26100 |     }
  26101 |   }
  26102 | 
> 26103 |   return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
  26104 | }
  26105 | function unstable_renderSubtreeIntoContainer(parentComponent, element, containerNode, callback) {
  26106 |   if (!isValidContainer(containerNode)) {
View compiled
Module.<anonymous>
src/index.js:12
   9 | 
  10 | const store = createStore(rootReducer);
  11 | 
> 12 | ReactDOM.render(
  13 |   <React.StrictMode>
  14 |     <Provider stroe={store}>
  15 |       <App />
View compiled
Module../src/index.js
http://localhost:3000/static/js/main.chunk.js:724:30
__webpack_require__
/Users/raehan/Documents/develop/learn/react/skill-in-dealing-with-react-3rd/react-redux/webpack/bootstrap:856
  853 | 
  854 | __webpack_require__.$Refresh$.init();
  855 | try {
> 856 | 	modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
      | ^  857 | } finally {
  858 | 	__webpack_require__.$Refresh$.cleanup(moduleId);
  859 | }
View compiled
fn
/Users/raehan/Documents/develop/learn/react/skill-in-dealing-with-react-3rd/react-redux/webpack/bootstrap:150
  147 | 		);
  148 | 		hotCurrentParents = [];
  149 | 	}
> 150 | 	return __webpack_require__(request);
      | ^  151 | };
  152 | var ObjectFactory = function ObjectFactory(name) {
  153 | 	return {
View compiled
1
http://localhost:3000/static/js/main.chunk.js:1232:18
__webpack_require__
/Users/raehan/Documents/develop/learn/react/skill-in-dealing-with-react-3rd/react-redux/webpack/bootstrap:856
  853 | 
  854 | __webpack_require__.$Refresh$.init();
  855 | try {
> 856 | 	modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
      | ^  857 | } finally {
  858 | 	__webpack_require__.$Refresh$.cleanup(moduleId);
  859 | }
View compiled
checkDeferredModules
/Users/raehan/Documents/develop/learn/react/skill-in-dealing-with-react-3rd/react-redux/webpack/bootstrap:45
  42 | 	}
  43 | 	if(fulfilled) {
  44 | 		deferredModules.splice(i--, 1);
> 45 | 		result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
     | ^  46 | 	}
  47 | }
  48 | 
View compiled
Array.webpackJsonpCallback [as push]
/Users/raehan/Documents/develop/learn/react/skill-in-dealing-with-react-3rd/react-redux/webpack/bootstrap:32
  29 | 	deferredModules.push.apply(deferredModules, executeModules || []);
  30 | 
  31 | 	// run deferred modules when all chunks ready
> 32 | 	return checkDeferredModules();
     | ^  33 | };
  34 | function checkDeferredModules() {
  35 | 	var result;
View compiled
(anonymous function)
http://localhost:3000/static/js/main.chunk.js:1:75
This screen is visible only in development. It will not appear if the app crashes in production.
Open your browser’s developer console to further inspect this error.  Click the 'X' or hit ESC to dismiss this message.
*/