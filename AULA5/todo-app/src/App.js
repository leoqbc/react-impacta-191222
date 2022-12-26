import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Task from './components/Todo/Task';

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
        setTodo({
          ...todo,
          tasks: data
        });
      });
    
    // IIFE
    // (async () => {
    //   const result = await fetch(); 
    // })();

  }, []);

  const handleTaskClick = (id) => {
    const tasks = todo.tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTodo({
      ...todo,
      tasks
    });
  }

  const mountTasks = () => {
    return todo.tasks.map(task => 
      <Task onClick={() => handleTaskClick(task.id)} key={task.id} {...task} />
    );
  };

  const handleFinishTasks = () => {
    setTodo({
      ...todo,
      tasks: todo.tasks.filter(task => task.completed === false)
    });
  };

  const onAddClick = (inputRef) => {
    const last = todo.tasks[todo.tasks.length - 1];

    setTodo({
      ...todo,
      tasks: [
        ...todo.tasks,
        {
          id: last ? last.id + 1 : 1,
          title: inputRef.current.value,
          completed: false
        }
      ]
    });
    inputRef.current.value = '';
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>TODO - APP com React</h1>
      <Todo 
        handleFinishTasks={handleFinishTasks}
        onAddClick={onAddClick} 
      >
        {mountTasks()}
      </Todo>
    </div>
  );
}

export default App;
