const express = require('express');

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let id = 1;
let todos = [
  { id: 0, text: 'test text', done: true },
]

router.get('/', (req, res) => {
  console.log('GET todo', req.body);
  res.status(200).json(todos);
});

router.post('/', (req, res) => {
  console.log(req.body)
  todos = todos.concat({ id: id++, text: req.body.text, done: false });
  res.status(200).json(todos);
})

app.use('/todo', router)

app.listen(port, () => {
  console.log(`Server on ${port}`)
})