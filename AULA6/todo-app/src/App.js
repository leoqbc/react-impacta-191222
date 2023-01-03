import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

// inicialização do estado
const initialState = {
  tasks: [],
  taskText: '',
};

function App() {
  const [todo, setTodo] = useState(initialState);

  // executar uma vez somente
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodo((prev, current) => {
          return {
            ...current,
            tasks: data
          };
        });
      });
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>TODO - APP com React</h1>
      {todo.tasks.length === 0 ? 'Carregando...' : <Todo todo={todo} />}
    </div>
  );
}

export default App;
