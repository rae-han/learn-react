import React from 'react';

// 8 Destructuring Assignment
// 9 Default function parameter
const MyComponentFunc2 = ({
  name = "기본 값", 
  children = "기본 값"
}) => {
  return (
    <div>
      구조분해할당 {name} {children}
    </div>
  );
};

export default MyComponentFunc2; 


