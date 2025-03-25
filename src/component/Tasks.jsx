/* eslint-disable no-unused-vars */
import React from 'react'
import Task from './Task'
import DropArea from './DropArea'

const Tasks = ({tasksType,setTasks, onDrop,setActiveCard, tasks,moveTask,deletTask}) => {
 
  return (
    <>
    <div className={`Tasks  ${tasksType} `}>
    <h3 className="task-header">{tasksType} </h3>
   

    <div className="task-container">

     
          {tasks.length === 0 ?<> <p className="white">No tasks</p>     <DropArea onDrop={() => onDrop(tasksType,0, tasks,setTasks) } /></>: null}
      
      

    {
      
      
      tasks.map((tsk,ind)=>{
        <DropArea onDrop={() => onDrop(tasksType,ind+1,tasks,setTasks) } />
        // if(tsk.trim() === "") return
        return(
          <>
        <div className="task hello" key={ind} draggable onDragStart={()=>setActiveCard({src:tasksType,tasks:tasks  ,setTasks: setTasks,index:ind , task:tsk})} onDragEnd={()=>setActiveCard(null)}>
            <p className='task-text'> {tsk} </p>  
            <div className="task-btns">

              {
                  <>
                { moveTask && <button  className='success-btn' onClick={() => moveTask(tsk)}>next</button> }
                  <button className='cancel-btn' onClick={() => deletTask(tsk)}>delet </button>
                  </>
              }
        </div>
      </div>
      <DropArea onDrop = {() => onDrop(tasksType,ind+1,tasks,setTasks) } />
    </>

        )
       
        
      })
    }

    </div>

    </div>
    </>
  )
}

export default Tasks