const number = 10;
const objectValue = {
  level1: {
    form: 1,
    key: 2,
    value: 3,
    level2: {
      level3: {
        treasure: '보물'
      }
    }
  },
}

const testFunc1 = (number, { level1 }) => {
  console.log(number, level1)
}

testFunc1(number, objectValue);

const testFunc2 = (number, { level1: { level2: { level3: { treasure }} }}) => {
  console.log(number, treasure)
}

testFunc2(number, objectValue);