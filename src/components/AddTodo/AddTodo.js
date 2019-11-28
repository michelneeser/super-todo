import React from 'react';
import './AddTodo.css';

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
          <div className="col s3 todo-add">
            <button className="btn waves-effect waves-light" type="submit" onClick={this.handleAdd}>
              <span>add</span>
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    );
  }

  handleAdd(e) {
    let todo = document.querySelector('.todo-input').value;
    if (todo) {
      console.log(`adding '${todo}'`);
      this.props.addTodo(todo);
    }
    e.preventDefault();
  }

}

export default AddTodo;