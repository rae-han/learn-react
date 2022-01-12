import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map(i => ({
    title: `포스트 #${i}`,
    body: `ABCDEFGHIJKLMNOPQRSTUVWXYZ 나라의 말이 중국과 달라 한문·한자와 서로 통하지 아니하므로 이런 까닭으로 어리석은 백성이 이르고자 하는 바가 있어도 끝내 제 뜻을 능히 펴지 못하는 사람이 많다. 내가 이를 위해 불쌍히 여겨 새로 스물여덟 글자를 만드니 사람마다 하여금 쉬이 익혀 날마다 씀에 편안케 하고자 할 따름이다. 01234567890.`,
    tags: ['가짜', '데이터']
  }))

  Post.insertMany(posts, (err, docs) => {
    console.log(docs)
  })
}