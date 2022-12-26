const Task = ({ id, title, completed, onClick }) => {

    return (
        <div className={completed? 'task-card task-card-completed' : 'task-card'} onClick={onClick}>
            <div>
                <input type="checkbox" checked={completed} readOnly />
            </div>
            <div>{title}</div>
            <div>{id}</div>
        </div>
    );
};

export default Task;