const express = require('express');
const app = express();

const postRouter = require('./routes/post')

app.get('/', (req, res) => {
  res.send('hello express');
});

app.get('/api', (req, res) => {
  res.send('hello api');
});

// app.use(postRouter); // post를 프리픽스 해주고 싶다면
app.use('/post', postRouter);

app.listen(3080, () => {
  console.log('running server');
})