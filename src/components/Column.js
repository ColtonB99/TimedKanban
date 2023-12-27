import React from 'react'
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const Column = (props) => {
  // Ensure that tasks is always an array
  const tasks = props.Data.tasks ? props.Data.tasks.filter(task => task !== undefined) : [];

  return ( 
    <Droppable droppableId={props.Data.uniqueID.toString()}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="flex-1 p-4">
          <div className='font-bold text-lg mb-2'>{props.Data.title}</div>
          {tasks.map((task, index) => (
            <Task key={task.taskID} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default Column;
