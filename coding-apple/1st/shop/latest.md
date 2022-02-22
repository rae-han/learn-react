어떤 유저가 상품을 조회하면

조회한 상품의 정보를 localStorage에 저장하기로 했습니다. 

watched 라는 이름으로 [1,2] 이런정보를 저장하기로요. 

그럼 당연히 function Detail(){} 안에 useEffect 안에다가 개발해야겠죠? 

 

 

1. 유저가 Detail 페이지로 들어가면 

2. localStorage에 있는 데이터를 꺼내서 (데이터가 없는경우도 있겠죠)

3. 일단 꺼낸게 JSON "[ ]" 같으니까 따옴표제거

4. 꺼낸거에 [ ].push(현재상품의id)

5. [ ]에 중복이 있으면 제거 

6. [ ]를 다시 localStorage에 넣음 

 

 

이렇게 개발할겁니다.

혼자 코딩못하는 분들은 특히 한글로 미리 저렇게 써놓고 코드로 옮기는 연습부터 하십시오.

 

 

 

 

1. 2. 3. Detail 페이지 들어가면 localStorage 데이터 꺼내기 & parse

 

일단 데이터는 watched라는 이름으로 저장할거라서 watched라는 데이터를 꺼내봅시다.

//Detail함수 내부

useEffect( ()=>{
  var arr = localStorage.getItem('watched');
  arr = JSON.parse(arr);
}, [] );
useEffect() 뭔지는 설명안해도 되겠죠? 컴포넌트가 로드시 한번 실행될겁니다. 

그 다음에 데이터꺼내고 따옴표를 제거해 JSON -> Object/Array로 변환해줍니다.

 

 

근데 여기서 데이터가 없거나 watched 항목이 없을 경우도 있겠죠? 

그건 나중에 if문을 쓰든 해보시면 되겠습니다.

 

 

 

 

4. 5. 현재상품번호 추가하기, 중복제거하기

 

[ ] 이걸 꺼냈으니까 여기에 현재 보이는 상품의 번호를 추가하면 되겠습니다. 

그 번호는 어딨냐고요? URL에 있네요. 

/detail/0으로 접속하면 0이라는 정보를 [ ] 에 추가하면 되겠습니다. 

0이라는 정보는 let {id} = useParams()로 예전에 가져왔으니

id라는 변수가 바로 우리가 찾던 정보네요. 

 

//Detail함수 내부

useEffect( ()=>{
  var arr = localStorage.getItem('watched');
  arr = JSON.parse(arr);
  
  arr.push(id);
  arr = new Set(arr);
  arr = [...arr];
}, [] );
그래서 세줄을 추가했습니다. 

new Set() 이라는곳 안에 어레이[] 를 집어넣으면 Set 자료형으로 바꿔줍니다.

Set자료형은 어레이랑 똑같은데 중복을 자동으로 제거해줍니다.

그래서 Set으로 변환했다가 다시 []로 변환하는 코드를 작성해봤습니다.

그럼 자동으로 중복제거해줍니다. 매우편리함 

 

 

 

 

6. localStorage에 다시 저장하기 

 

저장하시면 됩니다. 근데 따옴표쳐서 JSON으로 저장하셔야겠죠?

 

//Detail함수 내부

useEffect( ()=>{
  var arr = localStorage.getItem('watched');
  arr = JSON.parse(arr);
  
  arr.push(id);
  arr = new Set(arr);
  arr = [...arr];
  localStorage.setItem('watched', JSON.stringify(arr) );

}, [] );
그래서 맨 밑에 한줄을 추가했습니다. 

 

 

이제 if문 등을 이용해서 watched 항목이 localStorage에 없을 경우를 처리해보십시오.

혹은 그냥 방문자들에게 전부 watched 항목을 localStorage에 하나 강제로 생성하는 것도 편리한 방법입니다.

 