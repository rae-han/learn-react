const middlewareTest1 = first => second => third => {
  console.log(first, second, third);
}

const middlewareTest2 = first => {
  return second => {
    return third => {
      console.log(first, second, third)
    }
  } 
}

middlewareTest1(1)(2)(3)
middlewareTest2(1)(2)(3)