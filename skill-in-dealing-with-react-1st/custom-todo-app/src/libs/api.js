const sleep = n => new Promise(resolve => setTimeout(resolve, n))

let todos = new Array(2048).fill({});
todos = todos.map((todo, idx) => ({ ...todo, id: idx  }))


export const getTodos = async () => {
  await sleep(1000);
  return todos
}