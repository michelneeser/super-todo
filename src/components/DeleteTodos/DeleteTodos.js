import React from 'react';
import './DeleteTodos.css';

class DeleteTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="todo-delete-all">
        <button className="btn waves-effect waves-light red" type="submit" onClick={this.handleClick}>
          <span>delete all</span>
          <i className="material-icons left">delete_sweep</i>
        </button>
      </div>
    );
  }

  handleClick() {
    this.props.deleteTodos();
  }
}

export default DeleteTodo;