import React from 'react'
import Task from './Task';

const Column = (props) => {
  return ( 
    <div className="flex-1 p-4">
      <div className='font-bold text-lg'>{props.Data.title}</div>
      {props.Data.tasks.map((task) => <Task key={task.taskID} title={task.task}/> )}
    </div>
  )
}

export default Column
