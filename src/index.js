import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import Header from './components/Header';
import Board from './components/Board';
import './tailwind.css';

const App = () => {

    // Baseline data for now, we will update this in the future
    const initialData = [
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
        { uniqueID: 4, title: "Completed", tasks: [
            { taskID: 10, task: "Finish project documentation" },
            { taskID: 11, task: "Send project deliverables" },
            { taskID: 12, task: "Celebrate team success" }
        ] }
    ];
  
    // Use useState to initialize the tasks state
    const [tasks, setTasks] = useState(initialData);
  
    // Move task function
    const moveTask = (from, to) => {
        const { uniqueID: fromColumnId, taskID: fromTaskId } = from;
        const { uniqueID: toColumnId, index: toIndex } = to;
      
        setTasks(prevTasks => {
          const newTasks = prevTasks.map(column => ({ ...column, tasks: [...column.tasks] }));
          const fromColumn = newTasks.find(column => column.uniqueID === fromColumnId);
          const toColumn = fromColumnId === toColumnId ? fromColumn : newTasks.find(column => column.uniqueID === toColumnId);
      
          // Find and remove the task from the 'from' column
          const taskIndex = fromColumn.tasks.findIndex(task => task.taskID === fromTaskId);
          const [taskToMove] = fromColumn.tasks.splice(taskIndex, 1);
      
          // Add the task to the 'to' column at the correct position
          toColumn.tasks.splice(toIndex, 0, taskToMove);
      
          return newTasks;
        });
      };
      
      
      
    
  
    return (
      <div>
        <Header />
        <Board data={tasks} moveTask={moveTask} />
        <div>Hello from React!</div>
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));
  