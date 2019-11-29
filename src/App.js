import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import TodoList from './components/TodoList';
import styled from 'styled-components';

class App extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <TodoList />
      </StyledWrapper>
    );
  }
}

const StyledWrapper = styled.div`
  width: 40em;
  margin: auto;
  margin-top: 5em;
`;

export default App;