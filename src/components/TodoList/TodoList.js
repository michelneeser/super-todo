import React from 'react';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import DeleteTodo from '../DeleteTodos/DeleteTodos';
import todoData from '../../Data';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: todoData.length + 1,
      todos: todoData.map(todo =>
        <Todo
          key={todo.id}
          todo={todo.text}
        />
      )
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <AddTodo addTodo={this.addTodo} />
        <ul className="todo-list collection">
          {this.state.todos}
        </ul>
        <DeleteTodo deleteTodos={this.deleteTodos} />
      </React.Fragment>
    );
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push(<Todo
      key={this.state.nextId}
      todo={todoText}
    />);

    this.setState(state => ({
      nextId: state.nextId + 1,
      todos: todos
    }));
  }

  deleteTodos() {
    this.setState({ todos: [] });
  }
}

export default TodoList;