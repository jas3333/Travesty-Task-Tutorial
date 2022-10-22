import { FaTimes } from 'react-icons/fa';

const faStyle = {
    color: 'red',
    cursor: 'pointer',
};

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>
                {task.text} <FaTimes style={faStyle} onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
