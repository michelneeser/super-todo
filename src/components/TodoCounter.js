import React from 'react';
import styled from 'styled-components';

class TodoCounter extends React.Component {

  render() {
    let todos = this.props.todos;
    let allTodosCount = todos.length;
    let checkedTodosCount = todos.filter(todo => todo.checked).length;
    let allChecked = (allTodosCount === checkedTodosCount);

    return (
      <StyledWrapper>
        <span>{checkedTodosCount} / {allTodosCount} done{allChecked ? ', yeah!' : ''}</span>

      </StyledWrapper>
    );
  }

}

const StyledWrapper = styled.div`
  text-align: center;
  margin-bottom: 1em;
`;

export default TodoCounter;