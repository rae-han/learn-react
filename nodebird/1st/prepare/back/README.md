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
