import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    return (
      <li className="collection-item">
        <label>
          <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck} />
          <span>{this.props.todo}</span>
        </label>
        <a href="#!" className="secondary-content" onClick={this.handleDelete}>
          <i className="material-icons">delete</i>
        </a>
      </li>
    )
  }

  handleCheck() {
    this.setState(state => ({ checked: !state.checked }));
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteTodo(this.props.id);
  }
}

export default Todo;