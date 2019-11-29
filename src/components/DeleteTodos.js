import React from 'react';
import styled from 'styled-components';

class DeleteTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    let btnClass = `btn waves-effect waves-light red ${this.props.hasTodos ? '' : 'disabled'}`;

    return (
      <StyledWrapper>
        <button className={btnClass} type="submit" onClick={this.handleClick}>
          <span>delete all</span>
          <i className="material-icons left">delete_sweep</i>
        </button>
      </StyledWrapper>
    );
  }

  handleClick() {
    this.props.deleteTodos();
  }
}

const StyledWrapper = styled.div`
  text-align: center;
`;

export default DeleteTodo;