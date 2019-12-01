import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import TodoCounter from './TodoCounter';
import CleanUpTodos from './CleanUpTodos';
import todoData from '../Data';
import uuid from 'uuid/v4';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.cleanUpTodos = this.cleanUpTodos.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);

    let todos = this.getTodos();
    this.state = {
      todos: todos
    };
  }

  getTodos() {
    let todos = JSON.parse(localStorage.getItem('todos'));
    if (!todos || todos.length === 0) {
      todos = todoData;
    }
    return todos.map(todo => Object.assign(todo, { id: uuid() }));
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
        <TodoCounter
          todos={this.state.todos.length}
          checkedTodos={this.state.todos.filter(todo => todo.checked).length}
        />
        <React.Fragment>
          <ul className="todo-list collection">
            {todoElements}
          </ul>
        </React.Fragment>
        <CleanUpTodos
          hasTodos={this.state.todos.length > 0}
          hasCheckedTodos={this.state.todos.filter(todo => todo.checked).length > 0}
          cleanUpTodos={this.cleanUpTodos}
          deleteTodos={this.deleteTodos}
        />
      </React.Fragment>
    );
  }

  componentDidUpdate() {
    let todos = this.state.todos.map(todo => (
      {
        text: todo.text,
        checked: todo.checked
      }
    ));
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  addTodo(todoText) {
    // check for duplicate
    if (this.state.todos.find(todo => todo.text === todoText) !== undefined) {
      return false;
    }

    let todos = this.state.todos.slice();
    todos.push({
      id: uuid(),
      text: todoText,
      checked: false
    });

    this.setState(state => ({
      todos: todos
    }));

    return true;
  }

  checkTodo(id, check) {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.checked = check;
      }
      return todo;
    });
    this.setState({ todos: todos });
  }

  deleteTodo(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: todos });
  }

  cleanUpTodos() {
    let todos = this.state.todos.filter(todo => !todo.checked);
    this.setState({ todos: todos });
  }

  deleteTodos() {
    this.setState({ todos: [] });
  }
}

export default TodoList;