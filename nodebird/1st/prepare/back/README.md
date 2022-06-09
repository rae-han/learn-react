# server, client 를 분리하는 이유 중 하나
스케일링을 할때 양쪽 요청이 비대칭일 수 있다
근데 한 묶음으로 늘리면 한쪽은 계속 놀게 될수 있다.
이때 분리하면 필요한 부분(ex. client)만 늘릴수 있다.
그리고 작은 컴퓨터 두대가 큰 컴퓨터 하나보다 싸다.

# 자주 쓰는 메소드
get 가져오다
post 생성하다
put 전체 수정 // 쓸일 적기 함
delete 제거
patch 부분 수정
option 찔러보기 (나 요청 보내도 돼?)
head 헤더만 가져오기 (헤더/바디)

# 시퀄라이즈
npm i sequelize sequelize-cli
npm i mysql2
npx sequelize init
init 해서 나온 config/config.json 파일 개발자 환경으로 설정

# mysql 시퀄라이즈 문서 다 적고 아래 에러 뜨면?
```
  code: 'ER_BAD_DB_ERROR',
    errno: 1049,
    sqlState: '42000',
    sqlMessage: "Unknown database 'react-nodebird'",
    sql: undefined
  },
  original: Error: Unknown database 'react-nodebird'
```

```
    npx sequelize db:create
```

# ERD 만들어두면 좋다.
젯브래인 데이터 그랩

# CORS 에러
CORS 에러는 브라우저에서 차단해서 생기는 것
하지만 개발자가 사용자의 브라우저를 건드는 것은 해킹이다.
서버에서 요청을 허용해주면 된다.
여러가지 방법이 있는데 아래 방법도 된다.
서버에서
```
    res.setHeader('Access-Control_Allow-Origin', '*');
```
또는 cors 라이브러리
또는 서버와 서버간 통신에는 CORS에러가 안난다.
브라우저에서 백앤드로 바로 요청을 하지 말고 브라우저에서 프론트 서버로 요청을 프론트에서 백 서버로 요청을 보내고 다시 차례대로 응답을 받는다.
그럼 포론트엔드 서버를 통해 요청/응답을 주고 받을수 있다.
이게 프록시이다.