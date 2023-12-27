import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {

  if (!task) {
    return null; // Or some fallback UI
  }


  return (
    <Draggable draggableId={task.taskID.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='Task p-3 border mb-1'
        >
          {task.task}
        </div>
      )}
    </Draggable>
  )
}

export default Task;
