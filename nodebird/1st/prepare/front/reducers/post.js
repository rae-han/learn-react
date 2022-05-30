import shortid from "shortid";

export const initialState = {
  mainPosts: [
    { 
      id: shortid.generate(), 
      User: {
        id: 1,
        nickname: 'raehan',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [{
        id: shortid.generate(),
        src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      }, {
        id: shortid.generate(),
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
      }, {
        id: shortid.generate(),
        src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
      }],
      Comments: [
        { User: { id: shortid.generate(), nickname: 'man' }, content: 'hello!!' },
        { User: { id: shortid.generate(), nickname: 'woman' }, content: 'wow hi!!' },
      ],
    },
    { 
      id: shortid.generate(), 
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
        { User: { id: 1, nickname: 'man' }, content: 'hello!!' },
        { User: { id: 2, nickname: 'woman' }, content: 'wow hi!!' },
      ],
    }
  ],
  // 소문자와 대문자가 혼용돼서 사용되는 이유.
  // 디비에서 사용하는 sequalize와 관계 있는데 어떤 정보와 다른 정보가 관계가 있으면 합쳐주는데
  // 합쳐주는 애들은 대문자가 돼서 나온다
  // 설정을 통해서 소문자로 바꿔줄수 있다.
  imagePaths: [],
  // postAdded: false,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
}


export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'raehan',
  },
  Images: [],
  Comments: [],
})

const dummyComment = (data) => ({
  User: {
    id: data.userId,
    nickname: 'raehan',
  },
  content: data.content
})

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
})

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      }
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      }
    case REMOVE_POST_REQUEST:
      return {
        ...state,
        removePostLoading: true,
        removePostDone: false,
        removePostError: null,
      }
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        mainPosts: state.mainPosts.filter(post => post.id !== action.data),
        removePostLoading: false,
        removePostDone: true,
      }
    case REMOVE_POST_FAILURE:
      return {
        ...state,
        removePostLoading: false,
        removePostError: action.error,
      }
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      }
    case ADD_COMMENT_SUCCESS:
      console.log(action.data)
      const postIndex = state.mainPosts.findIndex(post => post.id === action.data.postId);
      console.log(postIndex)
      return {
        ...state,
        mainPosts: state.mainPosts.map(post => post.id === action.data.postId ? (
          { ...post, Comments: [ dummyComment(action.data), ...post.Comments ] }
        )  : post),
        addCommentLoading: false,
        addCommentDone: true,
      }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      }
    default:
      return state;
  }
};

export default reducer;
