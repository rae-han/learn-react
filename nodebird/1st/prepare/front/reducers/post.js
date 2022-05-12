
export const initialState = {
  mainPosts: [
    { 
      id: 1, 
      User: {
        id: 1,
        nickname: 'raehan',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [{
        src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
      }],
      Comments: [
        { User: { nickname: 'man' }, content: 'hello!!' },
        { User: { nickname: 'woman' }, content: 'wow hi!!' },
      ],
    },
    { 
      id: 2, 
      User: {
        id: 2,
        nickname: 'raehan',
      },
      content: '두 번째 게시글 #해시태그 #익스프레스',
      Images: [{
        src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
      }],
      Comments: [
        { User: { nickname: 'man' }, content: 'hello!!' },
        { User: { nickname: 'woman' }, content: 'wow hi!!' },
      ],
    }
  ],
  // 소문자와 대문자가 혼용돼서 사용되는 이유.
  // 디비에서 사용하는 sequalize와 관계 있는데 어떤 정보와 다른 정보가 관계가 있으면 합쳐주는데
  // 합쳐주는 애들은 대문자가 돼서 나온다
  // 설정을 통해서 소문자로 바꿔줄수 있다.
  imagePaths: [],
  postAdded: false,
}


const ADD_POST = 'post/ADD_POST';

let id = 2;
const dummyPost = {
  id: id++,
  content: `더미데이터 ${id}`,
  User: {
    id: 1,
    nickname: 'raehan',
  },
  Images: [],
  Comments: [],
} 

export const addPost = () => ({
  type: ADD_POST,
  data: dummyPost,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],
      }
    default:
      return state;
  }
};

export default reducer;
