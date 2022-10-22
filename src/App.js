//import './index.css';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Pet the cat',
            other: 'no-show',
            day: 'Monday',
            reminder: true,
        },
        {
            text: 'Go for a walk',
            day: 'Wednesday',
            reminder: true,
            id: 2,
        },
        {
            text: 'Program all Day',
            day: 'Thursday',
            reminder: true,
            id: 3,
        },
    ]);

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className='container'>
            <Header />
            <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
    );
};

export default App;
