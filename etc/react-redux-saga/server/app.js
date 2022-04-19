const express = require('express');

const app = express();
const router = express.Router();
const port = 3000;

const todos = [
  { id: 0, text: 'test text', done: true },
]

router.get('/', (req, res) => {
  console.log('GET todo')
  res.status(500).json({});
})

app.use('/todo', router)

app.listen(port, () => {
  console.log(`Server on ${port}`)
})