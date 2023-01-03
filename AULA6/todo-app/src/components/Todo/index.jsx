import { useRef, useState } from 'react';
import Task from './Task';
import './Todo.css';

export default function Todo(props) {
    const inputRef = useRef(null);
    const [tasks, setTasks] = useState(props.todo.tasks);

    const onAddClick = () => {
        console.log('input text: ', inputRef.current.value);
        const last = tasks[tasks.length - 1];
        setTasks([
            ...tasks,
            {
                id: last ? last.id + 1 : 1,
                title: inputRef.current.value,
                completed: false
            }
        ]);
        inputRef.current.value = '';
    };

    const handleTaskClick = (id) => {
        const filteredTasks = tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });

        setTasks(filteredTasks);
    };

    const handleFinishTasks = () => {
        setTasks(
            tasks.filter(task => task.completed === false)
        );
    };

    return (
        <section className="tasks">
            <div>
                <label>Digite sua tarefa </label>
                <input ref={inputRef} type="text" />
                <button onClick={() => onAddClick()}>Adicionar</button>
            </div>

            <div>
                {tasks.map(task =>
                    <Task onClick={() => handleTaskClick(task.id)} key={task.id} {...task} />
                )}
            </div>

            <button
                onClick={handleFinishTasks}
                className="todo-concluir"
            >
                Concluir tarefas
            </button>
        </section>
    );
}