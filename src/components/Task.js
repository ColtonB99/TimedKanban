import React from 'react'

const Task = (props) => {
  return (
    <div className='Task p-3 border mb-2'>
        {props.title}
    </div>
  )
}

export default Task
