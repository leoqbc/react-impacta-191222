import { useRef } from 'react';
import './Todo.css';

export default function Todo({ 
    children, 
    onAddClick, 
    handleFinishTasks
}) {
    const inputRef = useRef(null);

    return (
        <section className="tasks">
            <div>
                <label>Digite sua tarefa </label>
                <input ref={inputRef} type="text" />
                <button onClick={() => onAddClick(inputRef)}>Adicionar</button>
            </div>
            <div>
                {children}
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