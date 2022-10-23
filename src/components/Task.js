import { FaTimes } from 'react-icons/fa';

const faStyle = {
    color: 'red',
    cursor: 'pointer',
};

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} <FaTimes style={faStyle} onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
