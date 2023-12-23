import React from 'react'
import Column from './Column';


const Board = (props) => {
    return (
      <section className="flex w-full h-screen">
        {props.data.map((data) => <Column Title={data.title} />)}
      </section>
    )
  }
  
  export default Board
  