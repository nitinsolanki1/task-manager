
import { useEffect, useState } from "react"
import Tasks from "./component/Tasks"
import "./css/index.css"

function App() {
  const getStoredTask = (key) => JSON.parse(localStorage.getItem(key)) || []
 
  const [newTask,setNewTasks] = useState(getStoredTask("newTask"))
  const [runningTasks,setRunningTasks] = useState(getStoredTask("runningTask"))
  const [completedTasks,setCompletedTasks] = useState(getStoredTask("completedTask"))
  const [taskInput,setTaskInput] = useState("")
  const [activeCard,setActiveCard] = useState("")


  useEffect(()=> localStorage.setItem("newTask" , JSON.stringify(newTask)) , [newTask])
  useEffect(()=> localStorage.setItem("runningTask" , JSON.stringify(runningTasks)) , [runningTasks])
  useEffect(()=> localStorage.setItem("completedTask" , JSON.stringify(completedTasks)) , [completedTasks])
  const AddTask = () => {
    if(taskInput.trim() == "") return
    setNewTasks([...newTask,taskInput])
    setTaskInput("")
    console.log(newTask)
  }

  const moveTask = (task, from , to , setFrom ,setTo) => {
      setFrom(from.filter((t) => t !== task))
      setTo([...to,task])
  }

  const deletTask = (task,from,setFrom) => {
      setFrom(from.filter((t)=> t!=task))
  }

  const onDrop = (status,index,Tasks,setTasks) => {

    console.log(`${activeCard.index } from ${activeCard.src} is going to place in ${status} at ${index}` )


    
    console.log("old destination task" , Tasks)
    // const newlist = Tasks.splice(index,0,activeCard.index)
    const newlist =[...Tasks.slice(0, index), activeCard.task, ...Tasks.slice(index)];
    console.log("new destination task" , newlist)
    
    
    console.log("old source task" , activeCard.tasks)
    const updatedTask = activeCard.tasks.filter((t,i) => i !== activeCard.index)
    
    console.log("new souce task" , updatedTask)
  
    activeCard.setTasks(updatedTask)   //update souce  
    setTasks(newlist)     //update destination
  }
  return (
    <>
    <div className="main-task">

            
        <div className="addbtn">
            <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder='enter new  task '  />
            <button onClick={AddTask}>Add</button>
        </div>


        <div className="container-center">
             <Tasks onDrop={onDrop}   setTasks={setNewTasks} setActiveCard={setActiveCard} tasksType={"todo"}   tasks={newTask} AddTask={AddTask} moveTask={(task) => moveTask(task,newTask,runningTasks,setNewTasks,setRunningTasks)} deletTask={(task => deletTask(task,newTask,setNewTasks))} />
             <Tasks onDrop={onDrop} setTasks={setRunningTasks} setActiveCard={setActiveCard} tasksType={"in progress"} tasks={runningTasks} moveTask={(task) => moveTask(task,runningTasks,completedTasks,setRunningTasks,setCompletedTasks)} deletTask={(task => deletTask(task,runningTasks,setRunningTasks))} />
             <Tasks onDrop={onDrop} setTasks={setCompletedTasks} setActiveCard={setActiveCard} tasksType={"completed"} tasks={completedTasks} deletTask={(task => deletTask(task,completedTasks,setCompletedTasks))} />
        </div>
         
         {/* <h1>active card - {activeCard}</h1> */}
    </div>

    </>
  )
}



export default App;
