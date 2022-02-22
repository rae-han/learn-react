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

# HTML5 이후에 추가된 웹개발 기본 기술들을 소개하자면 

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


# 미래를 생각하는 건 어떨까요.

 

5년 후에도 리액트 쓸 것 같습니까. 리액트의 이상하고 어려운 문법을 개선한 리액트2 이런거 나오지 않을까요.

특히 리덕스 이런거가 제일 먼저 뒤질 것 같습니다. Recoil이나 더 쉬운 라이브러리로 대체될 것 같은 느낌이 듭니다. 

 

아니면 웹과 앱을 동시에 개발할 수 있는 툴이 나와서 세상을 지배하면 React는 버릴 것 같지 않습니까.

Flutter라는게 그걸 지향하고 있긴 한데 매몰비용 때문인지 아직 대중화는 안되었습니다. 

 

 

 



 

자바스크립트의 자료형부분을 업그레이드 해서 쓸 수 있는 타입스크립트가 여전히 웹앱 개발자들에게 인기를 끌고 있습니다. 

Vue 3버전부터는 타입스크립트 기본 지원이고 

Angular는 이미 오래 전부터 타입스크립트 강제로 쓰라고 요구하고 

React 주요 라이브러리도 타입스크립트를 지원하고 있습니다. 

 

타입스크립트를 왜 쓰냐면 ..

실은 자바스크립트는 프로그래밍언어라기보다 쪼그만한 스크립트 언어라서 이걸로 코드 1천줄 1만줄 짜다보면 단점이 눈에 보입니다. 

- 원래 자바스크립트 자체가 자료의 형식이 자유로워서 예상치 못한 버그가 발생하고

- props로 string 자료형이 들어와야할 곳에 이상한 array가 들어와서 버그를 일으키기도 합니다. 

- 심지어 기본 에러 메세지도 추상적이고 그지같습니다. 

 

이런 버그를 예방하기 위해 type 체크하는 코드를 잔뜩 써서 자료형을 체크하곤 하지만 

이게 귀찮다면 그냥 타입스크립트를 쓰면 됩니다.

이 변수에 무슨 자료형이 들어와야할지 정확히 미리 정의할 수 있기 때문에 저런 귀찮고 쓸데없는 버그를 미연에 방지할 수 있습니다.

다만 약간 코드가 암호문같아집니다. 

