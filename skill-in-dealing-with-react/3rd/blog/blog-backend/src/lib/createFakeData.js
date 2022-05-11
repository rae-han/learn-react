import Post from '../models/post';

export default function createFakeData() {
  const posts = [...Array(50).keys()].map(i => ({
    title: `post #${i}`,
    body: 'this is fake post',
    tags: [`${i}`, 'this', 'is', 'fake', 'tags']
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}