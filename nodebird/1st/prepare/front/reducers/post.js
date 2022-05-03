
export const initialState = {
  mainPosts: [
    { 
      id: 1, 
      User: {
        id: 1,
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [{
        src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
      }, {
        src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
      }],
    }
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;