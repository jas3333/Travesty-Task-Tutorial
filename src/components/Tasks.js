const tasks = [
    {
        id: 1,
        text: 'test',
        other: 'no-show',
        day: 'monday',
        reminder: true,
    },
    {
        text: 'test4',
        day: 'Wednesday',
        reminder: true,
        id: 3,
    },
    {
        text: 'Task6',
        day: 'Thursday',
        reminder: true,
        id: 4,
    },
];

const Tasks = () => {
    return (
        <div>
            {tasks.map((task) => (
                <h3>{task.text}</h3>
            ))}
        </div>
    );
};

export default Tasks;
