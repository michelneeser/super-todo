import React from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo';
import todoData from '../../Data';

class TodoList extends React.Component {
  render() {
    const todoList = todoData.map(todo =>
      <Todo
        key={todo.id}
        todo={todo.text}
      />
    );

    return (
      <ul className="todo-list collection with-header">
        <li className="collection-header"><h4>Super Todo 1.0</h4></li>
        {todoList}
      </ul>
    );
  }
}

export default TodoList;