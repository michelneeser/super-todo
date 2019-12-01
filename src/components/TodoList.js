import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import TodoCounter from './TodoCounter';
import DeleteTodos from './CleanUpTodos';
import todoData from '../Data';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.cleanUpTodos = this.cleanUpTodos.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);

    this.state = {
      nextId: todoData.length + 1,
      todos: todoData.map(todo => Object.assign(todo, { checked: false }))
    };
  }

  render() {
    let todoElements = this.state.todos.map(todo =>
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        checked={todo.checked}
        checkTodo={this.checkTodo}
        deleteTodo={this.deleteTodo}
      />
    );

    return (
      <React.Fragment>
        <AddTodo addTodo={this.addTodo} />
        <TodoCounter todos={this.state.todos} />
        <ul className="todo-list collection">
          {todoElements}
        </ul>
        <DeleteTodos
          hasTodos={this.state.todos.length > 0}
          hasCheckedTodos={this.state.todos.filter(todo => todo.checked).length > 0}
          cleanUpTodos={this.cleanUpTodos}
          deleteTodos={this.deleteTodos}
        />
      </React.Fragment >
    );
  }

  addTodo(todoText) {
    let todos = this.state.todos.slice();
    todos.push({
      id: this.state.nextId,
      text: todoText,
      checked: false
    });

    this.setState(state => ({
      nextId: state.nextId + 1,
      todos: todos
    }));
  }

  checkTodo(id) {
    let todos = this.state.todos.slice();
    todos.map(todo => {
      if (todo.id === id) {
        todo.checked = true;
      }
      return todo;
    });
    this.setState({ todos: todos });
  }

  deleteTodo(id) {
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: todos });
  }

  cleanUpTodos() {
    let todos = this.state.todos.slice();
    todos = todos.filter(todo => !todo.checked);
    this.setState({ todos: todos });
  }

  deleteTodos() {
    this.setState({ todos: [] });
  }
}

export default TodoList;