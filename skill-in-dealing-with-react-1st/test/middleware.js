const loggerMiddleware = first => second => third => {
  console.group('test')
  console.log(first);
  console.log(second);
  console.log(third)
  console.groupEnd();
}

loggerMiddleware(1)(2)(3)

const addOne1 = x => x+1;
let result1 = addOne1(1);
console.log(result1);

setTimeout(() => {
  const result2 = addOne1(1);
  console.log(result2)
}, 1000)

const addOneThunk1 = (x) => {
  setTimeout(() => {
    const result3 = addOne1(x);
    console.log(result3)
  }, 1000)
}

addOneThunk1(1);

