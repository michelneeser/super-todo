import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import DeleteTodos from './DeleteTodos';
import todoData from '../Data';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);

    this.state = {
      nextId: todoData.length + 1,
      todos: todoData.map(todo =>
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.text}
          deleteTodo={this.deleteTodo}
        />
      )
    };
  }

  render() {
    return (
      <React.Fragment>
        <AddTodo addTodo={this.addTodo} />
        <ul className="todo-list collection">
          {this.state.todos}
        </ul>
        <DeleteTodos
          hasTodos={this.state.todos.length > 0}
          deleteTodos={this.deleteTodos}
        />
      </React.Fragment>
    );
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push(<Todo
      key={this.state.nextId}
      id={this.state.nextId}
      todo={todoText}
      deleteTodo={this.deleteTodo}
    />);

    this.setState(state => ({
      nextId: state.nextId + 1,
      todos: todos
    }));
  }

  deleteTodo(id) {
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => todo.props.id !== id);
    this.setState({ todos: todos });
  }

  deleteTodos() {
    this.setState({ todos: [] });
  }
}

export default TodoList;