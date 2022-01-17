import React from 'react';
import PropTypes from 'prop-types';

const MyComponentFunc1 = props => { // 2
  // 7 Destructuring Assignment
  const { name, children } = props;

  return (
    <div>
      <div>
        {/* 3  props.name */}
        {/* 6. children, children default props */}
        컴포넌트 {props.name} {props.age} {props.children}
      </div>
      <div>{name} {children}</div>
    </div>
  );
};

// 4 age defualt props
MyComponentFunc1.defaultProps = {
  age: 30,
  // 6
  children: '자식의 기본 값'
}

// 10. prop types
MyComponentFunc1.propTypes = {
  name: PropTypes.string
}

export default MyComponentFunc1; 
