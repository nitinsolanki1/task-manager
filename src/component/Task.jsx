import React from 'react'

const Task = ({tasksType,taskText,moveTask,deletTask}) => {
  

        
    


  return (


    <div className={`task `} >

        <p className='task-text'> {taskText} </p>  
        <div className="btns">

        {
            tasksType !== "completed" &&
        <>
       { moveTask && <button className='cancel-btn' onClick={moveTask}>x</button> }
        <button className='success-btn' onClick={deletTask}>D</button>
        </>
}
        </div>
    </div>
  )
}

export default Task