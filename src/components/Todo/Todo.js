import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleTodoCheck = this.handleTodoCheck.bind(this);
  }

  render() {
    return (
      <li className="collection-item">
        <label>
          <input type="checkbox" checked={this.state.checked} onChange={this.handleTodoCheck} />
          <span>{this.props.todo}</span>
        </label>
        <a href="#!" className="secondary-content" onClick={this.handleTodoDelete}><i className="material-icons">delete</i></a>
      </li>
    )
  }

  handleTodoCheck() {
    this.setState(state => ({ checked: !state.checked }));
  }

  handleTodoDelete(e) {
    e.preventDefault();
    e.target.closest('li').remove();
  }
}

export default Todo;