import React from 'react';
import styled, {css} from 'styled-components';

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;

  &:hover {
    background: rgba(255, 255, 255, .9)
  }

  ${props => props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        backgrouind: white;
        color: black;
      }
    `
  };

  & + button {
    margin-left: 1rem;
  }

`;

const StyledComponent = () => {
  return (
    <div>
      <Box color="black">
        <Button>안녕하세요</Button>
        <Button inverted={true}>테두리만</Button>
      </Box>
    </div>      
  );
};

export default StyledComponent;