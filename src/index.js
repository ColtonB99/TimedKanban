import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Board from './components/Board';
import './tailwind.css';

const data = [
    { title: "To Do", content: "" },
    { title: "In Progress", content: "" },
    { title: "On Pause", content: "" },
    { title: "Completed", content: "" }
];


const App = () => (
    <div>
        <Header />
        <Board data={data} />
        <div>Hello from React!</div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
