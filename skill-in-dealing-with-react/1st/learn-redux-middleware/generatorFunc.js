/** */
// function* generatorFunc() {
//   console.log('Hello')
//   yield 1;
//   console.log('Generator Fuc')
//   yield 2;
//   console.log('function*')
//   yield 3;

//   return 4;
// }

// const generator = generatorFunc();

// console.log(generator)
// for(let i=0; i<5; i++) {
//   generator.next();
// }

// generator.next();

/** */
// function* sumGenerator() {
//   console.log('sumGenerator');
//   let a = yield;
//   let b = yield;
//   yield a+b;
// }

// const sum = sumGenerator();
// let sum1 = sum.next();
// console.log(sum1)
// let sum2 = sum.next(1);
// console.log(sum2)
// let sum3 = sum.next(2);
// console.log(sum3)
// let sum4 = sum.next();
// console.log(sum4)

const HELLO = 'HELLO'

function* watchGenerator() {
  console.log('모니터링 중...');

  let prevAction = null;
  while(true) {
    const action = yield;
    console.log('이전엑션', prevAction)
    prevAction = action;
    if(action.type === HELLO) {
      console.log('안녕하세요')
    }
  }
}

const watch = watchGenerator();

let watch1 = watch.next();
console.log(watch1)
let watch2 = watch.next({type: 'TEST'});
console.log(watch2)
let watch3 = watch.next({type: HELLO});
console.log(watch3)
let watch4 = watch.next({type: HELLO});
console.log(watch4)

