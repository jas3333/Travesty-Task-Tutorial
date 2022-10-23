//import './index.css';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

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

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
    };

    return (
        <div className='container'>
            <Header />
            <AddTask />
            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
                'Looks empty here, add something to do'
            )}
        </div>
    );
};

export default App;
