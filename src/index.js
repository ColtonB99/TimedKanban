import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Board from './components/Board';
import './tailwind.css';

const data = [
    { uniqueID: 1, title: "To Do", tasks: [
        { taskID: 1, task: "Write a report" },
        { taskID: 2, task: "Prepare a presentation" },
        { taskID: 3, task: "Research new ideas" }
    ] },
    { uniqueID: 2, title: "In Progress", tasks: [
        { taskID: 4, task: "Design a prototype" },
        { taskID: 5, task: "Review project progress" },
        { taskID: 6, task: "Attend team meeting" },
        { taskID: 7, task: "Coding tasks" }
    ] },
    { uniqueID: 3, title: "On Pause", tasks: [
        { taskID: 8, task: "Waiting for client feedback" },
        { taskID: 9, task: "Resolve technical issues" }
    ] },
    { uniqueID: 4, title: "Completed", tasks: [
        { taskID: 10, task: "Finish project documentation" },
        { taskID: 11, task: "Send project deliverables" },
        { taskID: 12, task: "Celebrate team success" }
    ] }
];


const App = () => (
    <div>
        <Header />
        <Board data={data} />
        <div>Hello from React!</div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
