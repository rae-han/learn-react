let a = [
  { '테스트1': [{id: 224, title: 'title1-1', link: 111111}, {id: 12, title: 'title1-2', link: 111222}]},
  { 'test': [{id: 222, title: 'title2', link: 222222}]},
  { '밥': [{id: 333, title: 'title3', link: 333333}]},
]

console.log(a)

// a[0].test[0].id = undefined

// console.log(a[0].test)

let categoryKey = "테스트1";
let itemId = 224;
let result1 =  a.map(category => Object.keys(category).includes(categoryKey) ? { [categoryKey]: category[categoryKey].filter(product => product.id !== itemId)} : category);
console.log(result1)
