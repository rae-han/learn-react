import shortId from "shortid";
import produce from "immer";
import { faker } from "@faker-js/faker"

export const initialState = {
  mainPosts: [
    { 
      id: shortId.generate(),
      User: {
        id: 1,
        nickname: 'raehan',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [{
        id: shortId.generate(),
        src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      }, {
        id: shortId.generate(),
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
      }, {
        id: shortId.generate(),
        src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
      }],
      Comments: [
        { User: { id: shortId.generate(), nickname: 'man' }, content: 'hello!!' },
        { User: { id: shortId.generate(), nickname: 'woman' }, content: 'wow hi!!' },
      ],
    },
    { 
      id: shortId.generate(),
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

initialState.mainPosts = initialState.mainPosts.concat(
  Array.from({ length: 20 }).fill().map((v, i) => ({
    id: shortId.generate(),
    User: {
      id: shortId.generate(),
      nickname: faker.name.findName()
    },
    content: faker.lorem.paragraph(),
    Images: [{
      src: faker.image.imageUrl(),
      // src: ``,
    }],
    Comments: [{
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.sentence(),
    }],
  }))
)
console.log(initialState)

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

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone= false;
      draft.addPostError= null;
      break;
    case ADD_POST_SUCCESS:
      draft.mainPosts.unshift(dummyPost(action.data));
      draft.addPostLoading = false;
      draft.addPostDone = true;
      break;
    case ADD_POST_FAILURE:
      draft.draddPostLoading = false;
      draft.draddPostError = action.error;
      break;
    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;
    case REMOVE_POST_SUCCESS:
      draft.mainPosts = draft.mainPosts.filter(post => post.id !== action.data);
      draft.removePostLoading = false;
      draft.removePostDone = true;
      break;
    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;
    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;
    case ADD_COMMENT_SUCCESS:
      const post = draft.mainPosts.find(post => post.id === action.data.postId);
      post.Comments.unshift(dummyComment(action.data.content));
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;
    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;
