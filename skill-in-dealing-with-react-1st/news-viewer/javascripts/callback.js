let increase = (number, callback) => {
  setTimeout(()=>{
    const result = number + 10;

    if(callback) {
      callback(result)
    }
  }, 1000)
}

increase(0, result => {
  console.log(2, result)

  increase(result, result => {
    console.log(3, result)

    increase(result, result => {
      console.log(4, result)

      increase(result, result => {
        console.log(5, result)
      })
    })
  })
})