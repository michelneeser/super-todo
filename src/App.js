import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import TodoList from './components/TodoList/TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TodoList />
      </div>
    );
  }
}

export default App;