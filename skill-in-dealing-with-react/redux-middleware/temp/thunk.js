const addOne1 = n => n+1;
let result1 = addOne1(1);
console.log(result1)

const addOneThunk1 = (n) => {
  const thunk = () => addOne1(n);
  return thunk
};

let result2 = addOneThunk1(1);
console.log(result2())