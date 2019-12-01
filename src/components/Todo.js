import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    const { text, checked } = this.props;

    return (
      <li className="collection-item">
        <label>
          <input type="checkbox" checked={checked} onChange={this.handleCheck} />
          <span>{text}</span>
        </label>
        <a href="#!" className="secondary-content" onClick={this.handleDelete}>
          <i className="material-icons">delete</i>
        </a>
      </li>
    )
  }

  handleCheck() {
    this.props.checkTodo(this.props.id);
  }

  handleDelete(e) {
    this.props.deleteTodo(this.props.id);
    e.preventDefault();
  }
}

export default Todo;