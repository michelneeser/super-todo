import React from 'react';
import styled from 'styled-components';

class CleanUpTodos extends React.Component {
  constructor(props) {
    super(props);
    this.handleCleanUp = this.handleCleanUp.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    let cleanUpBtnClass = `btn waves-effect waves-light blue ${this.props.hasCheckedTodos ? '' : 'disabled'}`;
    let deleteBtnClass = `btn waves-effect waves-light red ${this.props.hasTodos ? '' : 'disabled'}`;

    return (
      <StyledWrapper>
        <StyledButton className={cleanUpBtnClass} type="submit" onClick={this.handleCleanUp}>
          <span>clean up</span>
          <i className="material-icons left">check_box</i>
        </StyledButton>
        <StyledButton className={deleteBtnClass} type="submit" onClick={this.handleDelete}>
          <span>delete all</span>
          <i className="material-icons left">delete_sweep</i>
        </StyledButton>
      </StyledWrapper>
    );
  }

  handleCleanUp() {
    this.props.cleanUpTodos();
  }

  handleDelete() {
    this.props.deleteTodos();
  }
}

const StyledWrapper = styled.div`
  text-align: center;
`;

const StyledButton = styled.button`
  margin-left: 1em;
  margin-right: 1em;
`;

export default CleanUpTodos;