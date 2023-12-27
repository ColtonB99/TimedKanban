// Board.js
import React from 'react';
import Column from './Column';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Board = (props) => {
  const { data, moveTask } = props;

  const onDragEnd = (result) => {
    const { source, destination } = result;
  
    // Do nothing if the item is dropped outside the list
    if (!destination) {
      return;
    }
  
    // Find the source and destination columns by uniqueID
    const sourceColumn = data.find(column => column.uniqueID.toString() === source.droppableId);
    const destColumn = data.find(column => column.uniqueID.toString() === destination.droppableId);
  
    // Guard against undefined columns
    if (!sourceColumn || !destColumn) {
      return;
    }
  
    // Find the task in the source column
    const task = sourceColumn.tasks[source.index];  // Ensure this gets the correct task
    if (!task) {
      return;
    }
  
    // Prepare parameters to call moveTask
    const from = {
      uniqueID: parseInt(source.droppableId, 10), 
      taskID: task.taskID
    };
  
    const to = {
      uniqueID: parseInt(destination.droppableId, 10),
      index: destination.index
    };
  
    // Call moveTask function
    moveTask(from, to);
  };
  
  

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board">
        {(provided) => (
          <section {...provided.droppableProps} ref={provided.innerRef} className="flex w-full h-screen">
            {data.map((column, index) => (
              <Column key={column.uniqueID} Data={column} index={index} />
            ))}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Board;
