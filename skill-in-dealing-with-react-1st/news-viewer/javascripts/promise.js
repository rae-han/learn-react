let increase = (number) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;

      if(result>50) {
        const e = new Error('Number Too Big')
        return reject(e)
      }

      resolve(result);
    }, 1000)
  })

  return promise;
}

increase(0)
  .then(num => {
    console.log(num);
    return increase(num)
  })
  .then(num => {
    console.log(num);
    return increase(num)
  })
  .then(num => {
    console.log(num);
    return increase(num)
  })
  .then(num => {
    console.log(num);
    return increase(num)
  })
  .then(num => {
    console.log(num);
    return increase(num)
  })
  .then(num => {
    console.log(num);
    return increase(num)
  })
  .then(num => {
    console.log(num);
    return increase(num)
  })
  .catch(e => {
    console.log(e)
  })