import React from 'react';
import styled from 'styled-components';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  render() {
    return (
      <form>
        <div className="row">
          <div className="col s9">
            <input className="todo-input" type="text" placeholder="add todo" />
          </div>
          <StyledWrapper className="col s3">
            <button className="btn waves-effect waves-light" type="submit" onClick={this.handleAdd}>
              <span>add</span>
              <i className="material-icons right">send</i>
            </button>
          </StyledWrapper>
        </div>
      </form>
    );
  }

  handleAdd(e) {
    let input = document.querySelector('.todo-input');
    let todo = input.value;

    if (todo) {
      if (this.props.addTodo(todo)) {
        input.value = '';
      }
    }

    e.preventDefault();
  }
}

const StyledWrapper = styled.div`
  text-align: right;
`;

export default AddTodo;