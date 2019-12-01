import React from 'react';
import styled from 'styled-components';

class TodoCounter extends React.Component {

  render() {
    let { todos, checkedTodos } = this.props;
    let allChecked = (todos !== 0 && todos === checkedTodos);

    return (
      <StyledWrapper>
        <span>{checkedTodos} / {todos} done{allChecked ? ', yeah!' : ''}</span>
      </StyledWrapper>
    );
  }

}

const StyledWrapper = styled.div`
  text-align: center;
  margin-bottom: 1em;
`;

export default TodoCounter;