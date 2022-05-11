import React from 'react';
import PropTypes from 'prop-types';

const MyComponentFunc1 = props => { // 2
  // 7 Destructuring Assignment
  const { name, children, favoriteNumber } = props;

  return (
    <div>
      <div>
        {/* 3  props.name */}
        {/* 6. children, children default props */}
        컴포넌트 {props.name} {props.age} {props.children}
      </div>
      <div>destructuring assignment: {name} {children}</div>
      <div>favoriteNumber: {favoriteNumber}</div>
    </div>
  );
};

// 4 age defualt props
MyComponentFunc1.defaultProps = {
  age: 30,
  // 6
  children: '자식의 기본 값',
  favoriteNumber: 123
}

// 10. prop types
MyComponentFunc1.propTypes = {
  name: PropTypes.string, 
  // 11. isRequired 기본 값을 줘도 된다.
  favoriteNumber: PropTypes.number.isRequired,
}

/* 
  # 12. 더 많은 PropTypes 종류

  - array: 배열
  - arrayOf(PropTypes.[특정 값]): 특정 값으로 이뤄진 배열
  - bool
  - function
  - number
  - string
  - symbol
  - node: 렌더링할 수 있는 모든 것
  - instanceOf([Class]): 특정 클래스의 인스턴스
  - oneOf(['dog', 'cat']): 주어진 배열 요소 중 값 하나
  - oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안 종류 중 하나
  - objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
  - shape({ name: PropTypes.string, num: PropTypes.number }): 주어진 스키마를 가진 객체
  - any: 아무 종류
// */

export default MyComponentFunc1; 
