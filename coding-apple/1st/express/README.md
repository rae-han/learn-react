# 서버에서 그냥 리액트 빌드한 index.html 파일을 주면 된다.

- 리액트는 그냥 HTML을 쉽고 빠르게 예쁘게 만들어주는 툴.
- 사실 javascript로 다 할수 있다.
- Node + Express + React 를 사용할 경우 서버에서 view 부분 기능 개발이 필요 없다.

# 리액트에서 라우팅을 담당할 경우
app.get('*', (req, res) => {});

# nodejs ajax 요청 스무스하게 하는 법
app.use(express.json());
let cors = require('cors');
app.use(cors());

# 서브디렉토리에 리액트앱 발행하고 싶은 경우
1. 라우팅을 아래와 같이 바꿔주고
const dirClient = path.join(__dirname, '../client/build');

// app.use(express.static(path.join(dirClient)));
app.use('/', express.static(path.join(___dirname, 'public')));
app.use('/react', express.static(path.join(dirClient)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/main.html'))
})

app.get('/react', (req, res) => {
  res.sendFile(path.join(dirClient, 'index.html'))
})

2. 리액트 프로젝트 내의 package.json
{
  "homepage": "/react",
  "version": "0.1.0",
  ...
}

# 서버앱과 리액트앱을 동시에 띄워서 개발을 진행하고 싶다면
리액트도 localhost:? 서버도 localhost:?? 로 띄워두고 개발하고 싶다면
리액트 package.json 의 proxy 부분 설정을 
서버 미리보기 띄우던 localhost:?? 로 설정해주면 된다.
그럼 리액트에서 서버로 ajax 요청 잘된다.
https://create-react-app.dev/docs/proxying-api-requests-in-development/

HTML5 이후에 추가된 웹개발 기본 기술들을 소개하자면 

- FileReader API 

- 로컬스토리지

- IndexedDB

- Web worker

- Geolocation

- Canvas

- drag & drop & touch 이벤트 

- fetch API

- CSS grid, flex 레이아웃  

- Web audio/video